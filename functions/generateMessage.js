//Made by under ctrl, credits required
import config from "../config.json" assert { type: "json" };
import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: "Your API key",
});

async function generateMessage(message, client) {
  if (message.author.bot) return;

  await message.channel.sendTyping();
  const sendTypingInterval = setInterval(async () => {
    await message.channel.sendTyping();
  }, 5000);

  let conversation = [];

  // Add a system message as the first message
  conversation.push({
    role: "system",
    content: `My name is ${config.Bot_Name}, I am designed to talk to you`,
  });

  // Fetch the last config history limit messages, excluding bots, and add them to the conversation
  const prevMessages = await message.channel.messages.fetch({
    limit: config.HistoryLimit,
  });
  prevMessages.reverse();

  prevMessages.forEach((msg) => {
    if (msg.author.bot) return;
    const username = msg.author.username
      .replace(/\s+/g, "_")
      .replace(/[^\w\s]/gi, "");

    if (msg.author.id === client.user.id) {
      conversation.push({
        role: "assistant",
        name: username,
        content: msg.content,
      });
    } else {
      conversation.push({
        role: "user",
        name: username,
        content: msg.content,
      });
    }
  });

  const response = await openai.chat.completions
    .create({
      model: "gpt-3.5-turbo",
      messages: conversation,
    })
    .catch((error) => {
      console.error("OpenAI error: " + error);
      clearInterval(sendTypingInterval);
      return message.reply(
        "API problem occured, Please try again in a few minutes"
      );
    });

  if (response && response.choices && response.choices[0].message) {
    const responseMessage = response.choices[0].message.content;

    // Split the response into chunks and send them
    const chunkSize = 2000;
    for (let i = 0; i < responseMessage.length; i += chunkSize) {
      const chunk = responseMessage.substring(i, i + chunkSize);
      message.reply(`${chunk}`);
    }
  }

  clearInterval(sendTypingInterval);
}

export default generateMessage;

/**
 * Credits to @UnderCtrl
 * https://www.youtube.com/@UnderCtrl
 * Thanks to UnderCtrl for uploading this logic
 * 
 * Don't touch anything, if you don't understand
 */

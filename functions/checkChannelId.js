import fs from "fs";
import { ChannelType } from "discord.js";
import generateMessage from "./generateMessage.js";

async function checkChannelId(message, client) {
  const path = "database/channelIds.json";
  const UpChannelIds = JSON.parse(fs.readFileSync(path, "utf8"));

  if (UpChannelIds.includes(message.channel.id)) {
    await generateMessage(message, client);
  } else if (message.channel.type === ChannelType.DM) {
    await generateMessage(message, client);
  }
}

export default checkChannelId;

/** 
 * Don't edit anything, This is the chatbot logic
 * Editing anything, without prior knowledge could BREAK things
*/

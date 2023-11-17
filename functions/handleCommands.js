import writeChannelIds from "./writeChannelIds.js";
import removeChannelId from "./removeChannelIds.js";
import client from "../essentials/client.js"

async function handleCommands(interaction) {
  const channelID = interaction.channel.id;
  switch (interaction.commandName) {
    case "setup-chatbot":
      const message = writeChannelIds(channelID, interaction);
      await interaction.reply({ content: message, ephemeral: true });
      break;
    case "takedown-chatbot":
      const message2 = removeChannelId(channelID, interaction);
      await interaction.reply({ content: message2, ephemeral: true });
      break;
    case "ping":
      await interaction.reply({
        content: `**Ping:** \`${client.ws.ping}\`, *Pong*`,
        ephemeral: true,
      });
      break;
  }
}

export default handleCommands;

/**
 * If you want to add more commands, visit ../commands.js.
 * Follow the mini guide, provided there to add more commands
 */

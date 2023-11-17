import fs from "fs";
import "colors";

function removeChannelId(channelId, interaction) {
  const reason1 = "This channel has not been added as an chatbot channel";
  const failedMessage = `Failed to remove ${interaction.channel}!, `;
  const successMessage = `Removed ${interaction.channel} as a chatbot channel!`;
  const jsonFilePath = "database/channelIds.json";
  let ChannelIds = [];

  try {
    const data = fs.readFileSync(jsonFilePath, "utf8");
    ChannelIds = JSON.parse(data);

    const index = ChannelIds.indexOf(channelId);
    if (index !== -1) {
      ChannelIds.splice(index, 1);
      fs.writeFileSync(jsonFilePath, JSON.stringify(ChannelIds, null, 2));
      console.log(
        `Channel ID ${channelId}`.blue,
        `has been removed from ${jsonFilePath}`.green
      );

      return successMessage;
    } else {
      return failedMessage + reason1;
    }
  } catch (err) {
    console.error("Error removing channel ID:", err);
    return failedMessage + err;
  }
}

export default removeChannelId;

/**
 * Logic used to remove channelIds from the json database
 * Don't edit this as this is hard and properly coded and is not supposed to be edited
 * ONLY EDIT IF YOU WHAT YOU ARE DOING
 */

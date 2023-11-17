import "colors";
import fs from "fs";
function writeChannelIds(channelIds, interaction) {
  const reason1 = "This channel already exists";
  const failedMessage = `Oops!, Failed to add ${interaction.channel} to the database!, `;
  const successMessage = `Successfully added ${interaction.channel} as a chatbot channel!`;
  const jsonFilePath = "database/channelIds.json";
  let ChannelIds = [];

  try {
    const UpChannelIds = JSON.parse(fs.readFileSync(jsonFilePath, "utf8"));
    const data = fs.readFileSync(jsonFilePath, "utf8");
    if (UpChannelIds.includes(channelIds)) return failedMessage + reason1;
    ChannelIds = JSON.parse(data);
  } catch (err) {
    console.error("Error reading JSON file:", err);
  }

  ChannelIds.push(channelIds);

  try {
    fs.writeFileSync(jsonFilePath, JSON.stringify(ChannelIds, null, 2));
    console.log(
      `Channel ID ${channelIds}`.blue,
      `has been added to ${jsonFilePath}`.green
    );
  } catch (err) {
    console.error(`Failed to write ${channelIds} to ${jsonFilePath}`.red, err);
  }
  return successMessage;
}

export default writeChannelIds;

/**
 * Logic used to add channelIds from the json database
 * Don't edit this as this is hard and properly coded and is not supposed to be edited
 * ONLY EDIT IF YOU WHAT YOU ARE DOING
 */

//Made by techpowerb, Credits are required
import registerCommand from "./functions/registerCommands.js";
import handleCommands from "./functions/handleCommands.js";
import checkChannelId from "./functions/checkChannelId.js";
import client from "./essentials/client.js";
import dotenv from "dotenv";
import "colors";
dotenv.config();

await registerCommand(client);

//Handling commands
client.on("interactionCreate", async (interaction) => {
  await handleCommands(interaction);
});

//Chatbot
client.on("messageCreate", async (message) => {
  await checkChannelId(message, client);
});

//Logging into a client
await client.login(process.env.token);

/**
 * Bot Creation Steps:
 * 1. Go to the Discord Developer Portal - https://discord.com/developers/applications
 * 2. Click "New Application".
 * 3. Give your application a name.
 * 4. Go to the "Bot" section in the sidebar.
 * 5. Click "Add Bot" and confirm when prompted.
 * 6. Copy the bot token. Keep this token secure.
 * 7. The "Client ID" in the "General Information" section is your bot's unique ID.
 * 
 * Generating an Invite Link:
 * 1. In the Developer Portal, go to the "OAuth2" section.
 * 2. Under "Scopes", select "bot".
 * 3. Under "Bot Permissions", select necessary permissions.
 * 4. Copy the generated URL and paste it into your browser to invite the bot to a server.
 */

/**
 * DONT'S
 * Don't edit any function in the folder if you are not told to edit
 * Don't delete database folder or the json file inside it
 * Don't delete essential folder or any files inside it
 */

/**
 * NOTE: ADD YOUR OPENAI API KEY IN ./functions/generateMessage.js, AT LINE 5
 * Simple chatbot system made by techpowerb
 * You can explore around and take a look how this works
 * If you want to use another database system or just wana make it single guild you can get the chatbot logic at ./functions/generateMessage.js
 * 
 * Credits to techpowerb (For coding the base) and @UnderCtrl (For the chatbot logic)
 * UnderCtrl YT Channel - https://www.youtube.com/@UnderCtrl
 */

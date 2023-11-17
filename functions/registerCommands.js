import { REST, Routes } from "discord.js";
import commands from "../commands.js";

async function registerCommand(client) {
  const rest = new REST({ version: "10" }).setToken(process.env.token);

  try {
    console.log("Started refreshing application (/) commands.".blue);

    await rest.put(Routes.applicationCommands(process.env.botId), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.".green);
  } catch (error) {
    console.error(error);
  }

  client.on("ready", async (client) => {
    console.clear();
    console.log("[DISCORD]".green, `${client.user.tag} is online`.blue);
  });
}
export default registerCommand;

/**
 * Don't change anything here
 * This is not supposed to be changed
 * If you want to add more console.logs, add a new line after line 21 and edit there
 */

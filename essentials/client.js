import DiscordPartials from "./Partials.js";
import DiscordIntents from "./GatewayIntentBits.js";
import { Client } from "discord.js";

//Creating a client
const client = new Client({
  intents: DiscordIntents,
  partials: DiscordPartials,
});

export default client;

/**
 * If you just want to use the chatbot, then don't touch anything
 */

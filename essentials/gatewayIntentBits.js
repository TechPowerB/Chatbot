import { GatewayIntentBits } from "discord.js";

const {
  Guilds,
  GuildMessages,
  GuildMessageTyping,
  MessageContent,
  DirectMessageReactions,
  DirectMessages,
  DirectMessageTyping,
} = GatewayIntentBits;

const DiscordIntents = [
  Guilds,
  GuildMessages,
  GuildMessageTyping,
  MessageContent,
  DirectMessageReactions,
  DirectMessages,
  DirectMessageTyping,
];

export default DiscordIntents;

/**
 * Add intents here, if you wana use this bot base for something more
 * Else if you are just using this for normal chatting no need to edit something
 */

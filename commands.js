//Add commands here :)
const commands = [
  {
    name: "setup-chatbot",
    description: "Setup chatbot system for a channel",
  },
  {
    name: "takedown-chatbot",
    description: "Takedown/Remove chatbot system from a channel",
  },
  {
    name: "ping",
    description: "Check your ping!",
  },
];

export default commands;

/**
 * How to add more command?
 * Answer:
 * Its simple to add commands
 * Edit the array above and add a new object to it, and add two properties name and description.
 * For example:
 * {
 * name: "example",
 * description: "This is an example command"
 * },
 * 
 * After doing this, you can visit ./functions/handleCommands.js and add the command logic there
 * Congratulations!, you just added a command
 */

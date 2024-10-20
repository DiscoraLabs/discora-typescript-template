/** @format */
import { Events } from "discord.js";
import { createEvent } from "discora";

export default createEvent({
  name: Events.ClientReady,
  once: true,
  handler: async (_, client) => {
    console.log(`${client.user.username} is online and ready!`);
  },
});

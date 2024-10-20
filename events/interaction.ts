/** @format */

import { Events } from "discord.js";
import { createEvent } from "discora";

export default createEvent({
  name: Events.InteractionCreate,

  async handler(client, interaction) {
    await client.handleCommand(interaction);
  },
});

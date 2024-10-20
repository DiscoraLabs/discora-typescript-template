/** @format */
import { SlashCommandBuilder } from "discord.js";

import {
  createSlashCommand,
  HandleButtonClickFunction,
} from "discora";

export default createSlashCommand({
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Ping pong command"),

  execute: async (interaction) => {
    await interaction.reply({ content: "pong!" });
  },

});

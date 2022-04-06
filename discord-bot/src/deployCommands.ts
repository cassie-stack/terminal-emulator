import "dotenv/config";
import { SlashCommandBuilder } from "@discordjs/builders";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import Config from "./Common/Config";

const config = new Config();

const commands = [
    new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Pings the bot"),
    new SlashCommandBuilder()
        .setName("cum")
        .setDescription("Command Sophie to have an orgasm"),
].map(i => i.toJSON());

const rest = new REST({version: "9"}).setToken(config.botToken);

(async () => {
    await rest.put(
        Routes.applicationGuildCommands(
            config.clientId,
            config.guildId
        ),
        {body: commands}
    );

    console.log("Successfully deployed commands!");
})();

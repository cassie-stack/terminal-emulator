import { Client, Intents, Interaction, CacheType } from "discord.js";
import Bot from "./Bot";
import log from "./Common/Logging";
import Config from "./Common/Config";
import { CommandKind } from "./Common/Enums";
import RequestCommand from "./Models/RequestCommand";
import RequestBase from "./Models/RequestBase";
import ResponseBase from "./Models/ResponseBase";
import ResponseText from "./Models/ResponseText";

export default class BotDiscord extends Bot {
    public constructor(private readonly config: Config) {
        super();
    }

    public async run(): Promise<void> {
        const client = new Client({
            intents: [Intents.FLAGS.GUILDS]
        });
    
        client.once("ready", () => {
            log.info("Ready!");
        });
    
        client.on("interactionCreate", async interaction => {
            try {
                const request = BotDiscord.getRequestFromInteraction(interaction);
                const response = this.handle(request);
                BotDiscord.enactResponseOnInteraction(response, interaction);
            } catch (e) {
                log.error(e);
                BotDiscord.enactResponseOnInteraction(new ResponseText("Error!"), interaction);
            }
        });
    
        await client.login(this.config.botToken);
    }

    private static getRequestFromInteraction(interaction: Interaction<CacheType>): RequestBase {
        if (interaction.isCommand()) {
            if (Object.values(CommandKind).map(i => i as string).includes(interaction.commandName)) {
                return new RequestCommand(interaction.commandName as CommandKind);
            } else {
                throw new Error(`command ${JSON.stringify(interaction.commandName)} not in CommandKind enum`);
            }
        } else {
            throw new Error("non-command interactions not yet supported");
        }
    }

    private static async enactResponseOnInteraction(response: ResponseBase, interaction: Interaction<CacheType>): Promise<void> {
        if (response instanceof ResponseText) {
            if (!interaction.isCommand()) {
                throw new Error("cannot .reply(...) to non-command interaction");
            }
            
            await interaction.reply(response.text);
        } else {
            throw new Error("response type not yet supported");
        }
    }
}

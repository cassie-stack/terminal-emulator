export default class Config {
    public readonly botToken: string;
    public readonly guildId: string;
    public readonly clientId: string;

    public constructor() {
        this.botToken = process.env.BOT_TOKEN as string;
        this.guildId = process.env.GUILD_ID as string;
        this.clientId = process.env.CLIENT_ID as string;
    }
}

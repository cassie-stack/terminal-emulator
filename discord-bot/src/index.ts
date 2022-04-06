import "dotenv/config";
import BotDiscord from "./BotDiscord";
import Config from "./Common/Config";

const config = new Config();

const bot = new BotDiscord(config);

(async () => {
    await bot.run();
})();

import bunyan from "bunyan";

const log = bunyan.createLogger({
    name: "terminal-emulator",
    streams: [{
        type: "rotating-file",
        level: "info",
        path: "terminal-emulator.log",
        period: "1d",
        count: 30,
    }],
});

export function logCommand(message: string): void {
    log.info({isCommand: true}, `${message}`);
}

export default log;

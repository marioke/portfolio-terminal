import { Terminal } from "../Terminal.js";
import { Command } from "../Command.js";

export class RebootCommand implements Command {
    name = "reboot";
    aliases = ["reset", "restart", "refresh", "reload", "r"];

    async execute() {
        await Terminal.writeln("Neustart...", "color2");
        setTimeout(() => {
            document.location.reload();
        }, 1000);
    }
}

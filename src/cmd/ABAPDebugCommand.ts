import { Terminal } from "../Terminal.js";
import { Command } from "../Command.js";

export class ABAPDebugCommand implements Command {
    name = "/h";

    async execute() {
        await Terminal.writeln("ABAP Debug Modus aktiviert", "color2");
    }
}

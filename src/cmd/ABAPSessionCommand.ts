import { Terminal } from "../Terminal.js";
import { Command } from "../Command.js";

export class ABAPSessionCommand implements Command {
    name = "/o";

    async execute() {
        await Terminal.writeln("Neues Fenster wird geöffnet", "color2");
        Terminal.newTab(document.location.href);
    }
}

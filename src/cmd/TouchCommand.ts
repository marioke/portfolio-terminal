import { Terminal } from "../Terminal.js";
import { Command } from "../Command.js";

export class TouchCommand implements Command {
    name = "touch";

    async execute() {
        await Terminal.writeln("Finger weg! 😡🤬", "color2");
    }
}

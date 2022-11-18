import { Terminal } from "../Terminal.js";
import { Command } from "../Command.js";

export class NiceCommand implements Command {
    name = "nice";
    aliases = ["lol", "wtf"];

    async execute() {
        await Terminal.writeln("N(🍦)!", "color2");
    }
}

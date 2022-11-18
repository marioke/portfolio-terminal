import { Terminal } from "../Terminal.js";
import { Command } from "../Command.js";

export class HelloCommand implements Command {
    name = "hello";
    aliases = ["hi", "hey", "hallo", "guten", "moin", "hello"];

    async execute() {
        await Terminal.writeln("Hi! 👋🏻 ", "color2");
    }
}

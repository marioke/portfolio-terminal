import { Terminal } from "../Terminal.js";
import { Command } from "../Command.js";

export class SudoCommand implements Command {
    name = "sudo";
    aliases = ["su", "root", "admin", "administrator", "sudoer"];

    async execute() {
        await Terminal.writeln(
            "Moment mal, du bist ja garnicht admin...",
            "color2",
            80
        );
        setTimeout(() => {
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        }, 1000);
    }
}

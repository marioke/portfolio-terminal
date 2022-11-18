import { Terminal } from "../Terminal.js";
import { Command } from "../Command.js";

export class WhegCommand implements Command {
    name = "wheg";
    aliases = ["woran-hat-es-gelegen", "woran-hat-es-gelejen"];

    async execute() {
        await Terminal.writelns(
            [
                "<br>",
                `<b>Woron hat es gelegen?</b>`,
                "<br>",
                `=> Hier findest du die Antwort: <a href="https://www.youtube.com/watch?v=2paOYObEhoA&ab_channel=LukasGro%C3%9Fkreutz" target="_blank">youtube</a>`,
                "<br>",
            ],
            "color2 margin"
        );
    }
}

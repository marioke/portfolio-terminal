import { Terminal } from "../Terminal.js";
import { Command } from "../Command.js";

export class KeinBockCommand implements Command {
    name = "kein-bock";
    aliases = ["keinbock", "bocklos", "direkt-kein-bock", "ke-bock"];

    async execute() {
        await Terminal.writeln("Ich auch nicht... 🤯", "color2");
        setTimeout(() => {
            window.open(
                "https://www.youtube.com/watch?v=LMBTAdAuM8w&ab_channel=Stonedeafproduction"
            );
        }, 1000);
    }
}

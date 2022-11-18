import { Terminal } from "../Terminal.js";
import { Command } from "../Command.js";

export class CatCommand implements Command {
    name = "cat";
    aliases = ["nyan", "nyancat", "nyan-cat", "catnyan"];

    async execute() {
        (<HTMLElement>document.getElementById("cat")).style.display = "block";
        document.addEventListener("keypress", (e) => {
            if (e.key == "q") {
                (<HTMLElement>document.getElementById("cat")).style.display =
                    "none";
                e.preventDefault();
                Terminal.focus();
            }
        });
    }
}

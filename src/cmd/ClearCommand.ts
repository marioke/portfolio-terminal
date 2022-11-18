import { Terminal } from "../Terminal.js";
import { Command } from "../Command.js";

export class ClearCommand implements Command {
    name = "clear";
    description = "Terminal aufräumen";
    aliases = ["aufräumen", "clearscreen", "clear-screen"];

    async execute() {
        await Terminal.clear();
    }
}

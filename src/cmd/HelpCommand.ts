import { Terminal } from "../Terminal.js";
import { Command } from "../Command.js";

export class HelpCommand implements Command {
  name = "help";
  description = "Das weißt du doch schon.";
  aliases = ["h", "?", "--help", "hilfe", "-h"];

  async execute() {
    await Terminal.help();
  }
}

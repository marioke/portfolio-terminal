import { Terminal } from "../Terminal.js";
import { Command } from "../Command.js";

export class UpdateCommand implements Command {
  name = "pause";
  aliases = ["update", "upgrade", "up", "break"];

  async execute() {
    Terminal.writeln("Update wird ausgeführt...", "color2");
    setTimeout(() => {
      window.location.href = "update.html";
    }, 1000);
  }
}

import { Terminal } from "../Terminal.js";
import { Command } from "../Command.js";

export class PwdCommand implements Command {
  name = "pwd";

  async execute() {
    await Terminal.writeln(document.location.href, "color2");
  }
}

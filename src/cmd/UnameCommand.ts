import { Terminal } from "../Terminal.js";
import { Command } from "../Command.js";

export class UnameCommand implements Command {
  name = "uname";

  async execute() {
    await Terminal.writeln(navigator.platform, "color2");
  }
}

import { Terminal } from "../Terminal.js";
import { Command } from "../Command.js";

export class PingCommand implements Command {
  name = "ping";

  async execute() {
    await Terminal.writeln("PONG! 🏓", "color2");
  }
}

import { Terminal } from "../Terminal.js";
import { Command } from "../Command.js";

export class LsCommand implements Command {
  name = "ls";
  description = "Listet alle Programme auf";
  aliases = ["dir", "list"];

  async execute() {
    const commands = Terminal.getCommands();

    const list = commands.map(
      (command) => `<span class=\"command\">${command.name}</span>`
    );

    const longest = list.reduce((a, b) => (a.length > b.length ? a : b));

    const lines = [];

    for (let i = 0; i < list.length; i += 4) {
      const line = list.slice(i, i + 4);

      for (let j = 0; j < line.length; j++) {
        line[j] += " ".repeat(longest.length - line[j].length + 2);
      }

      lines.push(line.join(""));
    }

    await Terminal.writeln(lines.join("<br>"));
  }
}

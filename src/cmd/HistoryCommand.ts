import { Terminal } from "../Terminal.js";
import { Command } from "../Command.js";

export class HistoryCommand implements Command {
  name = "history";
  description = "Befehlsverlauf ausgeben";

  async execute() {
    await Terminal.writelns(
      ["<br>", ...Terminal.getHistory(), "<br>"],
      "color2"
    );
  }
}

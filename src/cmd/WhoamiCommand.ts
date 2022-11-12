import { Terminal } from "../Terminal.js";
import { Command } from "../Command.js";

export class WhoamiCommand implements Command {
  name = "whoami";
  description = "Wer bist du?";
  aliases = ["me", "myself", "i", "ich", "wer-bin-ich"];

  async execute() {
    await Terminal.writelns(
      [
        "<br>",
        "<b>Das Paradox der Frage “Wer bin ich?” lautet:</b>",
        "<br>",
        "Wir wissen es nicht, aber wir finden es ständig heraus.",
        "<br>",
        "¯\\_(ツ)_/¯",
        "<br>",
      ],
      "color2 margin"
    );
  }
}

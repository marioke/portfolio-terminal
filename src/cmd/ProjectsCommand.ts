import { Terminal } from "../Terminal.js";
import { Command } from "../Command.js";
import { Globals } from "../Globals.js";

export class ProjectsCommand implements Command {
  name = "projects";
  description = "Projekte / Referenzen";
  aliases = ["projekte", "referenzen"];

  async execute() {
    await Terminal.writelns(
      [
        "<br>",
        "Ich kuratiere noch... die meisten Projekte sind offline,",
        `liegen auf <a href="${Globals.github.url}" target="_blanK">GitHub</a> oder sind vertraulich.`,
        "<br>",
      ],
      "color2 margin"
    );
  }
}

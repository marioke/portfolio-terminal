import { Terminal } from "../Terminal.js";
import { Command } from "../Command.js";
import { Globals } from "../Globals.js";

export class GitHubCommand implements Command {
  name = "github";
  aliases = ["git", "gh"];

  async execute() {
    await Terminal.writeln("Github wird geöffnet...", "color2", 80);
    setTimeout(() => {
      window.open(Globals.github.url);
    }, 1000);
  }
}

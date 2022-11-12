import { Terminal } from "../Terminal.js";
import { Command } from "../Command.js";

export class BADIHitsCommand implements Command {
  name = "badi-hits";

  async execute() {
    await Terminal.writelns(
      [
        "<br>",
        "<b>Die Aktuellen TOP SAP BAdI Hits</b>",
        "<br>",
        "- Ain't no BAdI",
        "- My BAdI is over the ocean",
        "- No BAdI - no cry",
        "<br>"
      ],
      "color2 margin"
    );
  }
}

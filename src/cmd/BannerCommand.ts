import { Terminal } from "../Terminal.js";
import { Command } from "../Command.js";

export class BannerCommand implements Command {
  name = "banner";

  async execute() {
    await Terminal.printBanner();
  }
}

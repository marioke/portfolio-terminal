import { Terminal } from "../Terminal.js";
import { Command } from "../Command.js";
import { Globals } from "../Globals.js";

export class WhatsAppCommand implements Command {
  name = "whatsapp";
  aliases = ["wa"];

  async execute() {
    await Terminal.writeln("WhatsApp wird geöffnet...", "color2");
    setTimeout(() => {
      window.open(Globals.whatsapp);
    }, 1000);
  }
}

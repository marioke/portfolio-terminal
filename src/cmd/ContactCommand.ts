import { Terminal } from "../Terminal.js";
import { Command } from "../Command.js";
import { Util } from "../Util.js";
import { Globals } from "../Globals.js";

export class ContactCommand implements Command {
  name = "contact";
  description = "Kontakiere mich";
  aliases = ["kontakt"];

  async execute() {
    await Terminal.writelns(
      [
        "<br>",
        `${Util.shiftString("email", 12)}<a href="mailto:${
          Globals.mail
        }"><i class="demo-icon icon-mail-squared"></i>${Globals.mail}</a>`,
        `${Util.shiftString("whatsapp", 12)}<a href="${
          Globals.whatsapp
        }" target="_blank"><i class="demo-icon icon-whatsapp"></i>whatsapp</a>`,
        "<br>",
      ],
      "color2 margin"
    );
  }
}

import { Terminal } from "../Terminal.js";
import { Command } from "../Command.js";
import { Globals } from "../Globals.js";

export class MailCommand implements Command {
    name = "mail";
    aliases = ["email", "mail", "e-mail", "mailto", "mail-to"];

    async execute() {
        await Terminal.writeln(
            `mailto:<a href="mailto:${Globals.mail}">${Globals.mail}</a> wird geöffnet...`,
            "color2",
            80
        );
        setTimeout(() => {
            window.open(`mailto:${Globals.mail}`);
        }, 1000);
    }
}

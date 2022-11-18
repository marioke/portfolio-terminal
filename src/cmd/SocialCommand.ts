import { Terminal } from "../Terminal.js";
import { Command } from "../Command.js";
import { Globals } from "../Globals.js";
import { Util } from "../Util.js";

export class SocialCommand implements Command {
    name = "social";
    description = "Soziale Netzwerke";
    aliases = ["socials", "netzwerke", "netzwerk"];

    async execute() {
        await Terminal.writelns(
            [
                "<br>",
                `${Util.shiftString("linkedin", 12)}<a href="${
                    Globals.linkedin.url
                }" target="_blank"><i class="icon-linkedin-squared"></i>${
                    Globals.linkedin.slug
                }</a>`,
                `${Util.shiftString("github", 12)}<a href="${
                    Globals.github.url
                }" target="_blank"><i class="icon-github-circled"></i>${
                    Globals.github.slug
                }</a>`,
                "<br>",
            ],
            "color2 margin"
        );
    }
}

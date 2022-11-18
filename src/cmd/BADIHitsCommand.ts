import { Terminal } from "../Terminal.js";
import { Command } from "../Command.js";

export class BADIHitsCommand implements Command {
    name = "badi-hits";
    aliases = ["badihits", "badi", "badis", "badies", "body"];

    async execute() {
        await Terminal.writelns(
            [
                "<br>",
                "<b>Die Aktuellen TOP SAP BAdI Hits</b>",
                "<br>",
                "💿 Ain't no BAdI",
                "💿 My BAdI is over the ocean",
                "💿 No BAdI - no cry",
                "💿 Rock your BAdI",
                "💿 Some BAdI I used to know",
                "💿 Don't stop the BAdI",
                "💿 Everybadi (Backstreet's back)",
                "<br>",
            ],
            "color2 margin"
        );
    }
}

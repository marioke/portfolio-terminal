import { Terminal } from "../Terminal.js";
import { Command } from "../Command.js";
import { TableBuilder } from "../TableBuilder.js";

export class TechStackCommand implements Command {
    name = "techstack";
    description = "Meine Werkzeuge";
    aliases = ["tech", "stack", "tech-stack", "techs", "tools"];

    async execute() {
        const table = new TableBuilder()
            .withTitle("Übersicht von meinem Tech-Stack")
            .addColumn("Browser", "Google Chrome")
            .addColumn("IDE", "vscode, PhpStorm, WebStorm, Rider, DataGrip")
            .addColumn("Projekte", "Jira, Trello")
            .addColumn(
                "Kommunikation",
                "Microsoft Teams (bevorzugt), Zoom, Google Meet"
            )
            .addColumn("Grafiken", "Canva, Font Awesome")
            .addColumn("System", "MacOS")
            .addColumn(
                "Tools",
                "SIP, Postman, Oh My Zsh, iTerm2, Docker, Joplin, Git, Bitwarden, [...]"
            )
            .addColumn("Hosting", "Hetzner, PhpFriends, Raidboxes");

        await Terminal.writelns(table.toArray(), "color2 margin");
    }
}

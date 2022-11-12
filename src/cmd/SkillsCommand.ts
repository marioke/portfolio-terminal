import { Terminal } from "../Terminal.js";
import { Command } from "../Command.js";
import { TableBuilder } from "../TableBuilder.js";

export class SkillsCommand implements Command {
  name = "skills";
  description = "Fähigkeiten";
  aliases = ["fähigkeiten"];

  async execute() {
    const table = new TableBuilder()
      .withTitle("Übersicht aller Fähigkeiten")
      .addColumn(
        "wp/php",
        "Plugins, (Child) Themes, WooCommerce (WC), WooCommerce Subscriptions (WCS), " +
          "REST-API Endpunkte, Admin Oberflächen, Shortcodes, Elementor Widgets, " +
          "ACF, WP Astra, Taxanomien, Custom Post Types, Hooks, Filter, " +
          "Internationalization, PHP 8 (OO), SQL, Prepared Statements [...]"
      )
      .addColumn(
        "js/ts",
        "ES6, Types, Server, NodeJS, Vue, NPM Pakete, vscode Erweiterungen"
      )
      .addColumn(
        "sap/ui5",
        "SAP Fiori, SAPUI5 (TypeScript basiert), OData (V2), SAP Cloud Platform, ABAP"
      )
      .addColumn("c#", "ASP.NET Core, .NET Core, Entity Framework")
      .addColumn(
        "git(hub)",
        "Geschützte Branches, Private Registry (Docker, NPM, Nuget), Markdown, Actions (automatisierte Tests, Builds, Releases, [...]"
      )
      .addColumn(
        "docker",
        "Container, Images, Staging, Deployment, Docker Compose"
      )
      .addColumn(
        "linux/bash",
        "Allgemeine Administration, SSH, Systemd, MariaDB, MySQL, Nginx, Apache2"
      )
      .addColumn("Hosting", "Hetzner, PhpFriends, Raidboxes");

    await Terminal.writelns(table.toArray(), "color2 margin");
  }
}

import { Terminal } from "../Terminal.js";
import { Command } from "../Command.js";
import { TextBuilder } from "../TextBuilder.js";

export class WhoisCommand implements Command {
  name = "whois";
  description = "Wer ist Mario?";
  aliases = ["weristmario", "mario", "super-mario"];

  async execute() {
    const builder = new TextBuilder()
      .addNewLine()
      .addImage("./assets/img/giphy.gif")
      .addNewLine()
      .addLine("Hallo, ich bin Mario! 👋")
      .addLine(
        "Ich bin leidenschaftlicher Software Engineer und Webentwickler mit über zehn Jahren Erfahrung."
      )
      .addNewLine()
      .addLine(
        "Bereits in meiner Kindheit habe ich mich für die Welt der Computer begeistert. Angefangen hatte " +
          "alles mit einem CD-ROM Autostart Programm, dass mich faszinierte. Das wollte ich unbedingt auch " +
          "können. So begann ich mit der Programmierung und lernte die Grundlagen der ersten Programmiersprache. "
      )
      .addNewLine()
      .addLine(
        "Von da an habe ich immer mehr Spaß daran gefunden, alles umzusetzen was mir in den Sinn kam, oder von dem " +
          "ich dachte, das könnte man besser machen. Nach einigen privaten Projekten habe ich eine " +
          "selbstständige Nebentätigkeit als Webentwickler begonnen. Seitdem habe ich mich stetig weiterentwickelt " +
          "und eine Ausbildung zum Fachinformatiker für Anwendungsentwicklung absolviert."
      )
      .addNewLine()
      .addLine(
        "Hauptberuflich arbeite ich bereits seit einigen Jahren als SAP/UI5 Entwickler bei der 🦢 SWAN GmbH in Giebelstadt. " +
          "Hier entwickle ich Hauptächlich SAPUI5 Anwendungen und gelegentlich auch das Backend auf ABAP Basis. " +
          "Zusätzlich bin ich auch noch als Ansprechpartner für neue Kollegen, Studenten und Azubis zuständig. " +
          "Auch treibe ich mehrere interne Projekte vorran, die die Firma weiterbringt und Kosten einspart."
      )
      .addNewLine()
      .addLine(
        "In meiner Freizeit beschäftige ich mich mit Musik/DJ (🎛️), Reisen (🌍) und natürlich Programmieren (👨‍💻)."
      )
      .addNewLine()
      .addLine("<b>Was treibt mich an?</b>")
      .addLine(
        "Steve Jobs sagte einmal: The only way to do great work is to love what you do."
      )
      .addLine(
        "Ich liebe es einfach, komplexe Probleme zu lösen und dabei neue Technologien zu entdecken."
      )
      .addNewLine();

    await Terminal.writelns(builder.toArray(), "color2 margin");
  }
}

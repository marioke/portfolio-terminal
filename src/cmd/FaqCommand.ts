import { Terminal } from "../Terminal.js";
import { Command } from "../Command.js";

export class FaqCommand implements Command {
    name = "faq";
    description = "Meist gestellte Fragen";

    async execute() {
        await Terminal.writelns(
            [
                "<br>",
                "<b>Meist gestellte Fragen</b>",
                "<br>",
                "F: Bist du für weitere Projekte offen?",
                "A: Je nach Auslastung und Zeit bin ich offen für weitere Projekte.",
                "   Schreib mir einfach eine Nachricht.",
                "<br>",
                "F: Wie funktioniert der Ablauf?",
                "A: Ich berate dich kostenlos und unverbindlich. Wenn du mit dem Ergebnis zufrieden",
                "   bist, kannst du mich beauftragen.",
                "<br>",
                "F: Was macht dich besonders?",
                "A: Themenübergreifendes Wissen, hohes Qualitätsbewusstsein, Verwendung modernster",
                "   Technologien, schnelle Umsetzung, gutes Preis-Leistungsverhältnis.",
                "   <b>Und nicht zu vergessen:</b> Ich liebe das was ich tue.",
                "<br>",
            ],
            "color2 margin"
        );
    }
}

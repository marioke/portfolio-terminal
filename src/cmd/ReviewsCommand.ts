import { Terminal } from "../Terminal.js";
import { Command } from "../Command.js";
import { TextBuilder } from "../TextBuilder.js";

export class ReviewsCommand implements Command {
  name = "reviews";
  description = "Kunden Bewertungen";

  async execute() {
    const builder = new TextBuilder();
    builder.addNewLine();
    builder.addLine("<b>Erkan C.</b>");
    builder.addLine(
      "Ich suchte nach einer Firma, welches für mein Projekt eine entsprechende Website erstellen kann. [...] Die Website wurde Termingerecht und vorallem hochprofessionell nach meinen Vorstellungen erstellt. Auch komplexere Themen im Bereich Programmierung wurden exzellent umgesetzt."
    );
    builder.addNewLine();
    builder.addLine("<b>Maximilian B.</b>");
    builder.addLine(
      "[...] Die Zusammenarbeit lief sehr gut! Mario war sehr einfach erreichbar und immer klar und eindeutig in der Kommunikation. Darüberhinaus war Mario mit der Aufwandseinschätzung sehr transparent."
    );
    builder.addNewLine();
    builder.addLine("<b>Christian S.</b>");
    builder.addLine(
      "[...] Sein Hintergrundwissen, das Detail in dem er plant, denkt und Projekte umsetzt befindet sich weit über dem was ich sonst aus der Branche kenne. Bei Fragen hat er für seine Kunden ein offenes Ohr, bei Problemen attraktive Lösungsvorschläge. Er ist hochkompetent, angagiert und brennt für das was er tut. Aus meiner Sicht sind das Eigenschaften mit denen man vorankommt. Von mir gibt es, nicht zuletzt durch viele sympatische und fundierte Kontakte 5 Sterne und die klare Empfehlung."
    );
    builder.addNewLine();
    builder.addLine("<b>Claudia L.</b>");
    builder.addLine(
      "Ein super schneller und professioneller Service, sehr zu empfehlen. Auch wichtig zu erwähnen ist die freundliche und zugewandte Kommunikation. Wir werden langfristig mit allen Projekten zusammenarbeiten. Vielen Dank, [...]"
    );
    builder.addNewLine();
    builder.addLine("[...]");
    builder.addNewLine();
    await Terminal.writelns(builder.toArray(), "color2 margin");
  }
}

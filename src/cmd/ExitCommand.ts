import { Terminal } from "../Terminal.js";
import { Command } from "../Command.js";

export class ExitCommand implements Command {
  name = "exit";
  aliases = ["quit", "close", "end", "leave", "bye", "shutdown", "poweroff"];

  async execute() {
    await Terminal.writeln("Bye bye!", "color2");
    setTimeout(() => {
      window.close();
      setTimeout(() => {
        Terminal.writeln(
          "Du bist ja immer noch hier, vermutlich erlaubt dein Browser das automatische schließen nicht."
        );
      }, 500);
    }, 1000);
  }
}

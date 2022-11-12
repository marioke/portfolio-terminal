import { Terminal } from "../Terminal.js";
import { Command } from "../Command.js";

export class MatrixCommand implements Command {
  name = "matrix";
  aliases = ["rain", "hack", "hacker", "hacking", "hackerman", "mx"];

  async execute() {
    const div = document.createElement("div") as HTMLElement;
    div.id = "matrix";
    document.body.appendChild(div);

    div.style.position = "fixed";
    div.style.top = "0";
    div.style.left = "0";
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.zIndex = "999999";
    div.style.backgroundColor = "black";
    div.style.color = "green";
    div.style.wordBreak = "break-all";
    div.style.overflowY = "scroll";
    div.style.overflowX = "hidden";

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]} ";

    const randomString = () => {
      let result = "";
      for (let i = 0; i < 128; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
      }
      return result;
    };

    let running = true;

    document.addEventListener("keypress", (e) => {
      if (e.key == "q") {
        e.preventDefault();
        running = false;
      }
    });

    div.requestFullscreen();

    while (running) {
      await new Promise((resolve) => setTimeout(resolve, 10));
      if (div.innerHTML.length > 50000) {
        div.innerHTML = div.innerHTML.substring(1000);
      }
      div.innerHTML += randomString();
      div.scrollTop = div.scrollHeight;
    }

    div.remove();
    Terminal.focus();
  }
}

import { links } from "./const/Links.js";
import { banner } from "./const/Banner.js";
import { Command } from "./Command.js";
import { Util } from "./Util.js";

export class Terminal {
  private static history: Array<string> = [];
  private static git: number = 0;
  private static commands: Command[] = [];

  private static prefix = "besucher@marioke.dev:~$";

  public static async init() {
    const textarea = document.getElementById("texter") as HTMLTextAreaElement;
    const command = document.getElementById("typer") as HTMLElement;

    setTimeout(async () => {
      await Terminal.printBanner();

      if (document.location.hash) {
        const hash = document.location.hash;
        const cmd = hash.replace("#", "");
        command.innerHTML = cmd;
        await Terminal.submit();
        history.pushState("", document.title, window.location.pathname);
      }

      Terminal.focus();
    }, 100);

    document.onclick = () => {
      Terminal.focus();
    };

    window.addEventListener("keyup", Terminal.enterKey);

    textarea.value = "";
    command.innerHTML = textarea.value;

    window.onload = () => {
      document.getElementById("cursor")!.style.left = "0px";
    };

    Util.track("init");

    // event when pressing ctrl + c
    document.addEventListener("keydown", (event) => {
      if (event.ctrlKey && event.key === "c") {
        const command = document.getElementById("typer") as HTMLElement;
        const textarea = document.getElementById(
          "texter"
        ) as HTMLTextAreaElement;
        var cmd = command.innerHTML;
        command.innerHTML = "";
        textarea.value = "";
        Terminal.print(cmd);
      }
    });
  }

  public static focus() {
    if (Util.isMobile()) {
      return;
    }
    (<HTMLInputElement>document.getElementById("texter")).focus();
  }

  public static blur() {
    (<HTMLInputElement>document.getElementById("texter")).blur();
  }

  public static async printBanner(): Promise<void> {
    await Terminal.writelns(banner);
  }

  public static getHistory(): Array<string> {
    return Terminal.history;
  }

  public static getCommands(): Command[] {
    return Terminal.commands;
  }

  public static registerCommand(command: Command) {
    if (
      this.commands.find(
        (x) =>
          x.name === command.name ||
          (x.aliases && x.aliases.includes(command.name))
      )
    ) {
      throw new Error(`Command ${command.name} already registered!`);
    }
    Terminal.commands.push(command);
  }

  public static registerCommands(commands: Command[]) {
    commands.forEach((cmd) => Terminal.registerCommand(cmd));
  }

  public static enterKey(e: KeyboardEvent) {
    const command = document.getElementById("typer") as HTMLElement;
    const textarea = document.getElementById("texter") as HTMLTextAreaElement;
    if (e.key === "Enter") {
      Terminal.submit();
    }
    if (e.key === "ArrowUp" && Terminal.git != 0) {
      Terminal.git -= 1;
      textarea.value = Terminal.history[Terminal.git];
      command.innerHTML = textarea.value;
    }
    if (e.key === "ArrowDown" && Terminal.git != Terminal.history.length) {
      Terminal.git += 1;
      if (Terminal.history[Terminal.git] === undefined) {
        textarea.value = "";
      } else {
        textarea.value = Terminal.history[Terminal.git];
      }
      command.innerHTML = textarea.value;
    }
  }

  private static print(text: string) {
    Terminal.writeln(
      `${Terminal.prefix} <span class="cmd">${text}</span>`,
      "no-animation",
      0
    );
  }

  private static async submit() {
    const command = document.getElementById("typer") as HTMLElement;
    const textarea = document.getElementById("texter") as HTMLTextAreaElement;
    if (command.innerHTML.trim().length !== 0) {
      Terminal.history.push(command.innerHTML);
      Terminal.git = Terminal.history.length;
    }
    Terminal.print(command.innerHTML);
    const cmd = command.innerHTML.toLowerCase();
    command.innerHTML = "";
    textarea.value = "";
    if (Util.isMobile()) {
      Terminal.blur();
    }
    Util.PlaySound();
    if (navigator.vibrate) {
      navigator.vibrate(200);
    }

    await Terminal.execute(cmd);
  }

  public static async help() {
    const lines: Array<string> = [];
    lines.push("<br>");
    Terminal.commands.forEach((cmd) => {
      const span = `<span class="command">${cmd.name}</span>`;
      if (cmd.description) {
        lines.push(`${Util.shiftString(span, 40)} ${cmd.description}`);
      }
    });
    lines.push("<br>");
    await Terminal.writelns(lines, "color2 margin");
  }

  public static async execute(command: string) {
    if (!command || command.trim().length === 0) {
      return;
    }

    Util.track(command);

    if (command.includes(" &amp;&amp; ")) {
      const commands = command.split(" &amp;&amp; ");
      for (let i = 0; i < commands.length; i++) {
        await Terminal.execute(commands[i]);
      }
      return;
    }

    const cmd = Terminal.commands.find(
      (x) => x.name === command || (x.aliases && x.aliases.includes(command))
    );

    if (!cmd) {
      Terminal.writeln(
        '<span class="inherit">Befehl \'' +
          command +
          "' nicht gefunden. Für eine Übersicht aller Befehle verwende '<span class=\"command\">help</span>'.</span>",
        "error",
        100
      );
      return;
    }

    await cmd.execute();
  }

  public static newTab(link: string) {
    setTimeout(() => {
      window.open(link, "_blank");
    }, 500);
  }

  public static async writeln(
    text: string,
    style: string = "",
    time: number = 0
  ) {
    // text replaceAll links
    Object.keys(links).forEach((key) => {
      const link = links[key];
      text = text.replaceAll(
        key,
        `<a href="${link}" target="_blank">${key}</a>`
      );
    });

    let t = "";
    for (let i = 0; i < text.length; i++) {
      if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
        t += "&nbsp;&nbsp;";
        i++;
      } else {
        t += text.charAt(i);
      }
    }
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const next = document.createElement("p");
        next.innerHTML = t;
        next.className = style;

        const before = document.getElementById("before") as HTMLElement;
        before.parentNode!.insertBefore(next, before);

        window.scrollTo(0, document.body.offsetHeight);
        Terminal.flushEvents();
        resolve();
      }, time);
    });
  }

  private static async flushEvents() {
    const commands = document.getElementsByClassName("command");
    for (let i = 0; i < commands.length; i++) {
      const command = commands[i] as HTMLElement;
      command.onclick = async () => {
        const cmd = document.getElementById("typer") as HTMLElement;
        cmd.innerHTML = command.innerHTML;
        await Terminal.submit();
      };
    }
  }

  public static async clear() {
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        const term = document.getElementById("terminal") as HTMLElement;
        term.innerHTML = '<a id="before"></a>';
        resolve();
      }, 1);
    });
  }

  public static async writelns(
    name: string[],
    style: string = "",
    time: number = 30
  ) {
    const promises = [];
    for (let i = 0; i < name.length; i++) {
      promises.push(Terminal.writeln(name[i], style, time * i));
    }
    await Promise.all(promises);
  }
}

import { ExitCommand } from "./cmd/ExitCommand.js";
import { ClearCommand } from "./cmd/ClearCommand.js";
import { ProjectsCommand } from "./cmd/ProjectsCommand.js";
import { SkillsCommand } from "./cmd/SkillsCommand.js";
import { SocialCommand } from "./cmd/SocialCommand.js";
import { WhoamiCommand } from "./cmd/WhoamiCommand.js";
import { WhoisCommand } from "./cmd/WhoisCommand.js";
import { Terminal } from "./Terminal.js";
import { HistoryCommand } from "./cmd/HistoryCommand.js";
import { SudoCommand } from "./cmd/SudoCommand.js";
import { ContactCommand } from "./cmd/ContactCommand.js";
import { HelpCommand } from "./cmd/HelpCommand.js";
import { BannerCommand } from "./cmd/BannerCommand.js";
import { HelloCommand } from "./cmd/HelloCommand.js";
import { ABAPDebugCommand } from "./cmd/ABAPDebugCommand.js";
import { ABAPSessionCommand } from "./cmd/ABAPSessionCommand.js";
import { PwdCommand } from "./cmd/PwdCommand.js";
import { LsCommand } from "./cmd/LsCommand.js";
import { TechStackCommand } from "./cmd/TechStackCommand.js";
import { FaqCommand } from "./cmd/FaqCommand.js";
import { GitHubCommand } from "./cmd/GitHubCommand.js";
import { MailCommand } from "./cmd/MailCommand.js";
import { MatrixCommand } from "./cmd/MatrixCommand.js";
import { WhegCommand } from "./cmd/WhegCommand.js";
import { KeinBockCommand } from "./cmd/KeinBockCommand.js";
import { UpdateCommand } from "./cmd/UpdateCommand.js";
import { RebootCommand } from "./cmd/RebootCommand.js";
import { RandomPageCommand } from "./cmd/RandomPageCommand.js";
import { NiceCommand } from "./cmd/NiceCommand.js";
import { CatCommand } from "./cmd/CatCommand.js";
import { DestroyCommand } from "./cmd/DestroyCommand.js";
import { DanceCommand } from "./cmd/DanceCommand.js";
import { TouchCommand } from "./cmd/TouchCommand.js";
import { PingCommand } from "./cmd/PingCommand.js";
import { UnameCommand } from "./cmd/UnameCommand.js";
import { BADIHitsCommand } from "./cmd/BADIHitsCommand.js";
import { WhatsAppCommand } from "./cmd/WhatsAppCommand.js";
import { ReviewsCommand } from "./cmd/ReviewsCommand.js";

function $<TElement extends HTMLElement>(selector: string): TElement {
    return document.getElementById(selector) as TElement;
}

(<any>window).onTyping = function (from: Window, event: KeyboardEvent) {
    event = event || window.event;
    const typer = $("typer");
    const tw = (<any>from).value;
    typer.innerHTML = tw.replace(/\n/g, "");
};

(<any>window).onMoving = function (count: number, e: KeyboardEvent) {
    e = e || window.event;
    const keycode = e.keyCode || e.which;
    const cursor = $("cursor");
    if (keycode == 37 && parseInt(cursor.style.left) >= 0 - (count - 1) * 10) {
        cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
    } else if (keycode == 39 && parseInt(cursor.style.left) + 10 <= 0) {
        cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
    }
};

document.addEventListener("contextmenu", (event) => event.preventDefault());

Terminal.registerCommands([
    new WhoisCommand(),
    new WhoamiCommand(),
    new ProjectsCommand(),
    new SkillsCommand(),
    new TechStackCommand(),
    new SocialCommand(),
    new ExitCommand(),
    new SudoCommand(),
    new FaqCommand(),
    new ContactCommand(),
    new BannerCommand(),
    new HelloCommand(),
    new ABAPDebugCommand(),
    new ABAPSessionCommand(),
    new PwdCommand(),
    new LsCommand(),
    new GitHubCommand(),
    new MailCommand(),
    new MatrixCommand(),
    new WhegCommand(),
    new KeinBockCommand(),
    new UpdateCommand(),
    new RebootCommand(),
    new RandomPageCommand(),
    new NiceCommand(),
    new CatCommand(),
    new DestroyCommand(),
    new DanceCommand(),
    new TouchCommand(),
    new PingCommand(),
    new UnameCommand(),
    new BADIHitsCommand(),
    new WhatsAppCommand(),
    new ReviewsCommand(),
    new HelpCommand(),
    new HistoryCommand(),
    new ClearCommand()
]);

setTimeout(async () => {
    (<HTMLElement>document.getElementById("cat")).style.display = "none";
    await Terminal.init();
}, 1000);

console.log("%cHier könnte Ihre Werbung stehen.", "font-size: 20px;");
console.log("%cKontaktiere mich unter contact@marioke.dev.", "font-size: 20px;");
console.log("%cSchon ab 5€/Pixel im Monat.", "font-size: 20px;");

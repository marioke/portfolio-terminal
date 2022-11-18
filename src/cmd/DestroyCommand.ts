import { Command } from "../Command.js";

export class DestroyCommand implements Command {
    name = "destroy";
    aliases = ["kill", "rm", "delete", "del", "remove"];

    async execute() {
        const elements = document.querySelectorAll("body > *");
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i] as HTMLElement;
            element.style.transform = `rotate(${Math.random() * 360}deg)`;
        }
    }
}

import { Command } from "../Command.js";

export class DanceCommand implements Command {
    name = "dance";
    aliases = ["shuffle", "shake", "do-the-harlem-shake"];

    async execute() {
        let dancing = true;

        while (dancing) {
            const elements = document.querySelectorAll("p");

            elements.forEach((element) => {
                element.style.transition = "all 0.5s";
            });

            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                const rotation = Math.random() * 4 - 2;
                element.style.transform = `rotate(${rotation}deg)`;
                // random margin left
                const marginLeft = Math.random() * 10 - 5;
                element.style.marginLeft = `${marginLeft}px`;
            }
            await new Promise((resolve) => setTimeout(resolve, 100));
        }
    }
}

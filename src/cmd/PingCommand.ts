import { Terminal } from "../Terminal.js";
import { Command } from "../Command.js";

export class PingCommand implements Command {
  name = "ping";

  async execute() {
    const ip = this.getRandomIp();
    const counter = 5;
    for (let i = 0; i < counter; i++) {
      await Terminal.writeln(
        `64 bytes from ${ip}: icmp_seq=${i} ttl=112 time=${Math.floor(
          Math.random() * 100
        )}.${Math.floor(Math.random() * 500)} ms`,
        "color2"
      );
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
    await Terminal.writeln(`--- ping statistics ---`, "color2");
    await Terminal.writeln(
      `${counter} packets transmitted, ${counter} PONGS 🏓 received, 0% packet loss, time ${
        counter * 500
      }ms`,
      "color2"
    );
  }

  private getRandomIp(): string {
    return (
      Math.floor(Math.random() * 255) +
      1 +
      "." +
      Math.floor(Math.random() * 255) +
      "." +
      Math.floor(Math.random() * 255) +
      "." +
      Math.floor(Math.random() * 255)
    );
  }
}

export interface Command {
    name: string;
    aliases?: string[];
    description?: string;
    execute: () => Promise<void>;
}

export type Command = { name: string; text: string; badge: boolean; steps: string[]; when: string };
export type CommandGroup = { id: string; label: string; lead: string; items: Command[] };

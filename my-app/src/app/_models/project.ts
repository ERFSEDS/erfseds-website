export class Project {
    name: string;
    description: string;
    tags: string[];
    icons: string[];

constructor (name: string, description: string, tags: string[], icons: string[]) {
    this.name = name;
    this.description = description;
    this.tags = tags;
    this.icons = icons;
    }

}


export interface Tag {
    id: string;
    name: string;
}

export interface Question {
    id: string;
    title: string;
    description: string;
    [key: string]: string;
}

export interface Answer {
    id: string;
    duration: string;
    version: number;
    content: string;
    note: string;
    tags: Tag[];
}
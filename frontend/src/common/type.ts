export interface Tag {
    id: string;
    name: string;
    [key: string]: string;
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
    content: string;
    note: string;
    tags: Tag[];
    [key: string]: string | Tag[];
}
export interface Label {
    id: string;
    name: string;
}

export interface Question {
    id: string;
    title: string;
    description: string;
    labels: Label[];
    relatedQuestions: Question[];
}

export interface Answer {
    id: string;
    duration: string;
    version: number;
    content: string;
    note: string;
}
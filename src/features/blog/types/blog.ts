export interface Blog {
    id: string;
    title: string;
    introduction: string;
    content: string; // Markdown or HTML string
    author: string;
    date: string;
    category: string;
    image: string;
    readingTime: string;
}

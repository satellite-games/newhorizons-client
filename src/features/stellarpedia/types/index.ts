export interface StellarpediaBookHeader {
  id: string;
  title: Record<string, string>;
  icon: string;
  default: {
    chapter: string;
    article: string;
  };
}

export interface StellarpediaBookToc extends StellarpediaBookHeader {
  chapters?: {
    id: string;
    title: Record<string, string>;
    articles?: {
      id: string;
      title: Record<string, string>;
    }[];
  }[];
}

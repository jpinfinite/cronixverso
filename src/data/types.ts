export type Article = {
  id: string;
  category: 'IA' | 'Hardware' | 'Games' | 'Ciência';
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tagColor: string;
  content: string;
  relatedIds: string[];
};

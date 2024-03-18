export interface IBlogCardType {
  mainImage: any;
  title: string;
  category: any;
  publishedAt: string;
  currentSlug: string;
  categorie?: string;
  description: string;
}

export interface PostType {
  _id: string;
  _type: string;
  title: string;
  currentSlug: string;
  description: string;
  author: any;
  mainImage: any;
  body: any;
  category: any;
  publishedAt: string;
}

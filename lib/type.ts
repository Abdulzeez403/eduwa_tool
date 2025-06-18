export interface Category {
  title: string;
}

export interface Article {
  _id: string;
  title: string;
  excerpt: string;
  slug: string;
  publishedAt: string;
  image: string;
  author: string;
  categories?: Category;
}

export interface Category {
  title: string;
}

export interface Post {
  _id: string;
  title: string;
  publishedAt: string;
  image: string;
  author: string;
  categories?: Category;
  body: any; // You can type this more strictly if you want (PortableTextBlock[])
}

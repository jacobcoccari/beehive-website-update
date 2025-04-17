export interface Author {
  id: string;
  name: string;
  profile_image?: string;
  bio?: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  html: string;
  feature_image?: string;
  published_at: string;
  reading_time: number;
  authors?: Author[];
  tags?: Tag[];
} 
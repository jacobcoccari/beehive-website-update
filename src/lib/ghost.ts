import GhostContentAPI from "@tryghost/content-api";
import { PostOrPage, PostsOrPages, Nullable } from '@tryghost/content-api';
import { Post } from '@/types/ghost';

if (!process.env.GHOST_URL || !process.env.GHOST_CONTENT_API_KEY) {
  throw new Error('Ghost API configuration is missing');
}

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: process.env.GHOST_URL,
  key: process.env.GHOST_CONTENT_API_KEY,
  version: "v5.0"
});

export type { Post } from '@/types/ghost';

export function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function transformGhostPost(post: PostOrPage): Post {
  return {
    id: post.id,
    title: post.title || '',
    slug: post.slug,
    html: post.html || '',
    feature_image: post.feature_image || undefined,
    published_at: post.published_at || '',
    reading_time: post.reading_time || 0,
    authors: post.authors?.map(author => ({
      id: author.id,
      name: author.name || '',
      profile_image: author.profile_image || undefined,
      bio: author.bio || undefined
    })),
    tags: post.tags?.map(tag => ({
      id: tag.id,
      name: tag.name || '',
      slug: tag.slug,
      description: tag.description || undefined
    }))
  };
}

export async function getPosts(): Promise<Post[]> {
  try {
    const posts = await api.posts
      .browse({
        limit: "all",
        include: ["tags", "authors"]
      }) as PostsOrPages;
    return posts.map(transformGhostPost);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching posts:', error.message);
    } else {
      console.error('Unknown error fetching posts:', error);
    }
    return [];
  }
}

export async function getRecentPosts(limit: number = 3): Promise<Post[]> {
  try {
    const posts = await api.posts
      .browse({
        limit: limit,
        include: ["tags", "authors"]
      }) as PostsOrPages;
    return posts.map(transformGhostPost);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching recent posts:', error.message);
    } else {
      console.error('Unknown error fetching recent posts:', error);
    }
    return [];
  }
}

export async function getSinglePost(slug: string): Promise<Post | null> {
  try {
    const post = await api.posts
      .read({
        slug,
        include: ["tags", "authors"]
      } as { slug: Nullable<string>; include: string[] }) as PostOrPage;
    return transformGhostPost(post);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching single post:', error.message);
    } else {
      console.error('Unknown error fetching single post:', error);
    }
    return null;
  }
}

export async function getFeaturedPosts(): Promise<Post[]> {
  try {
    const posts = await api.posts
      .browse({
        filter: "featured:true",
        limit: "3",
        include: ["tags", "authors"]
      }) as PostsOrPages;
    return posts.map(transformGhostPost);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching featured posts:', error.message);
    } else {
      console.error('Unknown error fetching featured posts:', error);
    }
    return [];
  }
}
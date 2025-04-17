// src/app/blog/[slug]/page.tsx
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import { getSinglePost, getPosts, formatDate } from "@/lib/ghost"
import { buttonVariants } from "@/components/ui/button"
import { BlogContent } from "@/components/BlogContent"
import { Post } from "@/types/ghost"
import { cn } from "@/lib/utils"

export const revalidate = 3600 // Revalidate every hour

// Generate static params for all posts
export async function generateStaticParams() {
  const posts = await getPosts()
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }> | { slug: string }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // Ensure params is resolved
  const resolvedParams = await Promise.resolve(params)
  
  if (!resolvedParams.slug) {
    return notFound()
  }

  const post = await getSinglePost(resolvedParams.slug)
  
  if (!post) {
    return notFound()
  }
  
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
      <article className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link 
            href="/blog"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all posts
          </Link>
        </div>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              {post.authors && post.authors[0] && (
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{post.authors[0].name}</span>
                </div>
              )}
              
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.published_at}>{formatDate(post.published_at)}</time>
              </div>
              
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.reading_time} min read</span>
              </div>
            </div>
          </div>
          
          {post.feature_image && (
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src={post.feature_image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
          
          <BlogContent html={post.html} />
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t pt-6 mt-12">
            <div className="flex items-center gap-4">
              {post.authors && post.authors[0] && (
                <>
                  {post.authors[0].profile_image ? (
                    <Image
                      src={post.authors[0].profile_image}
                      alt={post.authors[0].name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-primary/10" />
                  )}
                  <div>
                    <p className="font-medium">{post.authors[0].name}</p>
                    {post.authors[0].bio && (
                      <p className="text-sm text-muted-foreground line-clamp-1">{post.authors[0].bio}</p>
                    )}
                  </div>
                </>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {post.tags && post.tags.map(tag => (
                <Link
                  key={tag.id}
                  href={`/blog/tag/${tag.slug}`}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "rounded-full"
                  )}
                >
                  {tag.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
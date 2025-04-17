import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Post, formatDate } from "@/lib/ghost"

interface BlogCardProps {
  post: Post;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block">
      <Card className="overflow-hidden transition-all hover:shadow-md h-full">
        {post.feature_image ? (
          <div className="aspect-video w-full overflow-hidden">
            <Image
              src={post.feature_image}
              alt={post.title}
              width={400}
              height={225}
              className="object-cover w-full h-full transition-transform hover:scale-105"
            />
          </div>
        ) : (
          <div className="aspect-video w-full bg-muted" />
        )}
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                {formatDate(post.published_at)}
              </p>
              <h3 className="font-bold text-xl hover:text-primary transition-colors">
                {post.title}
              </h3>
              {(post.excerpt || post.custom_excerpt) && (
                <p className="text-muted-foreground line-clamp-2">
                  {post.excerpt || post.custom_excerpt}
                </p>
              )}
            </div>
            
            {post.authors && post.authors[0] && (
              <div className="flex items-center space-x-2 pt-2 border-t">
                {post.authors[0].profile_image ? (
                  <Image
                    src={post.authors[0].profile_image}
                    alt={post.authors[0].name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-primary/10" />
                )}
                <span className="text-sm font-medium text-muted-foreground">
                  {post.authors[0].name}
                </span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
} 
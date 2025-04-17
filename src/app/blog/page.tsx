import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { getPosts, formatDate, Post } from "@/lib/ghost"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export const revalidate = 3600 // Revalidate every hour

export default async function BlogPage() {
  const posts = await getPosts()
  
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
            Insights & Articles
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            The latest trends and thoughts on AI and learning development from the Beehive Advisors team
          </p>
        </div>
      </div>
      
      <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
        {posts.length > 0 ? (
          posts.map((post: Post) => (
            <Card key={post.id} className="overflow-hidden transition-all hover:shadow-md">
              {post.feature_image ? (
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={post.feature_image}
                    alt={post.title}
                    width={600}
                    height={340}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                  />
                </div>
              ) : (
                <div className="aspect-video w-full bg-muted" />
              )}
              <CardContent className="p-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <time dateTime={post.published_at}>{formatDate(post.published_at)}</time>
                    <span>•</span>
                    <span>{post.reading_time} min read</span>
                    {post.featured && (
                      <>
                        <span>•</span>
                        <span className="text-primary font-medium">Featured</span>
                      </>
                    )}
                  </div>
                  <h2 className="font-bold text-2xl leading-tight hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-muted-foreground line-clamp-3">
                    {post.excerpt || post.custom_excerpt}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2">
                    {post.authors && post.authors[0] && (
                      <>
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
                        <span className="text-sm font-medium">{post.authors[0].name}</span>
                      </>
                    )}
                  </div>
                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="text-sm font-medium text-primary flex items-center"
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center space-y-2 py-16">
            <h3 className="text-xl font-medium">No posts found</h3>
            <p className="text-muted-foreground">Check back soon for new content.</p>
          </div>
        )}
      </div>
    </div>
  )
}
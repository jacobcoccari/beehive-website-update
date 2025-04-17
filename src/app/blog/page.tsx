import Link from "next/link"
import { getPosts, Post } from "@/lib/ghost"
import { BlogCard } from "@/components/BlogCard"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export const revalidate = 3600 // Revalidate every hour

export default async function BlogPage() {
  const posts = await getPosts()
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
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
                <BlogCard key={post.id} post={post} />
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center space-y-2 py-16">
                <h3 className="text-xl font-medium">No posts found</h3>
                <p className="text-muted-foreground">Check back soon for new content.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
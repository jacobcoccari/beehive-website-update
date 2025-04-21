import Link from "next/link";
import { Post } from "@/lib/ghost";
import { BlogCard } from "./BlogCard";
import { Card, CardContent } from "@/components/ui/card";

interface BlogSectionProps {
  posts: Post[];
}

export default function BlogSection({ posts }: BlogSectionProps) {
  return (
    <section id="blog" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-yellow-400 to-blue-400 bg-clip-text text-transparent">
              Latest Insights
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Stay updated with the latest trends in AI and learning development
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {posts.length > 0 ? (
            posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))
          ) : (
            Array(3)
              .fill(null)
              .map((_, index) => (
                <Card key={index} className="overflow-hidden transition-all hover:shadow-md">
                  <div className="aspect-video w-full bg-muted" />
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Coming soon</p>
                      <h3 className="font-bold text-xl">Stay tuned for our blog posts</h3>
                      <p className="text-muted-foreground line-clamp-2">
                        We&apos;re working on creating valuable content for you.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))
          )}
        </div>
        <div className="flex justify-center mt-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
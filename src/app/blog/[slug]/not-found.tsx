import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BlogNotFound() {
  return (
    <div className="container flex flex-col items-center justify-center gap-6 py-24 md:py-32">
      <div className="space-y-2 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Post not found</h1>
        <p className="text-muted-foreground">
          Sorry, the blog post you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
      </div>
      <Button asChild>
        <Link href="/blog">Back to Blog</Link>
      </Button>
    </div>
  )
}
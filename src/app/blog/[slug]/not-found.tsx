import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">404</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          We couldn&apos;t find the post you&apos;re looking for.
        </p>
        <Link 
          href="/blog"
          className="mt-8 inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all posts
        </Link>
      </div>
    </div>
  )
}
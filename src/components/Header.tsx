import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SchedulingModal } from "@/components/SchedulingModal"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/Mobile Logo.svg"
            alt="Beehive Advisors Logo"
            width={48}
            height={48}
            className="md:hidden h-12 w-auto"
          />
          <Image
            src="/Desktop Logo.svg"
            alt="Beehive Advisors Logo"
            width={48}
            height={48}
            className="hidden md:block h-12 w-auto"
          />
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link href="#services" className="text-sm font-medium hover:text-primary">
            Services
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary">
            About
          </Link>
          <Link href="#case-studies" className="text-sm font-medium hover:text-primary">
            Case Studies
          </Link>
          <Link href="#blog" className="text-sm font-medium hover:text-primary">
            Blog
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="hidden md:block">
          <SchedulingModal />
        </div>
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
    </header>
  )
} 
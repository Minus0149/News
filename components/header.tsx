import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MobileNav } from './mobile-nav'

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">TheHit.in</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/category/news" className="text-sm font-medium hover:text-primary">
              समाचार
            </Link>
            <Link href="/category/politics" className="text-sm font-medium hover:text-primary">
              राजनीति
            </Link>
            <Link href="/category/business" className="text-sm font-medium hover:text-primary">
              व्यापार
            </Link>
            <Link href="/category/entertainment" className="text-sm font-medium hover:text-primary">
              मनोरंजन
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}


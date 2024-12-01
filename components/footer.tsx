import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">About Us</h3>
            <p className="text-sm text-muted-foreground">TheHit.in is your trusted source for the latest news and information.</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/category/news" className="text-sm hover:underline">समाचार</Link></li>
              <li><Link href="/category/politics" className="text-sm hover:underline">राजनीति</Link></li>
              <li><Link href="/category/business" className="text-sm hover:underline">व्यापार</Link></li>
              <li><Link href="/category/entertainment" className="text-sm hover:underline">मनोरंजन</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:underline">Facebook</a></li>
              <li><a href="#" className="text-sm hover:underline">Twitter</a></li>
              <li><a href="#" className="text-sm hover:underline">Instagram</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <p className="text-sm text-muted-foreground">Email: info@thehit.in</p>
            <p className="text-sm text-muted-foreground">Phone: +91 123 456 7890</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TheHit.in. All rights reserved.
        </div>
      </div>
    </footer>
  )
}


'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <nav className="flex flex-col space-y-4">
          <Link href="/category/news" className="text-sm font-medium" onClick={() => setOpen(false)}>
            समाचार
          </Link>
          <Link href="/category/politics" className="text-sm font-medium" onClick={() => setOpen(false)}>
            राजनीति
          </Link>
          <Link href="/category/business" className="text-sm font-medium" onClick={() => setOpen(false)}>
            व्यापार
          </Link>
          <Link href="/category/entertainment" className="text-sm font-medium" onClick={() => setOpen(false)}>
            मनोरंजन
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}


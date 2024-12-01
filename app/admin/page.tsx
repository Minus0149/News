import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { DataTable } from './data-table'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function AdminDashboard() {
  const session = await getServerSession()
  
  if (!session) {
    redirect('/auth/login')
  }

  const articles = await prisma.article.findMany({
    include: {
      author: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Article Management</h1>
        <Link href="/admin/articles/new">
          <Button>Create New Article</Button>
        </Link>
      </div>
      <DataTable data={articles} />
    </div>
  )
}


import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import ArticleEditor from '@/components/article-editor'

export default async function EditArticle({ params }: { params: { id: string } }) {
  const session = await getServerSession()
  
  if (!session || session.user.role !== 'ADMIN') {
    redirect('/auth/login')
  }

  const article = await prisma.article.findUnique({
    where: { id: params.id },
  })

  if (!article) {
    redirect('/admin')
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Edit Article</h1>
      <ArticleEditor article={article} />
    </div>
  )
}


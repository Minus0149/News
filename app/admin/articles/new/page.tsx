import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import ArticleEditor from '@/components/article-editor'

export default async function NewArticle() {
  const session = await getServerSession()
  
  if (!session || session.user.role !== 'ADMIN') {
    redirect('/auth/login')
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Create New Article</h1>
      <ArticleEditor />
    </div>
  )
}


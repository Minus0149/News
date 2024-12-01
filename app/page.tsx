import Image from 'next/image'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { formatDistance } from 'date-fns'
import { hi } from 'date-fns/locale'

async function getArticles() {
  return await prisma.article.findMany({
    where: {
      published: true,
    },
    include: {
      author: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })
}

export default async function Home() {
  const articles = await getArticles()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <main className="md:col-span-8">
          {articles.map((article) => (
            <article key={article.id} className="mb-8 border-b pb-8">
              {article.imageUrl && (
                <div className="relative aspect-video mb-4">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              )}
              <Link href={`/article/${article.slug}`}>
                <h2 className="text-2xl font-bold mb-2 hover:text-primary">
                  {article.title}
                </h2>
              </Link>
              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <span>{article.author.name}</span>
                <span className="mx-2">•</span>
                <time>
                  {formatDistance(new Date(article.createdAt), new Date(), {
                    addSuffix: true,
                    locale: hi,
                  })}
                </time>
              </div>
              <div className="prose max-w-none" 
                dangerouslySetInnerHTML={{ 
                  __html: article.content.slice(0, 200) + '...' 
                }} 
              />
            </article>
          ))}
        </main>
        
        <aside className="md:col-span-4">
          <div className="sticky top-4 space-y-6">
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-bold mb-4">ट्रेंडिंग</h3>
              {/* Trending articles list */}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}


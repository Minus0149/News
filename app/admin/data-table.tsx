'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { formatDistance } from 'date-fns'
import { hi } from 'date-fns/locale'

export function DataTable({ data }) {
  const router = useRouter()
  const [articles, setArticles] = useState(data)

  const deleteArticle = async (id) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      try {
        const response = await fetch(`/api/articles/${id}`, {
          method: 'DELETE',
        })

        if (!response.ok) {
          throw new Error('Failed to delete article')
        }

        setArticles(articles.filter(article => article.id !== id))
        router.refresh()
      } catch (error) {
        console.error('Error deleting article:', error)
      }
    }
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Author</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>Published</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {articles.map((article) => (
          <TableRow key={article.id}>
            <TableCell>{article.title}</TableCell>
            <TableCell>{article.author.name}</TableCell>
            <TableCell>{article.category}</TableCell>
            <TableCell>
              {formatDistance(new Date(article.createdAt), new Date(), {
                addSuffix: true,
                locale: hi,
              })}
            </TableCell>
            <TableCell>{article.published ? 'Yes' : 'No'}</TableCell>
            <TableCell>
              <div className="flex space-x-2">
                <Link href={`/admin/articles/edit/${article.id}`}>
                  <Button variant="outline" size="sm">Edit</Button>
                </Link>
                <Button variant="destructive" size="sm" onClick={() => deleteArticle(article.id)}>Delete</Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}


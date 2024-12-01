import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  const session = await getServerSession()
  if (!session || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { title, content, category, published } = await req.json()

  try {
    const article = await prisma.article.create({
      data: {
        title,
        content,
        category,
        published: published || false,
        author: { connect: { id: session.user.id } },
        slug: title.toLowerCase().replace(/ /g, '-'),
      },
    })

    return NextResponse.json(article)
  } catch (error) {
    return NextResponse.json({ error: 'Error creating article' }, { status: 500 })
  }
}

export async function PUT(req: Request) {
  const session = await getServerSession()
  if (!session || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id, title, content, category, published } = await req.json()

  try {
    const article = await prisma.article.update({
      where: { id },
      data: {
        title,
        content,
        category,
        published,
        slug: title.toLowerCase().replace(/ /g, '-'),
      },
    })

    return NextResponse.json(article)
  } catch (error) {
    return NextResponse.json({ error: 'Error updating article' }, { status: 500 })
  }
}


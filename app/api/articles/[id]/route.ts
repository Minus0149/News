import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { prisma } from '@/lib/prisma'

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession()
  if (!session || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = params

  try {
    await prisma.article.delete({
      where: { id },
    })

    return NextResponse.json({ message: 'Article deleted successfully' })
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting article' }, { status: 500 })
  }
}


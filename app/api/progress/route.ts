import { prisma } from '@/lib/prisma';

export async function GET() {
  const entries = await prisma.constructionProgress.findMany({ orderBy: { date: 'desc' } });
  return Response.json(entries);
}

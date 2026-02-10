import { prisma } from '@/lib/prisma';

export async function GET() {
  const parcels = await prisma.parcel.findMany({ orderBy: { id: 'asc' } });
  return Response.json(parcels);
}

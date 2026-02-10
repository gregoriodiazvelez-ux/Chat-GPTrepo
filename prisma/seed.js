const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const parcelCoordinates = [
  '70,40 170,20 210,70 110,100',
  '210,70 290,40 340,95 250,130',
  '340,95 430,70 510,130 410,165',
  '510,130 585,120 630,190 550,225',
  '95,110 210,70 250,130 160,170',
  '250,130 340,95 410,165 300,205',
  '410,165 510,130 550,225 445,250',
  '160,170 250,130 300,205 195,255',
  '300,205 410,165 445,250 340,290',
  '445,250 550,225 565,305 465,325',
  '195,255 300,205 340,290 240,340',
  '340,290 445,250 465,325 370,365',
  '565,305 620,280 650,350 595,395',
  '240,340 370,365 320,430 225,405',
  '370,365 470,350 525,425 420,450'
];

const progressEntries = [
  {
    category: 'roads',
    title: 'Vías internas habilitadas',
    description: 'Pavimentación principal finalizada y drenajes listos para temporada de lluvias.',
    percentage: 100,
    date: new Date('2026-01-10'),
    mediaType: 'image',
    mediaUrl: '/images/roads.svg'
  },
  {
    category: 'utilities',
    title: 'Redes de servicios públicas',
    description: 'Instalación de ductos para energía, gas y agua potable en 10 de 15 parcelas.',
    percentage: 68,
    date: new Date('2026-01-25'),
    mediaType: 'image',
    mediaUrl: '/images/utilities.svg'
  },
  {
    category: 'common-areas',
    title: 'Bosque de meditación y senderos',
    description: 'Zona ecológica delimitada y sembrado inicial de especies nativas en curso.',
    percentage: 35,
    date: new Date('2026-02-02'),
    mediaType: 'image',
    mediaUrl: '/images/forest.svg'
  }
];

async function main() {
  await prisma.parcel.deleteMany();
  await prisma.constructionProgress.deleteMany();

  await prisma.parcel.createMany({
    data: parcelCoordinates.map((coordinates, index) => ({
      code: `P-${String(index + 1).padStart(2, '0')}`,
      areaM2: 5000,
      priceCop: 500000000,
      status: 'AVAILABLE',
      coordinates
    }))
  });

  await prisma.constructionProgress.createMany({ data: progressEntries });

  console.log('Database seeded successfully.');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

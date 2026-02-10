import Image from 'next/image';
import { prisma } from '@/lib/prisma';
import { prettyDate } from '@/lib/format';

export default async function ProgressPage() {
  const entries = await prisma.constructionProgress.findMany({ orderBy: { date: 'desc' } });

  return (
    <main className="container section">
      <h1 className="page-title">Avance de Obra</h1>
      <p>Seguimiento transparente por categorías: vías, servicios públicos y zonas comunes.</p>

      <section className="card" style={{ marginTop: 20 }}>
        <h3>Línea de tiempo</h3>
        <div className="timeline">
          {entries.map((entry) => (
            <article className="timeline-item" key={entry.id}>
              <p style={{ marginBottom: 4, color: 'var(--muted)' }}>{prettyDate(entry.date)}</p>
              <h4 style={{ margin: 0 }}>{entry.title}</h4>
              <p>{entry.description}</p>
              <strong>{entry.percentage}% completado · {entry.category}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingBottom: 0 }}>
        <h3>Galería de obra</h3>
        <div className="grid gallery">
          {entries.map((entry) => (
            <article className="card" key={`media-${entry.id}`}>
              <Image src={entry.mediaUrl} alt={entry.title} width={800} height={500} />
              <h4>{entry.title}</h4>
              <p>{entry.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

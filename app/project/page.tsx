export default function ProjectOverviewPage() {
  return (
    <main className="container section">
      <h1 className="page-title">Resumen del Proyecto</h1>
      <p>Desarrollo de 90.000 m² en El Retiro, Antioquia, dividido en 15 parcelas premium de 5.000 m². El diseño prioriza sostenibilidad, privacidad y conexión con el bosque andino.</p>
      <div className="grid cards" style={{ marginTop: 24 }}>
        <div className="card"><h3>Infraestructura</h3><p>Vías internas en afirmado/pavimento, red eléctrica, agua potable y gas por parcela.</p></div>
        <div className="card"><h3>Seguridad</h3><p>Sistema CCTV, control de visitantes y monitoreo de perímetro 24/7.</p></div>
        <div className="card"><h3>Zonas Eco</h3><p>Senderos, bosque de meditación, áreas de descanso y diseño de bajo impacto ambiental.</p></div>
      </div>
      <section className="card" style={{ marginTop: 24 }}>
        <h3>Stack recomendado para producción</h3>
        <ul>
          <li><strong>Frontend:</strong> Next.js + TypeScript + CSS modular para SSR, SEO y rendimiento.</li>
          <li><strong>Backend:</strong> API Routes de Next.js + Prisma ORM para dominio de parcelas/progreso.</li>
          <li><strong>Base de datos:</strong> PostgreSQL en producción (Neon/Supabase) y SQLite local para arranque simple.</li>
          <li><strong>Media:</strong> Cloudinary o S3 para imágenes/videos de avance de obra.</li>
          <li><strong>Observabilidad:</strong> Sentry + logs estructurados.</li>
        </ul>
      </section>
    </main>
  );
}

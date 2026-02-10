import Link from 'next/link';

const highlights = [
  { title: '90.000 m² de naturaleza', description: 'Desarrollo eco-luxury con reserva forestal y zonas de contemplación.' },
  { title: '15 parcelas exclusivas', description: 'Cada lote con 5.000 m², acceso vehicular interno y servicios listos.' },
  { title: 'Seguridad integral', description: 'CCTV perimetral, control de acceso y protocolos de vigilancia 24/7.' }
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <p style={{ color: '#cce0cd', letterSpacing: '.1em' }}>EL RETIRO, ANTIOQUIA</p>
          <h1>Vivir en armonía con la naturaleza</h1>
          <p>Plataforma oficial del proyecto de parcelación premium con seguimiento de obra y selección interactiva de lotes.</p>
          <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
            <Link href="/parcels" className="cta">Ver parcelas</Link>
            <Link href="/project" className="cta" style={{ background: '#d7c4a3', color: '#1f2a1f' }}>Conocer proyecto</Link>
          </div>
        </div>
      </section>

      <section className="section container">
        <h2 className="page-title">El corazón del agua</h2>
        <p style={{ color: 'var(--muted)' }}>Infraestructura diseñada para bienestar: energía, agua, gas, vías internas y espacios de meditación en bosque protegido.</p>
        <div className="grid cards" style={{ marginTop: 22 }}>
          {highlights.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

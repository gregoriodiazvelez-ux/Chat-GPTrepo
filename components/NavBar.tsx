import Link from 'next/link';

const links = [
  ['/', 'Inicio'],
  ['/project', 'Proyecto'],
  ['/parcels', 'Parcelas'],
  ['/progress', 'Avance de Obra'],
  ['/contact', 'Contacto']
] as const;

export function NavBar() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link href="/" className="brand">EL RETIRO</Link>
        <div className="links">
          {links.map(([href, label]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </div>
        <Link href="/contact" className="cta">Agendar visita</Link>
      </div>
    </nav>
  );
}

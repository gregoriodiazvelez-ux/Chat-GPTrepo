export default function ContactPage() {
  return (
    <main className="container section">
      <h1 className="page-title">Agenda tu visita privada</h1>
      <p>Déjanos tus datos y un asesor comercial te contactará para programar una visita al proyecto en El Retiro.</p>
      <form className="form card" style={{ marginTop: 20 }}>
        <input placeholder="Nombre completo" required />
        <input type="email" placeholder="Correo electrónico" required />
        <input placeholder="Teléfono" required />
        <textarea placeholder="Mensaje" rows={4} />
        <button className="cta" type="submit">Solicitar información</button>
      </form>
    </main>
  );
}

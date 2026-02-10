import { ParcelsInteractive } from '@/components/ParcelsInteractive';

export default function ParcelsPage() {
  return (
    <main className="container section">
      <h1 className="page-title">Mapa Interactivo de Parcelas</h1>
      <p>Selecciona una parcela en el mapa maestro para ver disponibilidad, área y valor.</p>
      <ParcelsInteractive />
    </main>
  );
}

'use client';

import { useEffect, useMemo, useState } from 'react';
import { currencyCop } from '@/lib/format';

type Parcel = {
  id: number;
  code: string;
  areaM2: number;
  priceCop: number;
  status: string;
  coordinates: string;
};

export function ParcelsInteractive() {
  const [parcels, setParcels] = useState<Parcel[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/parcels').then((r) => r.json()).then((data: Parcel[]) => {
      setParcels(data);
      setSelectedId(data[0]?.id ?? null);
    });
  }, []);

  const selected = useMemo(() => parcels.find((p) => p.id === selectedId), [parcels, selectedId]);

  return (
    <div className="parcel-layout">
      <div className="card">
        <svg viewBox="0 0 700 500" role="img" aria-label="Mapa interactivo de parcelas El Retiro">
          <rect x="0" y="0" width="700" height="500" fill="#f4f2ec" />
          {parcels.map((parcel) => (
            <polygon
              key={parcel.id}
              points={parcel.coordinates}
              className={`parcel-polygon ${selectedId === parcel.id ? 'active' : ''}`}
              onClick={() => setSelectedId(parcel.id)}
            />
          ))}
          {parcels.map((parcel) => {
            const [x, y] = parcel.coordinates.split(' ')[0].split(',').map(Number);
            return <text key={`label-${parcel.id}`} x={x + 8} y={y + 18} fontSize="12" fill="#1f2a1f">{parcel.code}</text>;
          })}
        </svg>
      </div>
      <aside className="card">
        <h3 style={{ marginTop: 0 }}>Detalle de Parcela</h3>
        {selected ? (
          <>
            <p><strong>{selected.code}</strong></p>
            <p>Área: {selected.areaM2.toLocaleString('es-CO')} m²</p>
            <p>Precio: {currencyCop(selected.priceCop)}</p>
            <p>Estado: <strong>Disponible</strong></p>
            <a className="cta" href="/contact">Solicitar asesoría</a>
          </>
        ) : (
          <p>Cargando parcelas...</p>
        )}
      </aside>
    </div>
  );
}

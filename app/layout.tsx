import './globals.css';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'El Retiro | Parcelas de lujo en Antioquia',
  description: 'Plataforma integral para comercialización y seguimiento de obra de El Retiro.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

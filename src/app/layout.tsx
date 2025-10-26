import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CartProvider } from '@/components/CartContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Inkwell & Ashes - Luxury Stationery',
  description: 'Where Words Meet Art. Luxury stationery for those who write their own story.',
  keywords: 'luxury stationery, journals, pens, ink, minimalist design',
  openGraph: {
    title: 'Inkwell & Ashes',
    description: 'Elegant craftsmanship meets edgy minimalism.',
    images: '/og-image.jpg', // Add your OG image to public/
    siteName: 'Inkwell & Ashes',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

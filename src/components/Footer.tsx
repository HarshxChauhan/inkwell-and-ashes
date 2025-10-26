import Link from 'next/link';
import { Instagram, Pinterest, TikTok } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-12 mt-20">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400 mb-4">&copy; 2025 Inkwell & Ashes. All rights reserved.</p>
        <div className="flex justify-center gap-6 mb-4">
          <Link href="https://instagram.com/inkwellandashes" target="_blank" rel="noopener noreferrer">
            <Instagram size={24} className="hover:text-gold" />
          </Link>
          <Link href="https://pinterest.com/inkwellandashes" target="_blank" rel="noopener noreferrer">
            <Pinterest size={24} className="hover:text-gold" />
          </Link>
          <Link href="https://tiktok.com/@inkwellandashes" target="_blank" rel="noopener noreferrer">
            <TikTok size={24} className="hover:text-gold" />
          </Link>
        </div>
        <div className="text-sm text-gray-500">
          <Link href="/privacy" className="hover:text-gold">Privacy Policy</Link> | 
          <Link href="/terms" className="hover:text-gold ml-2">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

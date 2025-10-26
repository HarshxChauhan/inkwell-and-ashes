'use client';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from './CartContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useCart();
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif text-gold">Inkwell & Ashes</Link>
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <Link href="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <Link href="/about" className="hover:text-gold transition-colors">About</Link>
          <Link href="/contact" className="hover:text-gold transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative">
            <ShoppingBag size={24} className="hover:text-gold" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-black text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900 border-t border-gray-800"
          >
            <div className="flex flex-col gap-4 py-4 px-4">
              <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/shop" onClick={() => setIsOpen(false)}>Shop</Link>
              <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

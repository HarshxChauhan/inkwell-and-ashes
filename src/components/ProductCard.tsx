'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/components/CartContext';
import { Product } from '@/types';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-gray-800 rounded-lg overflow-hidden hover-scale group"
    >
      <Link href={`/product/${product.id}`}>
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </Link>
      <div className="p-6">
        <h3 className="text-xl font-serif mb-2">{product.name}</h3>
        <p className="text-gold text-lg mb-4">${product.price}</p>
        <p className="text-gray-400 text-sm mb-4">{product.shortDesc}</p>
        <div className="flex gap-2">
          <Button size="sm" onClick={() => addToCart(product)} className="flex-1">Add to Cart</Button>
          <Link href={`/product/${product.id}`}>
            <Button variant="outline" size="sm">View</Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

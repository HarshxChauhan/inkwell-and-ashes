'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '@/types';

interface Props {
  products: Product[];
}

export default function ProductCarousel({ products }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % products.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg">
        <motion.div
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="flex"
        >
          {products.map((product) => (
            <div key={product.id} className="w-full flex-shrink-0 px-2">
              <ProductCard product={product} />
            </div>
          ))}
        </motion.div>
      </div>
      <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-700 p-2 rounded-full">
        <ChevronLeft size={20} />
      </button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-700 p-2 rounded-full">
        <ChevronRight size={20} />
      </button>
    </div>
  );
}

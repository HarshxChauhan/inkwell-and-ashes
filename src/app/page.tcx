'use client';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import ProductCarousel from '@/components/ProductCarousel';
import { products } from '@/lib/products';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-4"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-gray-100">
            Where Words Meet Art
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Luxury stationery for those who write their own story. Blending vintage artistry with modern minimalism.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-gray-800 to-gray-700 text-white px-8 py-3 rounded-full font-medium hover:shadow-gold transition-shadow"
          >
            Shop Now
          </motion.button>
        </div>
      </motion.section>
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-serif text-center mb-12">Featured Collection</h3>
          <ProductCarousel products={products.slice(0, 5)} />
        </div>
      </section>
    </div>
  );
}

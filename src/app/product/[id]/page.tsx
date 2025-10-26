'use client';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { products } from '@/lib/products';
import { Button } from '@/components/ui/Button';
import { Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '@/components/CartContext';

export default function ProductDetail() {
  const params = useParams();
  const id = parseInt(params.id as string);
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();

  if (!product) return <div>Product not found</div>;

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== id).slice(0, 3);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:w-1/2"
        >
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            className="w-full h-auto rounded-lg hover-scale object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:w-1/2"
        >
          <h1 className="text-3xl font-serif mb-4">{product.name}</h1>
          <p className="text-2xl font-medium text-gold mb-6">${product.price}</p>
          <p className="text-gray-300 mb-8">{product.description}</p>
          <div className="flex gap-4 mb-8">
            <Button onClick={() => addToCart(product)} className="flex items-center gap-2">
              <ShoppingCart size={20} /> Add to Cart
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Heart size={20} /> Wishlist
            </Button>
          </div>
          <div className="space-y-2 text-sm text-gray-400">
            {product.specs.map((spec, i) => (
              <p key={i}>{spec}</p>
            ))}
          </div>
        </motion.div>
      </div>
      {relatedProducts.length > 0 && (
        <section className="mt-20">
          <h2 className="text-2xl font-serif text-center mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </div>
  );
}

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Born from Ink and Imagination</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Inkwell & Ashes is more than stationery—it's a canvas for your rebellion. Crafted for Gen Z creatives who demand elegance with an edge.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <Image
              src="https://source.unsplash.com/600x400/?luxury-desk-setup"
              alt="Lifestyle setup"
              width={600}
              height={400}
              className="rounded-lg hover-scale"
            />
          </div>
          <div>
            <h2 className="text-2xl font-serif mb-4">Our Mission</h2>
            <p className="text-gray-300 mb-6">
              We believe in the power of the written word to ignite change. Every piece is handcrafted with premium materials, blending timeless techniques with contemporary design. Quiet luxury, amplified.
            </p>
            <blockquote className="text-gray-400 italic border-l-4 border-gold pl-4">
              "In a world of noise, let your ink speak volumes." – The Founder
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}

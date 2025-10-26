'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Mail, MapPin, Instagram, Pinterest, TikTok } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Integrate with your backend/email service (e.g., EmailJS or API route)
    alert('Message sent! (Demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-serif text-center mb-12"
        >
          Get in Touch
        </motion.h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-gold focus:outline-none transition-colors"
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-gold focus:outline-none transition-colors"
          />
          <textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={5}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-gold focus:outline-none transition-colors resize-none"
          />
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
        <div className="mt-12 space-y-4">
          <div className="flex items-center gap-4 text-gray-400">
            <Mail size={20} />
            <span>hello@inkwellandashes.com</span>
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <MapPin size={20} />
            <span>123 Shadow Lane, Brooklyn, NY 11201</span> {/* Optional physical address */}
          </div>
          <div className="flex gap-4 mt-8">
            <a href="https://instagram.com/inkwellandashes" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 hover:text-gold transition-colors" />
            </a>
            <a href="https://pinterest.com/inkwellandashes" target="_blank" rel="noopener noreferrer">
              <Pinterest className="w-6 h-6 hover:text-gold transition-colors" />
            </a>
            <a href="https://tiktok.com/@inkwellandashes" target="_blank" rel="noopener noreferrer">
              <TikTok className="w-6 h-6 hover:text-gold transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

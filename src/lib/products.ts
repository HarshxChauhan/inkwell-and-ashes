import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Midnight Journal',
    category: 'journals',
    price: 89,
    description: 'Leather-bound journal with embossed edges and archival paper.',
    shortDesc: 'Timeless companion for your thoughts.',
    image: 'https://source.unsplash.com/300x300/?leather-journal,dark',
    specs: ['192 pages', 'Fountain pen friendly', '5.5" x 8"'],
  },
  {
    id: 2,
    name: 'Obsidian Ink Pen',
    category: 'pens',
    price: 145,
    description: 'Matte black fountain pen with gold nib, inspired by ancient ink rituals.',
    shortDesc: 'Precision meets poetry.',
    image: 'https://source.unsplash.com/300x300/?fountain-pen,luxury',
    specs: ['14k gold nib', 'Ergonomic grip', 'Includes converter'],
  },
  {
    id: 3,
    name: 'Ashes Ink Set',
    category: 'ink',
    price: 65,
    description: 'Set of three muted tones: Charcoal, Ember, and Shadow.',
    shortDesc: 'Bottles of liquid rebellion.',
    image: 'https://source.unsplash.com/300x300/?ink-bottle,dark',
    specs: ['30ml each', 'Archival quality', 'Bottled in glass'],
  },
  {
    id: 4,
    name: 'Rebel Wax Seal Kit',
    category: 'accessories',
    price: 45,
    description: 'Custom brass seal with wax sticks for sealing your secrets.',
    shortDesc: 'Seal the deal with style.',
    image: 'https://source.unsplash.com/300x300/?wax-seal,vintage',
    specs: ['Brass handle', '5 wax colors', 'Instruction card'],
  },
  // Add more products as needed
];

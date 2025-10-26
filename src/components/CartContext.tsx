'use client';
import { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product } from '@/types';

type CartItem = Product & { quantity: number };

type CartState = { items: CartItem[] };

type Action = { type: 'ADD_ITEM'; payload: Product } | { type: 'REMOVE_ITEM'; payload: number } | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } };

const CartContext = createContext<any>(null);

const cartReducer = (state: CartState, action: Action): CartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existing = state.items.find(item => item.id === action.payload.id);
      if (existing) {
        return {
          items: state.items.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }
      return { items: [...state.items, { ...action.payload, quantity: 1 }] };
    case 'REMOVE_ITEM':
      return { items: state.items.filter(item => item.id !== action.payload) };
    case 'UPDATE_QUANTITY':
      return {
        items: state.items.map(item =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        ).filter(item => item.quantity > 0),
      };
    default:
      return state;
  }
};

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const addToCart = (product: Product) => dispatch({ type: 'ADD_ITEM', payload: product });
  const removeFromCart = (id: number) => dispatch({ type: 'REMOVE_ITEM', payload: id });
  const updateQuantity = (id: number, quantity: number) => dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });

  // Persist to localStorage
  // Add useEffect to save/load from localStorage

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);

'use client';

import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface TransitionProviderProps {
  children: ReactNode;
}

export default function TransitionProvider({ children }: TransitionProviderProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      {/* The key ensures AnimatePresence detects when the path changes */}
      <div key={pathname}>
        {children}
      </div>
    </AnimatePresence>
  );
} 
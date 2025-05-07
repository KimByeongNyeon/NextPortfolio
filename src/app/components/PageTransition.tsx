'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  // Optional animation type, defaults to 'fade'
  animationType?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right';
}

export default function PageTransition({ 
  children, 
  animationType = 'slide-up' 
}: PageTransitionProps) {
  
  // Define different animation variants
  const animations = {
    'fade': {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.3 }
    },
    'slide-up': {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
    },
    'slide-left': {
      initial: { opacity: 0, x: 30 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -30 },
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
    },
    'slide-right': {
      initial: { opacity: 0, x: -30 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 30 },
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const selectedAnimation = animations[animationType];

  return (
    <motion.div
      initial={selectedAnimation.initial}
      animate={selectedAnimation.animate}
      exit={selectedAnimation.exit}
      transition={selectedAnimation.transition}
      className="w-full"
    >
      {children}
    </motion.div>
  );
} 
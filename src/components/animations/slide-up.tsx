"use client";

import { easeOut, motion } from "motion/react";

interface SlideUpProps {
  children: React.ReactNode;
}

export function SlideUp({ children }: SlideUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}

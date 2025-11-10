"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerChildren?: number;
  delayChildren?: number;
  duration?: number;
  useInView?: boolean;
  viewport?: {
    once?: boolean;
    amount?: number;
  };
}

function StaggerContainer({
  children,
  className = "",
  staggerChildren = 0.3,
  delayChildren = 0.2,
  duration = 0.7,
  useInView = false,
  viewport = { once: true },
}: StaggerContainerProps) {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        staggerChildren,
        delayChildren,
      },
    },
  };

  const animationProps = useInView
    ? {
        variants,
        initial: "hidden",
        whileInView: "show",
        viewport,
      }
    : {
        variants,
        initial: "hidden",
        animate: "show",
      };

  return (
    <motion.div {...animationProps} className={className}>
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  y?: number;
  transition?: {
    type?: "spring" | "tween" | "inertia";
    stiffness?: number;
    damping?: number;
  };
}

function StaggerItem({
  children,
  className = "",
  y = 20,
  transition = { type: "spring", stiffness: 50, damping: 20 },
}: StaggerItemProps) {
  const variants = {
    hidden: { y, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition,
    },
  };

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}

export { StaggerContainer, StaggerItem };

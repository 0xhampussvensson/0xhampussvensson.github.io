"use client"

import { motion, Variants } from "framer-motion";
import React from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  delay = 0,
  duration = 0.6,
}) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration, delay, ease: "easeOut" }}
      variants={fadeUpVariants}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;

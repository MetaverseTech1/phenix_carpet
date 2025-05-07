"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = ({ phoneNumber = "1234567890" }) => {
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  // Component JSX (mostly unchanged)
  return (
    <motion.div
      className="fixed bottom-7 right-7 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 1
      }}
    >
      {/* Content remains mostly the same */}
    </motion.div>
  );
};

export default WhatsAppFloat;
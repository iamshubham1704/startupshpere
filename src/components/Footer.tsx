import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import DevelopersModal from './DevelopersModal';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <footer className="bg-black/90 border-t border-[#FEB90B]/20 py-8">
      <DevelopersModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center mb-4"
          >
            <Rocket className="w-8 h-8 text-[#FEB90B] mr-2" />
            <span className="text-xl font-bold gradient-text">Startup Sphere</span>
          </motion.div>
          <p className="text-white/60 text-center">
            <button
              onClick={() => setShowModal(true)}
              className="text-[#FEB90B] font-semibold hover:text-[#FEB90B]/80 transition-colors"
            >
              Developers
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
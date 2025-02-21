import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Linkedin, Instagram } from 'lucide-react';

interface DevelopersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const developers = [
  {
    name: 'Chetan Agarwal',
    linkedin: '#',
    instagram: '#'
  },
  {
    name: 'Shubham Solanki',
    linkedin: '#',
    instagram: '#'
  },
  {
    name: 'Mridul Bairathi',
    linkedin: '#',
    instagram: '#'
  },
  {
    name: 'Khushagra Sachdeva',
    linkedin: '#',
    instagram: '#'
  }
];

const DevelopersModal: React.FC<DevelopersModalProps> = ({ isOpen, onClose }) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", duration: 0.5 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.3 }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative bg-black/90 border border-[#FEB90B]/20 rounded-xl p-8 max-w-md w-full mx-4 z-50"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-white/60 hover:text-[#FEB90B] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold mb-6 gradient-text text-center">
              Our Developers
            </h2>

            <div className="space-y-6">
              {developers.map((dev, index) => (
                <motion.div
                  key={dev.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 border border-[#FEB90B]/20 rounded-lg hover:border-[#FEB90B] transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-3">{dev.name}</h3>
                  <div className="flex space-x-4">
                    <a
                      href={dev.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-[#FEB90B] transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={dev.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-[#FEB90B] transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DevelopersModal;
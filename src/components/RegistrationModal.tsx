import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'community' | 'event';
  eventTitle?: string;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose, type, eventTitle }) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    onClose();
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

            <h2 className="text-2xl font-bold mb-6 gradient-text">
              {type === 'community' ? 'Join Our Community' : `Register for ${eventTitle}`}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white/80 mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-[#FEB90B]/20 focus:border-[#FEB90B] text-white outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-white/80 mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-[#FEB90B]/20 focus:border-[#FEB90B] text-white outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-white/80 mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-[#FEB90B]/20 focus:border-[#FEB90B] text-white outline-none transition-colors"
                />
              </div>

              {type === 'community' && (
                <div>
                  <label className="block text-white/80 mb-2">Department of Interest</label>
                  <select
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-[#FEB90B]/20 focus:border-[#FEB90B] text-white outline-none transition-colors [&>option]:text-black"
                  >
                    <option value="">Select Department</option>
                    <option value="rd">Research & Development</option>
                    <option value="marketing">Marketing</option>
                    <option value="tech">Tech and Development</option>
                    <option value="photo">Photography & Videography</option>
                    <option value="events">Event Management</option>
                    <option value="startup">Startup Development</option>
                    <option value="content">Content Creation</option>
                    <option value="social">Social Media Management</option>
                    <option value="monetization">Monetization Strategies</option>
                    <option value="pr">Public Relations</option>
                  </select>
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(254, 185, 11, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#FEB90B] text-black font-semibold py-3 rounded-lg transition-all duration-300"
                type="submit"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default RegistrationModal;
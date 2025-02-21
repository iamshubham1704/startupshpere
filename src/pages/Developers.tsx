import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const developers = [
  {
    name: 'Developer Name',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'mailto:developer@example.com'
  }
];

const Developers = () => {
  return (
    <div className="pt-20 min-h-screen bg-black">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-16 gradient-text">Development Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {developers.map((dev, index) => (
            <motion.div
              key={dev.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden border border-[#FEB90B]/20 hover:border-[#FEB90B] transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={dev.image}
                  alt={dev.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{dev.name}</h3>
                <p className="text-[#FEB90B] mb-4">{dev.role}</p>
                <div className="flex space-x-4">
                  <a href={dev.github} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#FEB90B]">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#FEB90B]">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href={dev.email} className="text-white/80 hover:text-[#FEB90B]">
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Developers;
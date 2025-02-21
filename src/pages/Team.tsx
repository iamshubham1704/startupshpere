import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const teamMembers = [
  {
    name: 'Team Member 1',
    position: 'President',
    image: 'https://startupspheremait.vercel.app/static/media/WhatsApp_Image_2024-09-09_at_7.06.20_PM__1_-removebg-preview.fefbe9dfd14470a8cae5.png'
  },
  {
    name: 'Team Member 2',
    position: 'Vice President',
    image: 'https://startupspheremait.vercel.app/static/media/WhatsApp_Image_2024-09-09_at_7.06.20_PM__1_-removebg-preview.fefbe9dfd14470a8cae5.png'
  },
  {
    name: 'Team Member 3',
    position: 'Technical Head',
    image: 'https://startupspheremait.vercel.app/static/media/WhatsApp_Image_2024-09-09_at_7.06.20_PM__1_-removebg-preview.fefbe9dfd14470a8cae5.png'
  },
  {
    name: 'Team Member 4',
    position: 'Marketing Lead',
    image: 'https://startupspheremait.vercel.app/static/media/WhatsApp_Image_2024-09-09_at_7.06.20_PM__1_-removebg-preview.fefbe9dfd14470a8cae5.png'
  },
  {
    name: 'Team Member 5',
    position: 'Event Coordinator',
    image: 'https://startupspheremait.vercel.app/static/media/WhatsApp_Image_2024-09-09_at_7.06.20_PM__1_-removebg-preview.fefbe9dfd14470a8cae5.png'
  },
  {
    name: 'Team Member 6',
    position: 'Content Head',
    image: 'https://startupspheremait.vercel.app/static/media/WhatsApp_Image_2024-09-09_at_7.06.20_PM__1_-removebg-preview.fefbe9dfd14470a8cae5.png'
  }
];

const Team = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-black flex flex-col">
      <div className="container mx-auto px-4 py-16 flex-grow">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold text-center mb-24 gradient-text"
        >
          Our Team
        </motion.h1>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(254, 185, 11, 0.2)"
              }}
              className="bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden border border-[#FEB90B]/20 hover:border-[#FEB90B] transition-all duration-500"
            >
              <motion.div
                className="aspect-square overflow-hidden"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
              <motion.div 
                className="p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-semibold mb-3">{member.name}</h3>
                <p className="text-[#FEB90B] text-lg">{member.position}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
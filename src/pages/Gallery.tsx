import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Footer from '../components/Footer';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3',
    title: 'Startup Summit 2023',
    category: 'Events'
  },
  {
    url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3',
    title: 'Tech Workshop',
    category: 'Workshop'
  },
  {
    url: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3',
    title: 'Team Building',
    category: 'Culture'
  },
  {
    url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3',
    title: 'Innovation Conference',
    category: 'Events'
  },
  {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3',
    title: 'Team Meeting',
    category: 'Culture'
  },
  {
    url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3',
    title: 'Strategy Session',
    category: 'Workshop'
  },
  {
    url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3',
    title: 'Networking Event',
    category: 'Events'
  },
  {
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3',
    title: 'Team Celebration',
    category: 'Culture'
  },
  {
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3',
    title: 'Hackathon',
    category: 'Events'
  }
];

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
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
          Gallery
        </motion.h1>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl aspect-square"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6 text-center"
              >
                <h3 className="text-2xl font-semibold mb-2 text-white">{image.title}</h3>
                <span className="text-[#FEB90B] text-lg">{image.category}</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
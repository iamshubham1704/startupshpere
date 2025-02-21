import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import RegistrationModal from '../components/RegistrationModal';
import Footer from '../components/Footer';

const events = [
  {
    title: 'Startup Summit 2024',
    date: 'March 25, 2024',
    time: '10:00 AM - 5:00 PM',
    location: 'Main Auditorium',
    attendees: '500+',
    description: 'Annual startup conference featuring industry leaders and innovative startups. Join us for a day of inspiration, networking, and knowledge sharing.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3'
  },
  {
    title: 'Tech Workshop Series',
    date: 'April 5, 2024',
    time: '2:00 PM - 6:00 PM',
    location: 'Innovation Lab',
    attendees: '200',
    description: 'Hands-on workshops covering the latest technologies and development practices. Perfect for beginners and advanced developers alike.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3'
  },
  {
    title: 'Entrepreneurship Bootcamp',
    date: 'April 15, 2024',
    time: '9:00 AM - 4:00 PM',
    location: 'Startup Hub',
    attendees: '150',
    description: 'Intensive bootcamp for aspiring entrepreneurs. Learn from successful founders and industry experts.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3'
  },
  {
    title: 'Innovation Hackathon',
    date: 'May 1, 2024',
    time: '24 Hours',
    location: 'Tech Center',
    attendees: '300',
    description: '24-hour hackathon challenging participants to build innovative solutions for real-world problems.',
    image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3'
  }
];

const Events = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const handleRegister = (eventTitle: string) => {
    setSelectedEvent(eventTitle);
    setShowModal(true);
  };

  return (
    <div className="pt-20 min-h-screen bg-black flex flex-col">
      <RegistrationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        type="event"
        eventTitle={selectedEvent}
      />
      
      <div className="container mx-auto px-4 py-16 flex-grow">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold text-center mb-24 gradient-text"
        >
          Upcoming Events
        </motion.h1>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-12"
        >
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 30px rgba(254, 185, 11, 0.2)"
              }}
              className="bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden border border-[#FEB90B]/20 hover:border-[#FEB90B] transition-all duration-500"
            >
              <div className="md:flex">
                <motion.div 
                  className="md:w-2/5 relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                </motion.div>
                <div className="p-8 md:w-3/5">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center space-x-2 text-[#FEB90B]">
                        <Calendar className="w-5 h-5" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-[#FEB90B]">
                        <Clock className="w-5 h-5" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-[#FEB90B]">
                        <MapPin className="w-5 h-5" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-[#FEB90B]">
                        <Users className="w-5 h-5" />
                        <span>{event.attendees} Attendees</span>
                      </div>
                    </div>
                    <h3 className="text-3xl font-semibold mb-4">{event.title}</h3>
                    <p className="text-white/80 text-lg mb-6">{event.description}</p>
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(254, 185, 11, 0.5)" }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleRegister(event.title)}
                      className="bg-[#FEB90B] text-black px-8 py-3 rounded-full font-semibold text-lg"
                    >
                      Register Now
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
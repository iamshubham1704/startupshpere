import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { Rocket, Users, Code, Camera, Calendar, Share2, Pen, DollarSign, MessageCircle } from 'lucide-react';
import RegistrationModal from '../components/RegistrationModal';
import Footer from '../components/Footer';

const departments = [
  { icon: <Code />, name: 'Research & Development', members: 15 },
  { icon: <Share2 />, name: 'Marketing', members: 12 },
  { icon: <Code />, name: 'Tech and Development', members: 20 },
  { icon: <Camera />, name: 'Photography & Videography', members: 8 },
  { icon: <Calendar />, name: 'Event Management', members: 10 },
  { icon: <Rocket />, name: 'Startup Development', members: 15 },
  { icon: <Pen />, name: 'Content Creation', members: 12 },
  { icon: <MessageCircle />, name: 'Social Media Management', members: 8 },
  { icon: <DollarSign />, name: 'Monitization Strategies', members: 6 },
  { icon: <Users />, name: 'Public Relations', members: 10 }
];

const Home = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [sponsorRef, sponsorInView] = useInView({
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

  const handleDepartmentClick = (name: string) => {
    navigate(`/department/${encodeURIComponent(name)}`);
  };

  return (
    <div className="pt-20">
      <RegistrationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        type="community"
      />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3')] bg-cover bg-center"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <motion.h1 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-7xl font-bold mb-6 gradient-text"
          >
            Startup Sphere
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-white/80 max-w-3xl mx-auto mb-12"
          >
            Empowering innovation and entrepreneurship through technology and culture.
            Join us in shaping the future of startups and technology.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(254, 185, 11, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowModal(true)}
            className="bg-[#FEB90B] text-black px-12 py-4 rounded-full font-semibold text-lg transform transition-all duration-300"
          >
            Join Our Community
          </motion.button>
        </motion.div>
      </section>

      {/* Departments Section */}
      <section ref={ref} className="py-32 bg-black/90">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-center mb-24 gradient-text"
          >
            Our Departments
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {departments.map((dept) => (
              <motion.div
                key={dept.name}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(254, 185, 11, 0.2)",
                  y: -5
                }}
                onClick={() => handleDepartmentClick(dept.name)}
                className="department-card backdrop-blur-lg cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-[#FEB90B] mb-6 w-16 h-16"
                >
                  {dept.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4">{dept.name}</h3>
                <p className="text-white/60 text-lg mb-4">
                  Driving innovation and excellence in {dept.name.toLowerCase()}.
                </p>
                <div className="flex items-center text-[#FEB90B]">
                  <Users className="w-5 h-5 mr-2" />
                  <span>{dept.members} Members</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sponsor Section */}
      <section ref={sponsorRef} className="py-32 bg-black/80">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={sponsorInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-center mb-24 gradient-text"
          >
            Our Sponsor
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={sponsorInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="https://assets.iceland.co.uk/i/iceland/red_bull_energy_drink_250ml_17143_T5.jpg?$pdpzoom$"
              alt="Red Bull"
              className="w-64 h-64 object-contain mb-8"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={sponsorInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center max-w-2xl"
            >
              <h3 className="text-3xl font-bold mb-4 text-[#FEB90B]">Red Bull</h3>
              <p className="text-xl text-white/80">
                Proud sponsor of Startup Sphere, empowering innovation and giving wings to young entrepreneurs.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
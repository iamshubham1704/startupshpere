import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Mail, Phone, Award } from 'lucide-react';
import Footer from '../components/Footer';

const departmentData: Record<string, {
  description: string;
  achievements: string[];
  members: Array<{
    name: string;
    role: string;
    image: string;
  }>;
}> = {
  'Research & Development': {
    description: 'Leading innovation through cutting-edge research and development initiatives.',
    achievements: ['Best Research Paper 2023', 'Innovation Award 2024', 'Patent Filing'],
    members: [
      { name: 'Member 1', role: 'Head', image: 'https://startupspheremait.vercel.app/static/media/WhatsApp_Image_2024-09-09_at_7.06.20_PM__1_-removebg-preview.fefbe9dfd14470a8cae5.png' },
      { name: 'Member 2', role: 'Co-Head', image: 'https://startupspheremait.vercel.app/static/media/WhatsApp_Image_2024-09-09_at_7.06.20_PM__1_-removebg-preview.fefbe9dfd14470a8cae5.png' },
      { name: 'Member 3', role: 'Researcher', image: 'https://startupspheremait.vercel.app/static/media/WhatsApp_Image_2024-09-09_at_7.06.20_PM__1_-removebg-preview.fefbe9dfd14470a8cae5.png' }
    ]
  },
  'Marketing': {
    description: 'Crafting compelling campaigns and driving brand awareness.',
    achievements: ['Best Marketing Campaign 2023', 'Social Media Excellence Award'],
    members: [
      { name: 'Member 1', role: 'Marketing Head', image: 'https://startupspheremait.vercel.app/static/media/WhatsApp_Image_2024-09-09_at_7.06.20_PM__1_-removebg-preview.fefbe9dfd14470a8cae5.png' },
      { name: 'Member 2', role: 'Brand Manager', image: 'https://startupspheremait.vercel.app/static/media/WhatsApp_Image_2024-09-09_at_7.06.20_PM__1_-removebg-preview.fefbe9dfd14470a8cae5.png' }
    ]
  },
  'Tech and Development': {
    description: 'Building innovative solutions and driving technological advancement.',
    achievements: ['Tech Innovation Award 2023', 'Best Development Team 2024'],
    members: [
      { name: 'Member 1', role: 'Tech Lead', image: 'https://startupspheremait.vercel.app/static/media/WhatsApp_Image_2024-09-09_at_7.06.20_PM__1_-removebg-preview.fefbe9dfd14470a8cae5.png' },
      { name: 'Member 2', role: 'Senior Developer', image: 'https://startupspheremait.vercel.app/static/media/WhatsApp_Image_2024-09-09_at_7.06.20_PM__1_-removebg-preview.fefbe9dfd14470a8cae5.png' }
    ]
  },
  'Photography & Videography': {
    description: 'Capturing moments and creating compelling visual content.',
    achievements: ['Best Photography Award 2023', 'Video Excellence Award'],
    members: [
      { name: 'Member 1', role: 'Lead Photographer', image: 'https://startupspheremait.vercel.app/static/media/WhatsApp_Image_2024-09-09_at_7.06.20_PM__1_-removebg-preview.fefbe9dfd14470a8cae5.png' },
      { name: 'Member 2', role: 'Videographer', image: 'https://startupspheremait.vercel.app/static/media/WhatsApp_Image_2024-09-09_at_7.06.20_PM__1_-removebg-preview.fefbe9dfd14470a8cae5.png' }
    ]
  }
};

const DepartmentDetails = () => {
  const { name } = useParams();
  const department = name ? departmentData[name] || {
    description: 'Department information coming soon.',
    achievements: [],
    members: []
  } : {
    description: 'Department information coming soon.',
    achievements: [],
    members: []
  };

  return (
    <div className="pt-20 min-h-screen bg-black flex flex-col">
      <div className="container mx-auto px-4 py-16 flex-grow">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16 gradient-text"
        >
          {name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-black/50 backdrop-blur-sm rounded-xl p-8 mb-16 border border-[#FEB90B]/20"
        >
          <p className="text-xl text-white/80 leading-relaxed">{department.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-8 gradient-text">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {department.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-[#FEB90B]/20"
              >
                <Award className="text-[#FEB90B] w-8 h-8 mb-4" />
                <p className="text-lg text-white/90">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold mb-8 gradient-text">Team Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {department.members.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-[#FEB90B]/20"
              >
                <div className="aspect-square overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-[#FEB90B] mb-4">{member.role}</p>
                  <div className="flex space-x-4">
                    <Mail className="w-5 h-5 text-white/60 hover:text-[#FEB90B] cursor-pointer" />
                    <Phone className="w-5 h-5 text-white/60 hover:text-[#FEB90B] cursor-pointer" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default DepartmentDetails;
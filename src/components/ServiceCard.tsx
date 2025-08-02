import React from 'react';
// import { ServiceCardProps } from '../types/index.js';
export interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/20">
    <div className="text-5xl mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);


export default ServiceCard
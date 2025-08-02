import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: "🛡️",
      title: "Safety Nets",
      description: "High-quality safety nets for balconies, terraces, and construction sites. Durable materials with professional installation."
    },
    {
      icon: "🏠",
      title: "Window Grills",
      description: "Custom-designed window grills for enhanced security and aesthetics. Various designs and finishes available."
    },
    {
      icon: "🔧",
      title: "Installation & Maintenance",
      description: "Professional installation services with ongoing maintenance support. Quality guaranteed work."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16 relative">
          Our Services
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection
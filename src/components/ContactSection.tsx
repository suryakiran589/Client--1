import React from 'react';
import ContactItem from './ContactItem';
import ContactForm from './ContactForm';

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

interface ContactSectionProps {
  formData: ContactFormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: () => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ formData, handleInputChange, handleSubmit }) => {
  const contactInfo = [
    { icon: "📱", title: "Phone", content: "8106667600" },
    { icon: "✉️", title: "Email", content: "" },
    { icon: "📍", title: "Address", content: "Hyderabad | Bangalore | Pune | Vijayawada | Vizag" },
    { icon: "🕐", title: "Working Hours", content: "Mon-Sat: 9:00 AM - 6:00 PM" }
  ];

  return (
    <section id="contact" className="py-20 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16 relative">
          Contact Us
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          {/* Contact Info */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-8 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            
            {contactInfo.map((item, index) => (
              <ContactItem
                key={index}
                icon={item.icon}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>

          {/* Contact Form */}
          <ContactForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection
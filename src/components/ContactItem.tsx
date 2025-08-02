import React from 'react';
export interface ContactItemProps {
  icon: string;
  title: string;
  content: string;
}


const ContactItem: React.FC<ContactItemProps> = ({ icon, title, content }) => (
  <div className="flex items-center mb-6 hover:translate-x-2 transition-transform duration-300">
    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 text-xl">
      {icon}
    </div>
    <div>
      <strong className="block text-lg">{title}:</strong>
      <span className="opacity-90">{content}</span>
    </div>
  </div>
);

export default ContactItem
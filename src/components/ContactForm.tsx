import React from 'react';
export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

interface ContactFormProps {
  formData: ContactFormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ formData, handleInputChange, handleSubmit }) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
      <h3 className="text-2xl font-bold mb-8 text-gray-800">Send Message</h3>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300 bg-white/80"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300 bg-white/80"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300 bg-white/80"
          />
        </div>
        
        <div>
          <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
            Service Required
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300 bg-white/80"
          >
            <option value="Safety Nets">Safety Nets</option>
            <option value="Window Grills">Window Grills</option>
            <option value="Both">Both</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            placeholder="Tell us about your requirements..."
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-300 bg-white/80 resize-none"
          />
        </div>
        
        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-bold text-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactForm
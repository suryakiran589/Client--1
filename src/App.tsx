import { useEffect, useState } from 'react'

import './App.css'
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}



interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

function App() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    service: 'Safety Nets',
    message: ''
  });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    alert('Thank you for your message! We will contact you soon.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: 'Safety Nets',
      message: ''
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };
  return(
    <>
     <Header 
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />
      <HeroSection scrollToSection = {scrollToSection}/>
      <ServicesSection />   
      <ContactSection
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </>
  )

}

export default App

import React from 'react';

interface HeroSectionProps {
  scrollToSection: (section: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    < >
    <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800/90 via-purple-400/90 to-indigo-200/90"></div>
      <div className="absolute  w-full h-full bg-no-repeat bg-cover bg-center bg-[url(https://www.balconysafetynetbangalore.co.in/wp-content/uploads/2023/01/durga-children-safety-nets-in-bangalore-chennai-hyderabad-pune-e1688736779270.jpg)] opacity-20"></div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse">
          Premium Safety Nets & Grills
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-bounce">
          Protecting your family with quality safety solutions and custom grills
        </p>
        <button
          onClick={() => scrollToSection('contact')}
          className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-pulse hover:animate-none"
          >
          Get Free Quote
        </button>
      </div>
    </section>
    </>
  );
};

export default HeroSection
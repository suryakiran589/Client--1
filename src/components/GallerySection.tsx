import React from 'react';

interface GallerySectionProps {
  images?: string[];
  altText?: string;
}

const GallerySection: React.FC<GallerySectionProps> = ({ 
  images = [], 
  altText = "Safety nets and grills work" 
}) => {
  // If no images provided, show placeholders
  const displayItems = images.length > 0 ? images : Array.from({ length: 6 }, (_, i) => `placeholder-${i}`);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-blue-50/50 to-purple-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16 relative">
          Our Work
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-16">
          {displayItems.map((item, index) => (
            <div
              key={index}
              className="aspect-square rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              {images.length > 0 ? (
                <img 
                  src={item}
                  alt={`${altText} ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500 font-medium">
                  [Photo {index + 1}]
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;


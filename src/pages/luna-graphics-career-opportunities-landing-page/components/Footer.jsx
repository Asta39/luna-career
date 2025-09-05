import React from 'react';
import Icon from '../../../components/AppIcon';

// The logo does NOT need to be imported because it is in the 'public' folder.

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            
            {/* The Icon has been replaced with your custom logo */}
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <img 
                src="/assets/luna-logo2.png" 
                alt="Luna Graphics Logo" 
                className="w-6 h-6" // Sized to fit nicely inside the container
              />
            </div>

            <div>
              <h3 className="font-bold text-xl">Luna Graphics</h3>
              <p className="text-white/80 text-sm">Careers Portal</p>
            </div>
          </div>
          
          <p className="text-white/80 text-sm mb-6 max-w-md mx-auto">
            Join Nairobi's premier print shop where creativity meets career growth.
          </p>
          
          <div className="flex justify-center space-x-6 text-sm">
            <div className="flex items-center">
              <Icon name="MapPin" size={16} color="white" className="mr-2" />
              <span className="text-white/80">Kweria road, Nairobi CBD</span>
            </div>
            <div className="flex items-center">
              <Icon name="Phone" size={16} color="white" className="mr-2" />
              <span className="text-white/80">+254 791 159 618</span>
            </div>
            <div className="flex items-center">
              <Icon name="Mail" size={16} color="white" className="mr-2" />
              <span className="text-white/80">info.lunagraphics472@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center">
          <p className="text-white/80 text-sm">
            © {currentYear} Luna Graphics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
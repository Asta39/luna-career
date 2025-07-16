import React from 'react';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <Icon name="Printer" size={24} color="white" />
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
              <span className="text-white/80">Kimathi Street, Nairobi CBD</span>
            </div>
            <div className="flex items-center">
              <Icon name="Phone" size={16} color="white" className="mr-2" />
              <span className="text-white/80">+254 712 345 678</span>
            </div>
            <div className="flex items-center">
              <Icon name="Mail" size={16} color="white" className="mr-2" />
              <span className="text-white/80">careers@lunagraphics.co.ke</span>
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
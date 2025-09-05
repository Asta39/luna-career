import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

// Step 1: REMOVE the import statement for the logo. It's not needed for files in the 'public' directory.
// import companyLogo from '../../assets/luna-logo2.png'; 

const Header = ({ onGeneralApply }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/luna-graphics-career-opportunities-landing-page" 
            className="flex items-center space-x-2 hover:opacity-80 transition-smooth"
            onClick={closeMobileMenu}
          >
            {/* Step 2: Use a direct path string to the logo in the 'public' folder */}
            <img 
              src="/assets/luna-logo2.png" 
              alt="Luna Graphics Logo" 
              className="w-8 h-8" 
            />

            <div className="flex flex-col">
              <span className="font-inter font-bold text-lg text-foreground leading-tight">
                Luna Graphics
              </span>
              <span className="font-inter font-medium text-xs text-muted-foreground leading-tight">
                Careers
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="https://lunagraphics.co.ke/" 
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter font-medium text-foreground hover:text-primary transition-smooth"
            >
              Main Website
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="default" 
              size="sm"
              iconName="UserPlus"
              iconPosition="left"
              onClick={onGeneralApply}
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-foreground hover:text-primary hover:bg-muted transition-smooth"
            aria-label="Toggle mobile menu"
          >
            <Icon 
              name={isMobileMenuOpen ? "X" : "Menu"} 
              size={24} 
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="https://lunagraphics.co.ke/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 rounded-md font-inter font-medium text-foreground hover:text-primary hover:bg-muted transition-smooth"
                onClick={closeMobileMenu}
              >
                Main Website
              </a>
              
              {/* Mobile CTAs */}
              <div className="px-3 pt-4 pb-2 space-y-2">
                <Button 
                  variant="default" 
                  size="sm" 
                  fullWidth
                  iconName="UserPlus"
                  iconPosition="left"
                  onClick={() => {
                    onGeneralApply();
                    closeMobileMenu();
                  }}
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
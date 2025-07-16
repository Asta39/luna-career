import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = ({ onViewPositions, onLearnMore }) => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-secondary to-accent min-h-[600px] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-white rounded-lg rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Icon name="Clock" size={16} color="white" className="mr-2" />
              <span className="text-white text-sm font-medium">Now Hiring - 6 Positions Available</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Join Nairobi's Premier Print Shop
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Where Creativity Meets Career Growth
            </p>

            {/* Description */}
            <p className="text-lg text-white/80 mb-10 max-w-2xl">
              Build your career with Luna Graphics, Nairobi's leading print shop. We're expanding our team with exciting opportunities across creative, technical, and business roles.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="default"
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4"
                iconName="Briefcase"
                iconPosition="left"
                onClick={onViewPositions}
              >
                View Open Positions
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 font-semibold px-8 py-4"
                iconName="Info"
                iconPosition="left"
                onClick={onLearnMore}
              >
                Learn About Luna Graphics
              </Button>
            </div>

            {/* Trust Elements */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 mt-12 text-white/80">
              <div className="flex items-center">
                <Icon name="Calendar" size={20} color="white" className="mr-2" />
                <span className="text-sm">Established 2015</span>
              </div>
              <div className="flex items-center">
                <Icon name="Users" size={20} color="white" className="mr-2" />
                <span className="text-sm">500+ Happy Clients</span>
              </div>
              <div className="flex items-center">
                <Icon name="Award" size={20} color="white" className="mr-2" />
                <span className="text-sm">Industry Leader</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <Icon name="Printer" size={32} color="white" className="mx-auto mb-2" />
                  <p className="text-white text-sm font-medium">Premium Printing</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <Icon name="Palette" size={32} color="white" className="mx-auto mb-2" />
                  <p className="text-white text-sm font-medium">Creative Design</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <Icon name="Users" size={32} color="white" className="mx-auto mb-2" />
                  <p className="text-white text-sm font-medium">Team Growth</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <Icon name="TrendingUp" size={32} color="white" className="mx-auto mb-2" />
                  <p className="text-white text-sm font-medium">Career Success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
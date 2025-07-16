import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import OpenPositionsGrid from './components/OpenPositionsGrid';
import CompanyValuesSection from './components/CompanyValuesSection';
import ApplicationRequirementsSection from './components/ApplicationRequirementsSection';
import Footer from './components/Footer';
import ApplicationForm from './components/ApplicationForm';
import ApplicationSuccess from './components/ApplicationSuccess';

const LunaGraphicsCareersLandingPage = () => {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [applicationData, setApplicationData] = useState(null);

  const handleViewPositions = () => {
    const positionsSection = document.getElementById('positions');
    if (positionsSection) {
      positionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyClick = (position) => {
    setSelectedPosition(position);
    setShowApplicationForm(true);
  };

  const handleGeneralApplyClick = () => {
    setSelectedPosition(null);
    setShowApplicationForm(true);
  };

  const handleCloseApplicationForm = () => {
    setShowApplicationForm(false);
    setSelectedPosition(null);
  };

  const handleApplicationSuccess = (data) => {
    setApplicationData(data);
    setShowApplicationForm(false);
    setShowSuccessModal(true);
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    setApplicationData(null);
  };

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header onGeneralApply={handleGeneralApplyClick} />
      
      <main>
        {/* Hero Section */}
        <HeroSection 
          onViewPositions={handleViewPositions}
          onLearnMore={handleLearnMore}
        />

        {/* Open Positions Grid */}
        <OpenPositionsGrid onApplyClick={handleApplyClick} />

        {/* Company Values */}
        <CompanyValuesSection />

        {/* Application Requirements */}
        <ApplicationRequirementsSection />
      </main>

      <Footer />

      {/* Application Form Modal */}
      {showApplicationForm && (
        <ApplicationForm
          selectedPosition={selectedPosition}
          onClose={handleCloseApplicationForm}
          onSuccess={handleApplicationSuccess}
        />
      )}

      {/* Success Modal */}
      {showSuccessModal && applicationData && (
        <ApplicationSuccess
          applicationData={applicationData}
          onClose={handleCloseSuccessModal}
        />
      )}
    </div>
  );
};

export default LunaGraphicsCareersLandingPage;
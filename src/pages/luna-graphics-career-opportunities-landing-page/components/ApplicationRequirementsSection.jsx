import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ApplicationRequirementsSection = () => {
  const [activePosition, setActivePosition] = useState('graphic-designer');

  const positionRequirements = {
    'graphic-designer': {
      title: 'Graphic Designer',
      icon: 'Palette',
      education: {
        minimum: 'Diploma in Graphic Design, Visual Arts, or related field',
        preferred: 'Bachelor\'s degree in Graphic Design or Fine Arts',
        alternatives: 'Equivalent professional experience with strong portfolio'
      },
      experience: {
        minimum: '2-4 years of professional graphic design experience',
        preferred: 'Experience in print design and production processes',
        specific: [
          'Print media design (brochures, flyers, banners)',
          'Brand identity development',
          'Client presentation experience',
          'Production file preparation'
        ]
      },
      skills: {
        technical: [
          'Adobe Creative Suite (Photoshop, Illustrator, InDesign)',
          'Typography and layout principles',
          'Color theory and print production',
          'File preparation for various print formats'
        ],
        soft: [
          'Creative problem-solving abilities',
          'Strong attention to detail',
          'Excellent communication skills',
          'Ability to work under tight deadlines'
        ]
      },
      portfolio: 'Strong portfolio showcasing print design work and creative projects'
    },
    'designer-intern': {
      title: 'Graphics Designer Intern',
      icon: 'GraduationCap',
      education: {
        minimum: 'Currently pursuing or completed Diploma in Graphic Design',
        preferred: 'Ongoing studies in Design, Visual Arts, or related field',
        alternatives: 'Self-taught with demonstrable design skills'
      },
      experience: {
        minimum: '0-1 years or fresh graduate',
        preferred: 'Some freelance or project-based design experience',
        specific: [
          'Basic understanding of design principles',
          'Familiarity with design software',
          'Eagerness to learn print production',
          'Academic or personal design projects'
        ]
      },
      skills: {
        technical: [
          'Basic knowledge of Adobe Creative Suite',
          'Understanding of design fundamentals',
          'Willingness to learn print processes',
          'Computer literacy and file management'
        ],
        soft: [
          'Strong desire to learn and grow',
          'Good communication skills',
          'Team collaboration abilities',
          'Positive attitude and work ethic'
        ]
      },
      portfolio: 'Portfolio of academic work, personal projects, or freelance designs'
    },
    'receptionist': {
      title: 'Receptionist',
      icon: 'Phone',
      education: {
        minimum: 'Certificate in Business Administration or related field',
        preferred: 'Diploma in Business, Communications, or Customer Service',
        alternatives: 'High school certificate with relevant experience'
      },
      experience: {
        minimum: '1-2 years in customer service or administrative role',
        preferred: 'Reception or front desk experience',
        specific: [
          'Customer service experience',
          'Phone handling and communication',
          'Administrative and filing tasks',
          'Appointment scheduling systems'
        ]
      },
      skills: {
        technical: [
          'Computer literacy (MS Office, email)',
          'Phone system operation',
          'Basic accounting/invoicing knowledge',
          'Filing and record management'
        ],
        soft: [
          'Excellent verbal communication',
          'Professional appearance and demeanor',
          'Multitasking abilities',
          'Patience and problem-solving skills'
        ]
      },
      portfolio: 'Professional references from previous employers or supervisors'
    },
    'sales-rep': {
      title: 'Sales Representative',
      icon: 'TrendingUp',
      education: {
        minimum: 'Diploma in Sales, Marketing, or Business Administration',
        preferred: 'Bachelor\'s degree in Business, Marketing, or related field',
        alternatives: 'Proven sales track record with relevant experience'
      },
      experience: {
        minimum: '2-3 years in sales or business development',
        preferred: 'B2B sales experience, preferably in printing or creative services',
        specific: [
          'Client relationship management',
          'Sales target achievement',
          'Presentation and negotiation skills',
          'Market research and lead generation'
        ]
      },
      skills: {
        technical: [
          'CRM software proficiency',
          'Sales reporting and analytics',
          'Presentation software (PowerPoint, etc.)',
          'Basic understanding of printing services'
        ],
        soft: [
          'Excellent persuasion and negotiation skills',
          'Strong interpersonal abilities',
          'Goal-oriented mindset',
          'Resilience and persistence'
        ]
      },
      portfolio: 'Sales performance records and client testimonials'
    },
    'machine-operator': {
      title: 'Machine Operator',
      icon: 'Settings',
      education: {
        minimum: 'Technical certificate in Machine Operation or related field',
        preferred: 'Diploma in Mechanical Engineering or Industrial Technology',
        alternatives: 'Apprenticeship or on-the-job training in machinery'
      },
      experience: {
        minimum: '1-3 years operating industrial machinery',
        preferred: 'Experience with printing equipment and production processes',
        specific: [
          'Machine setup and calibration',
          'Quality control procedures',
          'Maintenance and troubleshooting',
          'Safety protocol adherence'
        ]
      },
      skills: {
        technical: [
          'Mechanical aptitude and troubleshooting',
          'Understanding of printing processes',
          'Quality control and inspection',
          'Basic maintenance and repair skills'
        ],
        soft: [
          'Strong attention to detail',
          'Safety consciousness',
          'Physical stamina and dexterity',
          'Team collaboration skills'
        ]
      },
      portfolio: 'Certifications in machinery operation and safety training'
    },
    'digital-marketing': {
      title: 'Digital Marketing Specialist',
      icon: 'Smartphone',
      education: {
        minimum: 'Diploma in Marketing, Communications, or related field',
        preferred: 'Bachelor\'s degree in Marketing, Digital Media, or Business',
        alternatives: 'Digital marketing certifications with practical experience'
      },
      experience: {
        minimum: '2-4 years in digital marketing or online advertising',
        preferred: 'Experience with B2B marketing and creative industry knowledge',
        specific: [
          'Social media management and advertising',
          'Content creation and copywriting',
          'SEO and SEM campaign management',
          'Analytics and performance tracking'
        ]
      },
      skills: {
        technical: [
          'Google Ads and Facebook Ads platforms',
          'Social media management tools',
          'Analytics tools (Google Analytics, etc.)',
          'Content management systems'
        ],
        soft: [
          'Creative thinking and content creation',
          'Analytical and data-driven mindset',
          'Excellent written communication',
          'Adaptability to digital trends'
        ]
      },
      portfolio: 'Portfolio of successful campaigns and performance metrics'
    }
  };

  const positions = [
    { id: 'graphic-designer', label: 'Graphic Designer' },
    { id: 'designer-intern', label: 'Designer Intern' },
    { id: 'receptionist', label: 'Receptionist' },
    { id: 'sales-rep', label: 'Sales Representative' },
    { id: 'machine-operator', label: 'Machine Operator' },
    { id: 'digital-marketing', label: 'Digital Marketing' }
  ];

  const currentPosition = positionRequirements[activePosition];

  return (
    <section id="requirements" className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Application Requirements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understand what we're looking for in each role. Review the specific requirements for your position of interest to ensure you're well-prepared for your application.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Position Selector */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl border border-border p-4">
              <h3 className="font-semibold text-foreground mb-4">Select Position</h3>
              <div className="space-y-2">
                {positions.map((position) => (
                  <button
                    key={position.id}
                    onClick={() => setActivePosition(position.id)}
                    className={`w-full text-left p-3 rounded-lg text-sm transition-smooth ${
                      activePosition === position.id
                        ? 'bg-primary text-white' :'bg-muted text-foreground hover:bg-muted-foreground/10'
                    }`}
                  >
                    {position.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Requirements Details */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-xl border border-border p-8">
              {/* Position Header */}
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                  <Icon name={currentPosition.icon} size={32} color="var(--color-primary)" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {currentPosition.title}
                  </h3>
                  <p className="text-muted-foreground">
                    Requirements and qualifications
                  </p>
                </div>
              </div>

              {/* Education Requirements */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Icon name="GraduationCap" size={20} color="var(--color-primary)" className="mr-2" />
                  Education Requirements
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Icon name="Check" size={16} color="var(--color-success)" className="mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-foreground">Minimum: </span>
                      <span className="text-muted-foreground">{currentPosition.education.minimum}</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Star" size={16} color="var(--color-warning)" className="mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-foreground">Preferred: </span>
                      <span className="text-muted-foreground">{currentPosition.education.preferred}</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Info" size={16} color="var(--color-primary)" className="mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-foreground">Alternative: </span>
                      <span className="text-muted-foreground">{currentPosition.education.alternatives}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Requirements */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Icon name="Briefcase" size={20} color="var(--color-primary)" className="mr-2" />
                  Experience Requirements
                </h4>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start">
                    <Icon name="Clock" size={16} color="var(--color-success)" className="mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-foreground">Minimum: </span>
                      <span className="text-muted-foreground">{currentPosition.experience.minimum}</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon name="TrendingUp" size={16} color="var(--color-warning)" className="mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-foreground">Preferred: </span>
                      <span className="text-muted-foreground">{currentPosition.experience.preferred}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="font-medium text-foreground mb-2 block">Specific Experience Areas:</span>
                  <div className="grid md:grid-cols-2 gap-2">
                    {currentPosition.experience.specific.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <Icon name="ArrowRight" size={14} color="var(--color-muted-foreground)" className="mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Skills Requirements */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Icon name="Zap" size={20} color="var(--color-primary)" className="mr-2" />
                  Required Skills
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-foreground mb-3">Technical Skills</h5>
                    <div className="space-y-2">
                      {currentPosition.skills.technical.map((skill, index) => (
                        <div key={index} className="flex items-start">
                          <Icon name="Code" size={14} color="var(--color-primary)" className="mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-foreground mb-3">Soft Skills</h5>
                    <div className="space-y-2">
                      {currentPosition.skills.soft.map((skill, index) => (
                        <div key={index} className="flex items-start">
                          <Icon name="Heart" size={14} color="var(--color-success)" className="mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Portfolio/Documentation */}
              <div className="bg-muted rounded-lg p-6">
                <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                  <Icon name="FileText" size={20} color="var(--color-primary)" className="mr-2" />
                  Portfolio & Documentation
                </h4>
                <p className="text-muted-foreground">{currentPosition.portfolio}</p>
              </div>
            </div>
          </div>
        </div>

        {/* General Application Tips */}
        <div className="mt-12 bg-card rounded-xl border border-border p-8">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            General Application Tips
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="FileCheck" size={24} color="var(--color-primary)" />
              </div>
              <h4 className="font-medium text-foreground mb-2">Complete Application</h4>
              <p className="text-sm text-muted-foreground">
                Fill out all required fields and upload all requested documents for the best chance of success.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Target" size={24} color="var(--color-success)" />
              </div>
              <h4 className="font-medium text-foreground mb-2">Tailor Your Application</h4>
              <p className="text-sm text-muted-foreground">
                Customize your CV and cover letter to highlight relevant experience for the specific position.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={24} color="var(--color-warning)" />
              </div>
              <h4 className="font-medium text-foreground mb-2">Apply Early</h4>
              <p className="text-sm text-muted-foreground">
                Submit your application as soon as possible. We review applications on a rolling basis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationRequirementsSection;
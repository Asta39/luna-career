import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const OpenPositionsGrid = ({ onApplyClick }) => {
  const [selectedPosition, setSelectedPosition] = useState(null);

  const positions = [
    {
      id: 1,
      title: "Graphic Designer",
      icon: "Palette",
      experience: "2-4 years",
      type: "Full-time",
      deadline: "2028-08-15",
      responsibilities: [
        "Create visual concepts and designs for print materials",
        "Collaborate with clients to understand design requirements",
        "Prepare artwork for printing production"
      ],
      requirements: [
        "Diploma/Degree in Graphic Design or related field",
        "Proficiency in Adobe Creative Suite",
        "Strong portfolio of print design work"
      ]
    },
    {
      id: 2,
      title: "Graphics Designer Intern",
      icon: "GraduationCap",
      experience: "0-1 years",
      type: "Internship",
      deadline: "2028-08-10",
      responsibilities: [
        "Assist senior designers with project development",
        "Learn printing processes and quality standards",
        "Support client presentation preparations"
      ],
      requirements: [
        "Currently pursuing or completed Diploma in Design",
        "Basic knowledge of design software",
        "Eagerness to learn and grow"
      ]
    },
    {
      id: 3,
      title: "Receptionist",
      icon: "Phone",
      experience: "1-2 years",
      type: "Full-time",
      deadline: "2028-08-20",
      responsibilities: [
        "Manage front desk operations and client reception",
        "Handle phone calls and appointment scheduling",
        "Maintain office organization and filing systems"
      ],
      requirements: [
        "Certificate/Diploma in Business or related field",
        "Excellent communication skills",
        "Professional appearance and demeanor"
      ]
    },
    {
      id: 4,
      title: "Sales Representative",
      icon: "TrendingUp",
      experience: "2-3 years",
      type: "Full-time",
      deadline: "2028-08-25",
      responsibilities: [
        "Develop new client relationships and maintain existing ones",
        "Present printing solutions to potential customers",
        "Achieve monthly sales targets and KPIs"
      ],
      requirements: [
        "Diploma/Degree in Sales, Marketing or Business",
        "Proven sales track record",
        "Strong negotiation and presentation skills"
      ]
    },
    {
      id: 5,
      title: "Machine Operator",
      icon: "Settings",
      experience: "1-3 years",
      type: "Full-time",
      deadline: "2028-08-18",
      responsibilities: [
        "Operate and maintain printing equipment",
        "Ensure quality control throughout production",
        "Perform routine maintenance and troubleshooting"
      ],
      requirements: [
        "Technical certificate in Machine Operation",
        "Experience with printing machinery",
        "Attention to detail and safety protocols"
      ]
    },
    {
      id: 6,
      title: "Digital Marketing Specialist",
      icon: "Smartphone",
      experience: "2-4 years",
      type: "Full-time",
      deadline: "2028-08-22",
      responsibilities: [
        "Manage social media accounts and online presence",
        "Create digital marketing campaigns",
        "Analyze performance metrics and optimize strategies"
      ],
      requirements: [
        "Degree in Marketing, Communications or related field",
        "Experience with digital marketing tools",
        "Strong analytical and creative skills"
      ]
    }
  ];

  const calculateDaysLeft = (deadline) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  return (
    <section id="positions" className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Open Positions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover exciting career opportunities across various departments. Join our growing team and build your future with Luna Graphics.
          </p>
        </div>

        {/* Positions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {positions.map((position) => {
            const daysLeft = calculateDaysLeft(position.deadline);
            
            return (
              <div
                key={position.id}
                className="bg-card rounded-xl border border-border p-6 hover:shadow-card transition-smooth cursor-pointer"
                onClick={() => setSelectedPosition(selectedPosition === position.id ? null : position.id)}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                      <Icon name={position.icon} size={24} color="var(--color-primary)" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">{position.title}</h3>
                      <span className="text-sm text-muted-foreground">{position.type}</span>
                    </div>
                  </div>
                  <Icon 
                    name={selectedPosition === position.id ? "ChevronUp" : "ChevronDown"} 
                    size={20} 
                    color="var(--color-muted-foreground)" 
                  />
                </div>

                {/* Basic Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <Icon name="Clock" size={16} color="var(--color-muted-foreground)" className="mr-2" />
                    <span className="text-muted-foreground">{position.experience} experience</span>
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedPosition === position.id && (
                  <div className="border-t border-border pt-4 space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Key Responsibilities:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {position.responsibilities.map((resp, index) => (
                          <li key={index} className="flex items-start">
                            <Icon name="Check" size={14} color="var(--color-success)" className="mr-2 mt-0.5 flex-shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Requirements:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {position.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <Icon name="Star" size={14} color="var(--color-warning)" className="mr-2 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Apply Button */}
                <div className="mt-6">
                  <Button
                    variant={daysLeft > 0 ? "default" : "outline"}
                    size="sm"
                    fullWidth
                    disabled={daysLeft === 0}
                    iconName={daysLeft > 0 ? "Send" : "X"}
                    iconPosition="left"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (daysLeft > 0) {
                        onApplyClick(position);
                      }
                    }}
                  >
                    {daysLeft > 0 ? 'Apply Now' : 'Application Closed'}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

       {/* Bottom CTA */}
<div className="text-center mt-12">
  <p className="text-muted-foreground mb-4">
    Don't see the perfect role? We're always looking for talented individuals.
  </p>
  <Button
    variant="outline"
    iconName="Mail"
    iconPosition="left"
    onClick={() => {
      // 1. Define the subject and body for the email
      const subject = "Spontaneous Application - CV Submission";
      const body = "Hello Luna Graphics Team,\n\nI am writing to express my interest in a potential role at your company. Please find my CV attached for your consideration.\n\nI look forward to hearing from you.\n\nBest regards,\n[Your Name]";

      // 2. Encode the subject and body to handle special characters and spaces
      const encodedSubject = encodeURIComponent(subject);
      const encodedBody = encodeURIComponent(body);

      // 3. Construct the full mailto link and trigger it
      const mailtoLink = `mailto:info.lunagraphics@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
      window.location.href = mailtoLink;
    }}
  >
    Send Us Your CV
  </Button>
</div>
      </div>
    </section>
  );
};

export default OpenPositionsGrid;
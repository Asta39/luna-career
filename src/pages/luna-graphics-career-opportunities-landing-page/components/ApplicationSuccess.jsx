import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ApplicationSuccess = ({ applicationData, onClose }) => {
  const { referenceNumber, position, applicantName, email } = applicationData;

  const nextSteps = [
    {
      step: 1,
      title: "Application Review",
      description: "Our HR team will review your application within 3-5 business days",
      timeline: "Within 5 days",
      icon: "FileText"
    },
    {
      step: 2,
      title: "Initial Screening",
      description: "Qualified candidates will be contacted for a phone/video screening",
      timeline: "5-7 days",
      icon: "Phone"
    },
    {
      step: 3,
      title: "In-Person Interview",
      description: "Final candidates will be invited for an in-person interview at our office",
      timeline: "1-2 weeks",
      icon: "Users"
    },
    {
      step: 4,
      title: "Decision & Offer",
      description: "Successful candidates will receive a job offer with terms and conditions",
      timeline: "2-3 weeks",
      icon: "CheckCircle"
    }
  ];

  const interviewTips = [
    "Research Luna Graphics\' services and recent projects",
    "Prepare examples of your relevant work experience",
    "Bring printed copies of your portfolio if applicable",
    "Dress professionally and arrive 10 minutes early",
    "Prepare questions about the role and company culture"
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Success Header */}
        <div className="text-center p-8 border-b border-border">
          <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="CheckCircle" size={40} color="var(--color-success)" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Application Submitted Successfully!
          </h2>
          <p className="text-muted-foreground">
            Thank you for your interest in joining Luna Graphics. We've received your application for the {position} position.
          </p>
        </div>

        {/* Application Details */}
        <div className="p-6 border-b border-border">
          <div className="bg-muted rounded-lg p-4">
            <h3 className="font-semibold text-foreground mb-3">Application Details</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Reference Number:</span>
                <p className="font-mono font-medium text-primary">{referenceNumber}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Position:</span>
                <p className="font-medium text-foreground">{position}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Applicant:</span>
                <p className="font-medium text-foreground">{applicantName}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Email:</span>
                <p className="font-medium text-foreground">{email}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <div className="flex items-start">
              <Icon name="Info" size={20} color="var(--color-primary)" className="mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-foreground">
                  <strong>Important:</strong> Please save your reference number <strong>{referenceNumber}</strong> for future correspondence. 
                  A confirmation email has been sent to {email}.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="p-6 border-b border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">What Happens Next?</h3>
          <div className="space-y-4">
            {nextSteps.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Icon name={step.icon} size={20} color="var(--color-primary)" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-foreground">
                      Step {step.step}: {step.title}
                    </h4>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                      {step.timeline}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interview Preparation */}
        <div className="p-6 border-b border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Interview Preparation Tips</h3>
          <div className="space-y-3">
            {interviewTips.map((tip, index) => (
              <div key={index} className="flex items-start">
                <Icon name="Lightbulb" size={16} color="var(--color-warning)" className="mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Culture Video Access */}
        <div className="p-6 border-b border-border">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <Icon name="Play" size={24} color="var(--color-primary)" className="mr-3" />
              <h3 className="font-semibold text-foreground">Exclusive: Company Culture Video</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Get an inside look at life at Luna Graphics. Watch our team in action and learn about our work environment.
            </p>
            <Button
              variant="outline"
              size="sm"
              iconName="ExternalLink"
              iconPosition="right"
              onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}
            >
              Watch Company Video
            </Button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="p-6 border-b border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Need Help?</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <Icon name="Mail" size={20} color="var(--color-primary)" className="mr-3" />
              <div>
                <p className="text-sm font-medium text-foreground">Email Support</p>
                <p className="text-sm text-muted-foreground">careers@lunagraphics.co.ke</p>
              </div>
            </div>
            <div className="flex items-center">
              <Icon name="Phone" size={20} color="var(--color-primary)" className="mr-3" />
              <div>
                <p className="text-sm font-medium text-foreground">Phone Support</p>
                <p className="text-sm text-muted-foreground">+254 712 345 678</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between p-6">
          <Button
            variant="outline"
            iconName="Download"
            iconPosition="left"
            onClick={() => {
              const content = `Application Reference: ${referenceNumber}\nPosition: ${position}\nApplicant: ${applicantName}\nEmail: ${email}\nSubmitted: ${new Date().toLocaleDateString()}`;
              const blob = new Blob([content], { type: 'text/plain' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `Luna_Graphics_Application_${referenceNumber}.txt`;
              a.click();
              URL.revokeObjectURL(url);
            }}
          >
            Download Receipt
          </Button>
          
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              iconName="Share2"
              iconPosition="left"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'Luna Graphics Application Submitted',
                    text: `I just applied for ${position} at Luna Graphics! Reference: ${referenceNumber}`,
                    url: window.location.href
                  });
                }
              }}
            >
              Share
            </Button>
            <Button
              variant="default"
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationSuccess;
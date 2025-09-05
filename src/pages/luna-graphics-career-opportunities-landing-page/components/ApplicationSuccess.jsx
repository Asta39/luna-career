import React, { useState } from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

// Share Modal Sub-Component (No changes here)
const ShareModal = ({ shareText, shareUrl, onClose }) => {
  const [copied, setCopied] = useState(false);

  const socialLinks = {
    linkedIn: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent('Application Submitted!')}&summary=${encodeURIComponent(shareText)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[60]" onClick={onClose}>
      <div className="bg-card rounded-xl max-w-md w-full p-6 m-4" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-foreground">Share Your Success</h3>
          <Button variant="ghost" size="icon" onClick={onClose}><Icon name="X" size={20} /></Button>
        </div>
        <p className="text-muted-foreground mb-4 text-sm">Let your network know about your application to Luna Graphics.</p>
        
        <div className="flex items-center space-x-2 mb-4">
          <input type="text" readOnly value={shareUrl} className="w-full bg-muted border border-border rounded-md px-3 py-2 text-sm text-muted-foreground focus:outline-none" />
          <Button variant="outline" onClick={handleCopy}>
            {copied ? 'Copied!' : 'Copy'}
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-3">
            <a href={socialLinks.linkedIn} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-3 bg-muted hover:bg-border rounded-lg transition-colors"><Icon name="Linkedin" size={20} className="mr-2"/> LinkedIn</a>
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-3 bg-muted hover:bg-border rounded-lg transition-colors"><Icon name="Twitter" size={20} className="mr-2"/> Twitter (X)</a>
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-3 bg-muted hover:bg-border rounded-lg transition-colors"><Icon name="Facebook" size={20} className="mr-2"/> Facebook</a>
            <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-3 bg-muted hover:bg-border rounded-lg transition-colors"><Icon name="MessageCircle" size={20} className="mr-2"/> WhatsApp</a>
        </div>
      </div>
    </div>
  );
};


const ApplicationSuccess = ({ applicationData, onClose }) => {
  const { referenceNumber, position, applicantName, email } = applicationData;
  const [showShareModal, setShowShareModal] = useState(false);

  const nextSteps = [
    { step: 1, title: "Application Review", description: "Our HR team will review your application within 3-5 business days", timeline: "Within 5 days", icon: "FileText" },
    { step: 2, title: "Initial Screening", description: "Qualified candidates will be contacted for a phone/video screening", timeline: "5-7 days", icon: "Phone" },
    { step: 3, title: "In-Person Interview", description: "Final candidates will be invited for an in-person interview at our office", timeline: "1-2 weeks", icon: "Users" },
    { step: 4, title: "Decision & Offer", description: "Successful candidates will receive a job offer with terms and conditions", timeline: "2-3 weeks", icon: "CheckCircle" }
  ];

  const interviewTips = [
    "Research Luna Graphics' services and recent projects",
    "Prepare examples of your relevant work experience",
    "Bring printed copies of your portfolio if applicable",
    "Dress professionally and arrive 10 minutes early",
    "Prepare questions about the role and company culture"
  ];

  const handleDownloadPdf = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.text("Luna Graphics", 105, 20, { align: 'center' });
    doc.setFontSize(16);
    doc.setFont('helvetica', 'normal');
    doc.text("Application Receipt", 105, 30, { align: 'center' });

    const tableData = [
      ['Reference Number', referenceNumber],
      ['Applicant Name', applicantName],
      ['Email Address', email],
      ['Position Applied For', position],
      ['Date Submitted', new Date().toLocaleDateString('en-GB')]
    ];
    
    autoTable(doc, {
      startY: 45,
      head: [['Item', 'Details']],
      body: tableData,
      theme: 'grid',
      headStyles: { fillColor: [26, 58, 50] },
      styles: { cellPadding: 3, fontSize: 11 },
      columnStyles: { 0: { fontStyle: 'bold' } }
    });

    // THIS IS THE CORRECTED LINE:
    let finalY = doc.lastAutoTable.finalY;

    doc.setFontSize(10);
    doc.setTextColor(150);
    doc.text("Thank you for applying. Please keep this receipt for your records.", 105, finalY + 15, { align: 'center' });
    doc.text("A confirmation email has also been sent to your address.", 105, finalY + 20, { align: 'center' });
    
    doc.save(`Luna_Graphics_Application_${referenceNumber}.pdf`);
  };

  const handleShare = () => {
    const shareText = `I just applied for the ${position} position at Luna Graphics! My application reference is ${referenceNumber}.`;
    const shareUrl = window.location.href;

    if (navigator.share) {
      navigator.share({
        title: 'Luna Graphics Application',
        text: shareText,
        url: shareUrl,
      }).catch(console.error);
    } else {
      setShowShareModal(true);
    }
  };

  return (
    <>
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
                <div><span className="text-muted-foreground">Reference Number:</span><p className="font-mono font-medium text-primary">{referenceNumber}</p></div>
                <div><span className="text-muted-foreground">Position:</span><p className="font-medium text-foreground">{position}</p></div>
                <div><span className="text-muted-foreground">Applicant:</span><p className="font-medium text-foreground">{applicantName}</p></div>
                <div><span className="text-muted-foreground">Email:</span><p className="font-medium text-foreground">{email}</p></div>
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
              {nextSteps.map((step) => (
                <div key={step.step} className="flex items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Icon name={step.icon} size={20} color="var(--color-primary)" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1"><h4 className="font-medium text-foreground">Step {step.step}: {step.title}</h4><span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">{step.timeline}</span></div>
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
        
          {/* Contact Information */}
          <div className="p-6 border-b border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Need Help?</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center"><Icon name="Mail" size={20} color="var(--color-primary)" className="mr-3" /><div><p className="text-sm font-medium text-foreground">Email Support</p><p className="text-sm text-muted-foreground">info.lunagraphics@gmail.com</p></div></div>
              <div className="flex items-center"><Icon name="Phone" size={20} color="var(--color-primary)" className="mr-3" /><div><p className="text-sm font-medium text-foreground">Phone Support</p><p className="text-sm text-muted-foreground">+254 791 159 618</p></div></div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-between p-6">
            <Button variant="outline" iconName="Download" iconPosition="left" onClick={handleDownloadPdf}>
              Download PDF Receipt
            </Button>
            <div className="flex items-center space-x-3">
              <Button variant="outline" iconName="Share2" iconPosition="left" onClick={handleShare}>
                Share
              </Button>
              <Button variant="default" onClick={onClose}>
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
      {showShareModal && (
        <ShareModal
          shareText={`I just applied for the ${position} position at Luna Graphics!`}
          shareUrl={window.location.href}
          onClose={() => setShowShareModal(false)}
        />
      )}
    </>
  );
};

export default ApplicationSuccess;
import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: 'MapPin',
      title: 'Visit Our Office',
      details: ['Luna Graphics Print Shop', 'Kimathi Street, Nairobi CBD', 'Nairobi, Kenya'],
      action: 'Get Directions'
    },
    {
      icon: 'Phone',
      title: 'Call Us',
      details: ['+254 712 345 678', '+254 733 456 789', 'Mon-Fri: 8:00 AM - 6:00 PM'],
      action: 'Call Now'
    },
    {
      icon: 'Mail',
      title: 'Email Us',
      details: ['careers@lunagraphics.co.ke', 'info@lunagraphics.co.ke', 'We respond within 24 hours'],
      action: 'Send Email'
    }
  ];

  return (
    <section id="contact" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our open positions or application process? We're here to help. Reach out to our HR team for personalized assistance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Icon name={info.icon} size={24} color="var(--color-primary)" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground mb-2">{info.title}</h4>
                    <div className="space-y-1 mb-3">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="ExternalLink"
                      iconPosition="right"
                      onClick={() => {
                        if (info.icon === 'Phone') {
                          window.location.href = 'tel:+254712345678';
                        } else if (info.icon === 'Mail') {
                          window.location.href = 'mailto:careers@lunagraphics.co.ke';
                        } else if (info.icon === 'MapPin') {
                          window.open('https://maps.google.com?q=Kimathi+Street+Nairobi+CBD', '_blank');
                        }
                      }}
                    >
                      {info.action}
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Office Hours */}
            <div className="bg-muted rounded-lg p-6">
              <h4 className="font-medium text-foreground mb-4 flex items-center">
                <Icon name="Clock" size={20} color="var(--color-primary)" className="mr-2" />
                Office Hours
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="text-foreground font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="text-foreground font-medium">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="text-foreground font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-card rounded-xl border border-border p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="+254 712 345 678"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                  <Input
                    label="Subject"
                    type="text"
                    placeholder="What is this regarding?"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  />
                </div>

                {/* Submit Status */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
                    <div className="flex items-center">
                      <Icon name="CheckCircle" size={20} color="var(--color-success)" className="mr-2" />
                      <p className="text-success text-sm">
                        Message sent successfully! We'll get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center">
                      <Icon name="AlertCircle" size={20} color="var(--color-error)" className="mr-2" />
                      <p className="text-red-600 text-sm">
                        Failed to send message. Please try again or contact us directly.
                      </p>
                    </div>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  fullWidth
                  loading={isSubmitting}
                  iconName="Send"
                  iconPosition="left"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-foreground text-center mb-6">
            Find Our Office
          </h3>
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="h-96 w-full">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Luna Graphics Office Location"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=-1.2864,36.8172&z=16&output=embed"
                className="border-0"
              />
            </div>
            <div className="p-6 border-t border-border">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-foreground mb-1">Luna Graphics Print Shop</h4>
                  <p className="text-sm text-muted-foreground">Kimathi Street, Nairobi CBD, Kenya</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Navigation"
                  iconPosition="left"
                  onClick={() => window.open('https://maps.google.com?q=-1.2864,36.8172', '_blank')}
                >
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Quick Links */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Frequently Asked Questions
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.location.href = '#requirements'}
            >
              Application Requirements
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.location.href = '#benefits'}
            >
              Employee Benefits
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.location.href = '#values'}
            >
              Company Culture
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.location.href = '#positions'}
            >
              Open Positions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
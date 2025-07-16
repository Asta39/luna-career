import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Wanjiku",
      position: "Senior Graphic Designer",
      department: "Creative Team",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9b5e3b0?w=150&h=150&fit=crop&crop=face",
      quote: `Joining Luna Graphics was the best career decision I've made. The company truly invests in employee growth and provides opportunities to work on exciting projects with major clients.`,
      yearsAtCompany: 3,
      previousRole: "Junior Designer",
      achievements: "Promoted twice, Led 15+ major campaigns"
    },
    {
      id: 2,
      name: "Michael Ochieng",
      position: "Machine Operator",
      department: "Production Team",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: `The training I received at Luna Graphics transformed my technical skills. Working with state-of-the-art equipment and learning from experienced colleagues has been incredible.`,
      yearsAtCompany: 2,
      previousRole: "Trainee Operator",
      achievements: "Zero defect record, Equipment specialist"
    },
    {
      id: 3,
      name: "Grace Muthoni",
      position: "Sales Manager",
      department: "Business Development",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: `Luna Graphics offers a supportive environment where sales professionals can thrive. The company's reputation makes client relationships easier to build and maintain.`,
      yearsAtCompany: 4,
      previousRole: "Sales Representative",
      achievements: "Top performer 3 years running"
    },
    {
      id: 4,
      name: "David Kimani",
      position: "Digital Marketing Specialist",
      department: "Marketing Team",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: `The digital marketing role at Luna Graphics allows me to be creative while driving real business results. The team is collaborative and always open to innovative ideas.`,
      yearsAtCompany: 1.5,
      previousRole: "Marketing Assistant",
      achievements: "Increased online engagement by 200%"
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTestimonialData = testimonials[currentTestimonial];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Team Says
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear directly from our employees about their experience working at Luna Graphics and how we've supported their career growth.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl border border-border p-8 md:p-12 shadow-card">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Employee Photo */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20">
                    <Image
                      src={currentTestimonialData.image}
                      alt={currentTestimonialData.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Quote" size={20} color="white" />
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 text-center md:text-left">
                <blockquote className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
                  "{currentTestimonialData.quote}"
                </blockquote>

                <div className="space-y-2 mb-6">
                  <h3 className="text-xl font-semibold text-foreground">
                    {currentTestimonialData.name}
                  </h3>
                  <p className="text-primary font-medium">
                    {currentTestimonialData.position}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {currentTestimonialData.department}
                  </p>
                </div>

                {/* Employee Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
                  <div>
                    <div className="text-2xl font-bold text-primary">
                      {currentTestimonialData.yearsAtCompany}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Years at Luna
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">
                      Started as
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {currentTestimonialData.previousRole}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">
                      Key Achievement
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {currentTestimonialData.achievements}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-smooth ${
                  index === currentTestimonial
                    ? 'bg-primary' :'bg-muted hover:bg-muted-foreground/30'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center mt-4 space-x-4">
            <button
              onClick={() => setCurrentTestimonial((prev) => 
                prev === 0 ? testimonials.length - 1 : prev - 1
              )}
              className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center hover:bg-muted transition-smooth"
              aria-label="Previous testimonial"
            >
              <Icon name="ChevronLeft" size={20} color="var(--color-foreground)" />
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => 
                (prev + 1) % testimonials.length
              )}
              className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center hover:bg-muted transition-smooth"
              aria-label="Next testimonial"
            >
              <Icon name="ChevronRight" size={20} color="var(--color-foreground)" />
            </button>
          </div>
        </div>

        {/* Team Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">92%</div>
            <div className="text-sm text-muted-foreground">Employee Retention</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">85%</div>
            <div className="text-sm text-muted-foreground">Internal Promotions</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">4.8/5</div>
            <div className="text-sm text-muted-foreground">Employee Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Team Members</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
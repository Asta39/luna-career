import React from 'react';
import Icon from '../../../components/AppIcon';

const WhyChooseLunaSection = () => {
  const benefits = [
    {
      icon: "TrendingUp",
      title: "Career Growth",
      description: "Advance your career with structured promotion paths and continuous learning opportunities.",
      stats: [
        { label: "Internal Promotions", value: "85%" },
        { label: "Training Programs", value: "12+" },
        { label: "Skill Development", value: "Ongoing" }
      ],
      features: [
        "Annual performance reviews with clear advancement criteria",
        "Professional development budget for courses and certifications",
        "Mentorship programs with senior team members",
        "Cross-department training opportunities"
      ]
    },
    {
      icon: "Shield",
      title: "Stable Environment",
      description: "Join a well-established company with a proven track record of success and employee satisfaction.",
      stats: [
        { label: "Years in Business", value: "9+" },
        { label: "Employee Retention", value: "92%" },
        { label: "Client Satisfaction", value: "98%" }
      ],
      features: [
        "Consistent business growth and financial stability",
        "Long-term employment with job security",
        "Comprehensive health insurance coverage",
        "Competitive salary packages with annual reviews"
      ]
    },
    {
      icon: "Monitor",
      title: "Modern Workplace",
      description: "Work with cutting-edge technology and equipment in a contemporary office environment.",
      stats: [
        { label: "Equipment Investment", value: "KES 5M+" },
        { label: "Technology Stack", value: "Latest" },
        { label: "Office Renovation", value: "2024" }
      ],
      features: [
        "State-of-the-art printing and design equipment",
        "Modern software licenses and creative tools",
        "Comfortable workspace with ergonomic furniture",
        "High-speed internet and reliable IT infrastructure"
      ]
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Luna Graphics?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what makes Luna Graphics the ideal place to build your career. We offer more than just a job – we provide a platform for professional growth and personal success.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border p-8 hover:shadow-card transition-smooth"
            >
              {/* Icon and Title */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit.icon} size={32} color="var(--color-primary)" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {benefit.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="space-y-3">
                {benefit.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <Icon 
                      name="Check" 
                      size={16} 
                      color="var(--color-success)" 
                      className="mr-3 mt-0.5 flex-shrink-0" 
                    />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mt-12 bg-muted rounded-xl p-8">
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">
            Additional Benefits & Perks
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Coffee" size={24} color="var(--color-primary)" />
              </div>
              <h4 className="font-medium text-foreground mb-1">Free Meals</h4>
              <p className="text-sm text-muted-foreground">Daily lunch and refreshments</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Car" size={24} color="var(--color-primary)" />
              </div>
              <h4 className="font-medium text-foreground mb-1">Transport</h4>
              <p className="text-sm text-muted-foreground">Commuter allowance provided</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Calendar" size={24} color="var(--color-primary)" />
              </div>
              <h4 className="font-medium text-foreground mb-1">Flexible Hours</h4>
              <p className="text-sm text-muted-foreground">Work-life balance priority</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Gift" size={24} color="var(--color-primary)" />
              </div>
              <h4 className="font-medium text-foreground mb-1">Bonuses</h4>
              <p className="text-sm text-muted-foreground">Performance-based rewards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseLunaSection;
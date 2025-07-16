import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CompanyValuesSection = () => {
  const [activeValue, setActiveValue] = useState(0);

  const values = [
    {
      id: 1,
      title: "Excellence in Everything",
      icon: "Award",
      shortDescription: "We strive for the highest quality in all our work and services.",
      fullDescription: `At Luna Graphics, excellence isn't just a goal—it's our standard. We believe that every project, no matter how big or small, deserves our absolute best effort. This commitment to excellence extends to our hiring practices, training programs, and daily operations.\n\nOur team members are encouraged to continuously improve their skills and take pride in their work. We provide the tools, training, and support necessary to help every employee deliver exceptional results that exceed client expectations.`,
      principles: [
        "Quality over quantity in every project",
        "Continuous learning and skill development",
        "Attention to detail in all processes",
        "Client satisfaction as our primary measure of success"
      ]
    },
    {
      id: 2,
      title: "Innovation & Creativity",
      icon: "Lightbulb",
      shortDescription: "We embrace new ideas and creative solutions to stay ahead.",
      fullDescription: `Innovation drives our industry forward, and creativity sets us apart from the competition. At Luna Graphics, we foster an environment where new ideas are welcomed, tested, and implemented. We encourage our team to think outside the box and challenge conventional approaches.\n\nFrom adopting the latest printing technologies to developing unique design solutions, we're always looking for ways to improve and innovate. Our creative team has the freedom to experiment and push boundaries while maintaining our high standards of quality.`,
      principles: [
        "Embrace new technologies and methodologies",
        "Encourage creative problem-solving",
        "Support experimentation and calculated risks",
        "Stay ahead of industry trends and developments"
      ]
    },
    {
      id: 3,
      title: "Teamwork & Collaboration",
      icon: "Users",
      shortDescription: "We achieve more together than we ever could alone.",
      fullDescription: `Success at Luna Graphics is a team effort. We believe that collaboration brings out the best in everyone and leads to better outcomes for our clients. Our open communication culture ensures that ideas flow freely across all departments and levels.\n\nWe've built a supportive environment where team members help each other grow, share knowledge, and work together to overcome challenges. Whether it's a designer collaborating with a machine operator or sales working with production, teamwork is at the heart of everything we do.`,
      principles: [
        "Open communication across all levels",
        "Knowledge sharing and mentorship",
        "Collaborative problem-solving approach",
        "Mutual support and respect among colleagues"
      ]
    },
    {
      id: 4,
      title: "Integrity & Trust",
      icon: "Shield",
      shortDescription: "We build lasting relationships through honesty and reliability.",
      fullDescription: `Trust is the foundation of all our relationships—with clients, suppliers, and each other. We conduct our business with the highest ethical standards and expect the same from every team member. Integrity means doing the right thing, even when no one is watching.\n\nOur commitment to honesty and transparency has earned us the trust of hundreds of clients over the years. We keep our promises, meet our deadlines, and always communicate openly about challenges and solutions.`,
      principles: [
        "Honest and transparent communication",
        "Ethical business practices in all dealings",
        "Reliability in meeting commitments",
        "Building long-term relationships based on trust"
      ]
    },
    {
      id: 5,
      title: "Growth & Development",
      icon: "TrendingUp",
      shortDescription: "We invest in our people\'s professional and personal growth.",
      fullDescription: `At Luna Graphics, we believe that our success is directly tied to the growth and development of our team members. We're committed to providing opportunities for advancement, skill development, and career progression for every employee.\n\nFrom structured training programs to mentorship opportunities, we invest in our people's future. We celebrate achievements, support career goals, and provide the resources needed for both professional and personal growth.`,
      principles: [
        "Structured career advancement pathways",
        "Investment in training and development",
        "Recognition and reward for achievements",
        "Support for work-life balance and personal goals"
      ]
    }
  ];

  return (
    <section id="values" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These fundamental principles guide everything we do at Luna Graphics and shape the culture we've built for our team.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Values List */}
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {values.map((value, index) => (
                <button
                  key={value.id}
                  onClick={() => setActiveValue(index)}
                  className={`w-full text-left p-4 rounded-lg border transition-smooth ${
                    activeValue === index
                      ? 'bg-primary text-white border-primary' :'bg-card text-foreground border-border hover:bg-muted'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                      activeValue === index
                        ? 'bg-white/20' :'bg-primary/10'
                    }`}>
                      <Icon 
                        name={value.icon} 
                        size={20} 
                        color={activeValue === index ? 'white' : 'var(--color-primary)'} 
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">
                        {value.title}
                      </h3>
                      <p className={`text-xs ${
                        activeValue === index
                          ? 'text-white/80' :'text-muted-foreground'
                      }`}>
                        {value.shortDescription}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Active Value Details */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl border border-border p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                  <Icon 
                    name={values[activeValue].icon} 
                    size={32} 
                    color="var(--color-primary)" 
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {values[activeValue].title}
                  </h3>
                  <p className="text-muted-foreground">
                    {values[activeValue].shortDescription}
                  </p>
                </div>
              </div>

              <div className="prose prose-sm max-w-none mb-8">
                {values[activeValue].fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4">
                  Key Principles:
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {values[activeValue].principles.map((principle, index) => (
                    <div key={index} className="flex items-start">
                      <Icon 
                        name="Check" 
                        size={16} 
                        color="var(--color-success)" 
                        className="mr-3 mt-0.5 flex-shrink-0" 
                      />
                      <span className="text-sm text-muted-foreground">
                        {principle}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values in Action */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">
            Our Values in Action
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg border border-border p-6 text-center">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Target" size={24} color="var(--color-success)" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                Client Success Rate
              </h4>
              <div className="text-2xl font-bold text-success mb-1">98%</div>
              <p className="text-sm text-muted-foreground">
                Client satisfaction through our commitment to excellence
              </p>
            </div>

            <div className="bg-card rounded-lg border border-border p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={24} color="var(--color-primary)" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                Team Collaboration
              </h4>
              <div className="text-2xl font-bold text-primary mb-1">100%</div>
              <p className="text-sm text-muted-foreground">
                Cross-department projects completed successfully
              </p>
            </div>

            <div className="bg-card rounded-lg border border-border p-6 text-center">
              <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={24} color="var(--color-warning)" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                Employee Growth
              </h4>
              <div className="text-2xl font-bold text-warning mb-1">85%</div>
              <p className="text-sm text-muted-foreground">
                Internal promotions reflecting our investment in people
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyValuesSection;
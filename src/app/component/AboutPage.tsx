import React from 'react';
import AboutSection from './AboutSection';

const AboutPage: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-10">
      <AboutSection
        title="About Us"
        lineImage="/line.png"
        description="Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education."
        buttonText="Learn More"
        buttonIcon="/arow.png"
      />
      <AboutSection
        title="Academics"
        lineImage="/line.png"
        description="Meet our passionate educators who bring years of expertise and love for teaching into every classroom."
        buttonText="Meet Team"
        buttonIcon="/arow.png"
      />
      <AboutSection
        title="Student Life"
        lineImage="/line.png"
        description="Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child."
        buttonText="Learn More"
        buttonIcon="/arow.png"
      />
      <AboutSection
        title="Admission"
        lineImage="/line.png"
        description="Meet our passionate educators who bring years of expertise and love for teaching into every classroom."
        buttonText="Meet Team"
        buttonIcon="/arow.png"
      />
    </div>
  );
};

export default AboutPage;

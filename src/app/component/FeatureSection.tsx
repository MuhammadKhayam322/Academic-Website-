import React from 'react';
import FeatureCard from '../components/FeatureCard'; // Adjust the path if needed

const features = [
  {
    icon: '/icon.png',
    title: 'Holistic Learning Approach',
    description:
      'Our curriculum focuses on nurturing cognitive, social,  ensuring a well-rounded education.',
  },
  {
    icon: '/icon1.png',
    title: 'Experienced Educators',
    description:
      'Our passionate and qualified teachers create a supportive and stimulating learning environment.'
  },
  {
    icon: '/icon2.png',
    title: 'Nurturing Environment',
    description:
      'We prioritize safety and provide a warm and caring atmosphere for every child.',
  },
  {
    icon: '/icon3.png', // ← comma added here!
    title: 'Play-Based Learning',
    description:
      'We believe in the power of play to foster creativity, problem-solving skills, and imagination.',
  },
  
  {
    icon: '/icon4.png',
    title: 'Individualized Attention',
    description:
      'Our small class sizes enable personalized attention, catering to each childs unique needs.',
  },
  {
    icon: '/icon5.png',
    title: 'Parent Involvement',
    description:
      'We foster a strong parent-school partnership to ensure seamless communication and collaboration.',
  },
 
];

const FeatureSection: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
    {features.map((feature, index) => (
      <FeatureCard
        key={index}
        icon={feature.icon}
        title={feature.title}
        description={feature.description}
      />
    ))}
  </div>
  
  );
};

export default FeatureSection;


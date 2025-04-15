import TestimonialCard from '../component/TestimonialCard';

const TestimonialSection = () => {
  return (
    <div className="flex justify-center item-center overflow-scroll whitespace-wrap">
    <div className="flex gap-6 animate-scroll-x">
      <TestimonialCard
        name="Jennifer B"
        avatar="/logo.png"
        testimonial="Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
      />
      <TestimonialCard
        name="David K"
        avatar="/logo.png"
        testimonial="Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment."
      />
      <TestimonialCard
        name="Emily"
        avatar="/logo.png"
        testimonial="My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers."
      />
      {/* Repeat cards if you want the loop effect */}
    </div>
  </div>
  
  );
};

export default TestimonialSection;

import TestimonialCard from '../component/TestimonialCard';

const TestimonialSection = () => {
  return (
    <div className="flex justify-center gap-6 flex-wrap">
      <TestimonialCard
        name="Jennifer B"
        avatar="/logo.png"
        testimonial="Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
      />
       <TestimonialCard
        name="Jennifer B"
        avatar="/logo.png"
        testimonial="Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
      />
       <TestimonialCard
        name="Jennifer B"
        avatar="/logo.png"
        testimonial="Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
      />
    </div>
  );
};

export default TestimonialSection;

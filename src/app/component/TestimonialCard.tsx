import React from 'react';

type TestimonialCardProps = {
  name: string;
  avatar: string;
  testimonial: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, avatar, testimonial }) => {
  return (
    <div className="relative border  w-[300px] h-[462px] rounded-2xl flex justify-center items-center mx-4 mb-8 sm:w-[400px] sm:h-[400px]  md:w-[400px] md:h-[450px] border-b-4 border-r-4">
     
      <div className="flex flex-col items-center absolute top-10">
        <img className="w-20 h-20 rounded-full sm:w-16 sm:h-16 md:w-18 md:h-18" src={avatar} alt={name} />
        <h1 className="mt-2 text-xs font-semibold text-center sm:text-[25px]">{name}</h1>
      </div>

     
      <div className="mt-40 text-center px-6 sm:px-4">
        <img className="mx-auto mb-4 w-10 sm:w-18" src="/star.png" alt="rating" />
        <div className="w-[300px] sm:w-[280px]">
          <p className="text-sm text-gray-700">{testimonial}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;


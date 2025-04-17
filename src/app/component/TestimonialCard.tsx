import React from 'react';
import Image from 'next/image';

type TestimonialCardProps = {
  name: string;
  avatar: string;
  testimonial: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, avatar, testimonial }) => {
  return (
    <div className="relative border bg-white w-[300px] h-[462px] rounded-2xl flex justify-center items-center mx-4 mb-8 sm:w-[400px] sm:h-[400px]  md:w-[400px] md:h-[450px] border-b-4 border-r-4">
      
      <div className="flex flex-col items-center absolute top-10">
        <Image
          className="rounded-full"
          src={avatar}
          alt={name}
          width={80}
          height={80}
        />
        <h1 className="mt-2 text-xs font-semibold text-center sm:text-[25px]">{name}</h1>
      </div>

      <div className="mt-40 text-center px-6 sm:px-4">
        <Image
          src="/star.png"
          alt="rating"
          width={40}
          height={40}
          className="mx-auto mb-4"
        />
        <div className="w-[300px] sm:w-[280px]">
          <p className="text-sm text-gray-700">{testimonial}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;



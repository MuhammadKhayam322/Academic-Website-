import React from 'react';

type TestimonialCardProps = {
  name: string;
  avatar: string;
  testimonial: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, avatar, testimonial }) => {
  return (
    <div className='relative border w-[425px] h-[462px] rounded-2xl flex justify-center items-center'>
      <div className='flex flex-col'>
        <img className='absolute mt-[-150px] ml-20' src={avatar} alt={name} />
        <div className='w-30'>
          <h1 className='w-70 mt-[-50px] ml-20'>{name}</h1>
        </div>
      </div>
      <div className='ml-[-100px]'>
        <img className='ml-10 mt-20' src='/star.png' alt="rating" />
        <div className='w-[300px]'>
          <p>{testimonial}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

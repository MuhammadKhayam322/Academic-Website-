import React from 'react';

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className=' py-8 flex justify-center items-center shadow-7xl'>
    <div className='relative w-[504px] h-[306px] border-2 rounded-3xl '>
      <img className='mt-[-40px] ml-[40px] w-[80px] absolute' src={icon} alt="icon" />
      <h1 className='mt-20 ml-10 text-[22px] font-bold'>{title}</h1>
      <p className='flex justify-center items-center w-[320px] ml-10'>{description}</p>
    </div>
    </div>
  );
};

export default FeatureCard;

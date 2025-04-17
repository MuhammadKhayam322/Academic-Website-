import React from 'react';

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="py-8 flex justify-center items-center">
      <div className="relative w-full max-w-md md:max-w-lg lg:max-w-lg px-12 py-18 border-2 rounded-3xl shadow-m border-b-4 border-r-4">
        {/* Icon */}
        <div className="absolute -top-10 left-10 w-20 h-20">
          <img src={icon} alt="icon" className="w-full h-full object-contain" />
        </div>

        {/* Title */}
        <h1 className="mt-12 text-xl md:text-2xl font-bold ml-2">{title}</h1>

        {/* Description */}
        <p className="mt-4 ml-2 text-sm md:text-base max-w-[90%]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;


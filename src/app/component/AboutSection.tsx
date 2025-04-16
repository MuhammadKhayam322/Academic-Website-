import React from 'react';

interface AboutSectionProps {
  title: string;
  lineImage: string;
  description: string;
  buttonText: string;
  buttonIcon: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  lineImage,
  description,
  buttonText,
  buttonIcon,
}) => {
  return (
    <div className="flex justify-center items-center h-auto px-6">
      <div className="flex flex-col justify-center relative mt-10 border rounded-2xl w-full max-w-[553px] h-auto md:h-[538px] bg-white shadow-md ">
        <div className="w-full">
          <h1 className="text-3xl md:text-4xl font-bold absolute top-8 left-1/2 transform -translate-x-1/2 text-center">
            {title}
          </h1>

          <div className="mt-28 px-4 md:px-10">
            <img className="w-full max-w-[400px] mx-auto mb-6" src={lineImage} alt="line" />

            <div className="mt-6 text-center md:text-left">
              <p className="text-base  max-w-[970px] md:text-lg">{description}</p>
            </div>

            <div className="w-full  mx-auto md:mx-0 h-12 border bg-red-100 mt-8 rounded-2xl px-6 flex items-center justify-center gap-2 cursor-pointer hover:bg-red-200 transition">
              <span className="text-sm md:text-base font-semibold">{buttonText}</span>
              <img className="w-5 h-5" src={buttonIcon} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;


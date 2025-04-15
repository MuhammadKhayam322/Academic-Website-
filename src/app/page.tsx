import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FeatureSection from './component/FeatureSection';
import TestimonialSection from './component/TestimonialSection';
function Page() {
  return (
    <div className="relative min-h-screen">
      {/* Background Grid (vertical stripes) */}
      <div className="absolute inset-0 z-0 grid grid-cols-50 min-h-screen ">
 <div className="bg-red-100 col-span-2 h-full"></div>
  <div className="bg-white col-span-1 h-full"></div>
  <div className="bg-red-100 col-span-2 h-full"></div>
  <div className="bg-white col-span-1 h-full"></div>
  <div className="bg-red-100 col-span-2 h-full"></div>
  <div className="bg-white col-span-1 h-full"></div>
  <div className="bg-red-100 col-span-2 h-full"></div>
  <div className="bg-white col-span-1 h-full"></div>
  <div className="bg-red-100 col-span-2 h-full"></div>
  <div className="bg-white col-span-1 h-full"></div>
  <div className="bg-red-100 col-span-2 h-full"></div>
  <div className="bg-white col-span-1 h-full"></div>
  <div className="bg-red-100 col-span-2 h-full"></div>
  <div className="bg-white col-span-1 h-full"></div>
  <div className="bg-red-100 col-span-2 h-full"></div>
  <div className="bg-white col-span-1 h-full"></div>
  <div className="bg-red-100 col-span-2 h-full"></div>
  <div className="bg-white col-span-1 h-full"></div>
  <div className="bg-red-100 col-span-2 h-full"></div>
  <div className="bg-white col-span-1 h-full"></div>
  <div className="bg-red-100 col-span-2 h-full"></div>
  <div className="bg-white col-span-1 h-full"></div>
  <div className="bg-red-100 col-span-2 h-full"></div>
  <div className="bg-white col-span-1 h-full"></div>
  <div className="bg-red-100 col-span-2 h-full"></div>
  <div className="bg-white col-span-1 h-full"></div>
  <div className="bg-red-100 col-span-2 h-full"></div>
  <div className="bg-white col-span-1 h-full"></div>
  <div className="bg-red-100 col-span-2 h-full"></div>
  <div className="bg-white col-span-1 h-full"></div>
  <div className="bg-red-100 col-span-2 h-full"></div>
  <div className="bg-white col-span-1 h-full"></div>
  <div className="bg-red-100 col-span-2 h-full"></div>
  
  </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        {/* Banner */}
        <div>
          <Image src="/baner.png" alt="baner" width={1840} height={200} />
        </div>

        {/* Navigation */}
        <nav className="flex items-center justify-between shadow border-2 backdrop-blur-sm">
          {/* Logo */}
          <Link href="/">
            <Image src="/image.png" alt="banner" width={242} height={100} />
          </Link>

          {/* Navigation Links */}
          <ul className="flex">
            <li className="border-2 p-7"><Link href="/">Home</Link></li>
            <li className="border-2 p-7"><Link href="/about">About Us</Link></li>
            <li className="border-2 p-7"><Link href="/academics">Academics</Link></li>
            <li className="border-2 p-7"><Link href="/admissions">Admissions</Link></li>
            <li className="border-2 p-7"><Link href="/student-life">Student Life</Link></li>
            <li className="border-2 p-7"><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
  <div className="grid grid-cols-3 gap-0">
  {/* Column 1 - White */}

  {/* Column 2 - Pink (with Image centered) */}
  <div className="absolute  flex justify-center items-start">
    <Image
      src="/compo.png"
      alt="banner"
      width={615}
      height={85}
      className="mt-20 ml-27 bg-orange-400 opacity-50"
     
    />
    
     <Image
      src="/Design.png"
      alt="banner"
      width={485}
      height={85}
      className="mt-20 ml-27 absolute"
      
    />
  </div>

</div>
<div className="absolute  flex justify-center items-start">
<Image
      src="/compo2.png"
      alt="banner"
      width={765}
      height={500}
      className="mt-35 ml-197"
     
    />
   </div>

<div className='relative border w-80 flex justify-center items-center mt-200 ml-180'>
      <h1 className='text-black'>Children Deserve Bright Future</h1>
      </div>
      <div className='relative  w-80 flex justify-center items-center  ml-180 text-[50px]'> 
        <h2>Our Benefits</h2>
        </div>
        <div className='relative w-[772px] h-[60px] flex justify-end items-center ml-130'>
  <p className='text-center'>With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future.</p>
</div>
 
    <FeatureSection />
     <div className='relative w-[222px] rounded-2xl h-[30px] border-2 flex justify-center items-center ml-197 mt-20 p-5'>
      <h1 className='flex justify-center item-center'>Their Happy Words 🤗</h1>
     </div>
     <div className='relative w-[822px] rounded-2xl h-[130px]  flex justify-center items-center ml-127 mt-10 '>
      <h1 className='text-[60px] font-bold'>Our Testimonials</h1>
    </div>
   <div className='relative w-[822px] rounded-2xl h-[130px]  flex justify-center items-center ml-127  '>
    <p className='text-center font-medium text-10'>Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally.</p>
   </div>
   <div>
    <TestimonialSection />
   </div>
    </div>
  );
}

export default Page;

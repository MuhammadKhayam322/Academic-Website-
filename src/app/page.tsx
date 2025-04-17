import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FeatureSection from './component/FeatureSection';
import TestimonialScroller from './component/TestimonialScroller';
import FAQSection from './component/FAQSection';
import Footer from './component/Footer';
import AboutPage from './component/AboutPage';

function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-pink-100">
      {/* Fixed Background Grid */}
      

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 lg:px-8">
        {/* Banner */}
        <div className="w-full min-w-screen-mxl mt-4">
          <Image
            src="/baner.png"
            alt="banner"
            width={1840}
            height={200}
            className="w-full h-auto"
          />
        </div>

        {/* Navigation */}
        <nav className="w-full max-w-screen-mxl mt-4 flex flex-col md:flex-row items-center justify-between  border rounded shadow  ">
          <Link href="/">
            <Image src="/image.png" alt="logo" width={180} height={120} />
          </Link>
          <ul className="flex flex-wrap justify-center md:justify-end  mt-4 md:mt-0">
            {[
              ['Home', '/'],
              ['About Us', '/about'],
              ['Academics', '/academics'],
              ['Admissions', '/admissions'],
              ['Student Life', '/student-life'],
              ['Contact', '/contact'],
            ].map(([text, link]) => (
              <li key={link} className="px-4 py-5 border rounded">
                <Link href={link}>{text}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Images side-by-side (centered row) */}
        <div className="relative mt-16 flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-screen-mxl">
          {/* Compo with overlay design */}
          <div className="relative">
            <Image
              src="/compo.png"
              alt="compo"
              width={615}
              height={85}
              className="w-full max-w-mxl opacity-50 bg-orange-400"
            />
            <Image
              src="/Design.png"
              alt="design"
              width={485}
              height={85}
              className="absolute md:w-150 sm:w-100  xsm:w-100  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>

          {/* Compo2 */}
          <Image
            src="/compo2.png"
            alt="compo2"
            width={765}
            height={500}
            className="w-full max-w-xl"
          />
        </div>

        {/* Headline and Description */}
        <div className="mt-16 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Children Deserve Bright Future
          </h1>
          <h2 className="text-xl sm:text-2xl mt-4 font-semibold">Our Benefits</h2>
          <p className="mt-2 max-w-xl mx-auto text-base">
            With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future.
          </p>
        </div>

        {/* Feature Section */}
        <div className="mt-16 w-full">
          <FeatureSection />
        </div>

        {/* Testimonial Section */}
        <div className="mt-20 text-center">
          <div className="inline-block px-6 py-2 border-2 rounded-2xl mb-4 text-lg">
            Their Happy Words 🤗
          </div>
          <h1 className="text-4xl font-bold">Our Testimonials</h1>
          <p className="mt-4 text-base max-w-2xl mx-auto">
            Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally.
          </p>
        </div>

        <div className="mt-10 w-full ">
          <TestimonialScroller />
        </div>

        <div className="mt-16 w-full max-w-screen-lg">
          <FAQSection />
        </div>
      </div>
      <div className='flex justify-center items-center mt-10'>
      <div className='flex justify-center item-center relative w-[227px] h-[37px] py-2 border rounded-2xl'>
        <h1>Explore More</h1>
      </div>
    
      </div>
      <div className="flex justify-center items-center relative mt-10 px-4">
  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
    Navigate through our Pages
  </h1>
</div>

        <div className='flex justify-center item-center relative mt-10'>
        <div className='flex justify-center item-center  w-[820px] h-[200px]'>
        <p className='text-center'>Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school</p>
        </div>
        </div>
        <div className='flex justify-center item-center relative gap-20 '> 
          <AboutPage/></div>
      
          <Footer
        logo={{
          icon: '/icon6.png',
          name: 'Little Learners',
          description:
            'We believe in the power of play to foster creativity, problem-solving skills, and imagination.',
          emailIcon: '/icon7.png',
          email: 'hello@littlelearners.com',
          phoneIcon: '/icon8.png',
          phone: '+91 91813 23 2309',
          locationIcon: '/icon9.png',
          location: 'Somewhere in the World',
        }}
        columns={[
          {
            title: 'Home',
            links: ['Feature', 'Our Testimonials', 'FAQ'],
          },
          {
            title: 'About Us',
            links: [
              'Our Mission',
              'Our Vision',
              'Awards and Recognitions',
              'History',
              'Teachers',
            ],
          },
          {
            title: 'Academics',
            links: ['Special Features', 'Gallery'],
          },
          {
            title: 'Contact Us',
            links: ['Information', 'Map & Direction'],
          },
        ]}
        socialIcons={['/icon10.png', '/icon11.png', '/icon12.png']}
        copyright="© 2023 Little Learners Academy. All rights reserved."
      />
      </div>
  );
}

export default Page;


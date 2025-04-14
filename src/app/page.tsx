import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Page() {
  return (
    <div className="relative min-h-screen">
      {/* Background Grid (vertical stripes) */}
      <div className="absolute inset-0 z-0 grid grid-cols-50 ">
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
  <div className="bg-white h-screen"></div>

  {/* Column 2 - Pink (with Image centered) */}
  <div className="absolute  flex justify-center items-start">
    <Image
      src="/compo.png"
      alt="banner"
      width={565}
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

  {/* Column 3 - White */}
  <div className="bg-white h-screen"></div>
</div>

    </div>
  );
}

export default Page;

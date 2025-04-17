import React from 'react';
import Image from 'next/image';

interface FooterLinkGroup {
  title: string;
  links: string[];
}

interface FooterProps {
  logo: {
    icon: string;
    name: string;
    description: string;
    emailIcon: string;
    email: string;
    phoneIcon: string;
    phone: string;
    locationIcon: string;
    location: string;
  };
  columns: FooterLinkGroup[];
  socialIcons: string[];
  copyright: string;
}

const Footer: React.FC<FooterProps> = ({
  logo,
  columns,
  socialIcons,
  copyright,
}) => {
  return (
    <div className="flex justify-center items-center relative mt-10 px-4">
      <footer className="w-full bg-white border mt-10 rounded-2xl p-6 md:p-10 border-b-4 border-r-4">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Logo & Contact */}
          <div className="flex flex-col gap-4 max-w-md">
            <div className="flex items-center gap-3">
              <Image src={logo.icon} alt="logo" width={40} height={40} />
              <h1 className="text-3xl font-bold">{logo.name}</h1>
            </div>
            <p className="text-[20px] text-gray-700">{logo.description}</p>
            <div className="flex items-center gap-3 mt-2">
              <Image src={logo.emailIcon} alt="email" width={20} height={20} />
              <span className="font-medium">{logo.email}</span>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <Image src={logo.phoneIcon} alt="phone" width={20} height={20} />
              <span className="font-medium">{logo.phone}</span>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <Image src={logo.locationIcon} alt="location" width={20} height={20} />
              <span className="font-medium">{logo.location}</span>
            </div>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 lg:mt-0">
            {columns.map((group, index) => (
              <div key={index}>
                <h2 className="text-xl font-semibold mb-3">{group.title}</h2>
                <ul className="space-y-2 text-gray-700">
                  {group.links.map((link, idx) => (
                    <li key={idx} className="text-sm hover:underline cursor-pointer">
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-300" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 flex-wrap text-sm">
            <a href="#" className="hover:underline">Terms of Service</a>
            <span>|</span>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:underline">Cookie Policy</a>
          </div>

          <div className="flex items-center gap-3">
            {socialIcons.map((icon, index) => (
              <Image
                key={index}
                src={icon}
                alt={`social-${index}`}
                width={24}
                height={24}
              />
            ))}
          </div>
        </div>

        <hr className="my-6 border-gray-300" />
        <div className="text-center text-xs text-gray-500 mt-4">
          {copyright}
        </div>
      </footer>
    </div>
  );
};

export default Footer;



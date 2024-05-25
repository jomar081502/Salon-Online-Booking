import React from "react";
import FacebookLogo from "../components/socmed_Icons/fb_logo.png";

const Icons = [
  { name: "logo-facebook", link: "https://www.facebook.com/guysngalsilustre/" },
];

const Footer = () => {


  const SocialIcons = () => {
    
    const getLogo = (name) => {
      switch (name) {
        case "logo-facebook":
          return FacebookLogo;
        default:
          return null;
      }
    };

    return (
      <div className="text-teal-500 flex items-center">
        <span className="mr-2">Stay Connected</span>
        {Icons.map((icon) => (
          <a
            key={icon.name}
            href={icon.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300"
          >
            <img
              src={getLogo(icon.name)}
              alt={icon.name}
              className="h-6 w-6"
            />
          </a>
        ))}
      </div>
    );
  };

  return (
    <footer className="bg-[#003C43] text-white">
    

      
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <div className="flex items-center ml-28">
        <img src="/logo.png" alt="Logo" className="mr-4 w-24 f_logo" />
        <div>
          <span className="font-semibold text-xl tracking-tight" style={{ color: '#D20062', fontSize: '24px', fontFamily: 'Helvetica Neue'}}>Guys & Gals</span>
          <span className="font-semibold text-xl tracking-tight" style={{ color: '#D6589F', fontSize: '24px', fontFamily: 'Helvetica Neue'}}> Salon</span>
          <div className="mt-2 text-sm text-gray-400">SAN PEDRO STREET INFRONT OF POSTBANK, Davao City, Philippines</div>
        </div>
      </div>

        <div className="ml-64 text-gray-300">
        <h1>About Us</h1>
        
        </div>

        <div className=" ml-56 text-gray-300">
        <h1>Contact Us</h1>
        </div>

        <div>
        <h1> </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
        <span>@2024 GnG Salon. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons />
      </div>
    </footer>
  );
};

export default Footer;
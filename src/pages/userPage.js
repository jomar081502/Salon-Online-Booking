// homepage.js

import React, { useState } from 'react';
import { FaStar, FaThumbsUp, FaThumbsDown, FaUser    } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '../components/footer';
import BookingForm from './BookingForm';
import { NavLink, Link } from 'react-router-dom';

const UserPage = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const handleBookNowClick = () => {
    setShowBookingForm(true);
  };

  const handleCloseBookingForm = () => {
    setShowBookingForm(false);
  };
 

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };
  return (
    <div>
      <header>
        <div className="rounded-md bg-[#cd668855] p-2"> {/* Adjusted width */}
          <div className="text-sm font-semibold text-center text-gray-600">Call Us: +63 998 9099 129</div>
          <div className="text-sm font-semibold  text-center text-gray-600">Opening Hours: Mon-Fri 9:00 AM - 6:00 PM</div>
        </div>
        <nav className="sticky top-0 z-50 flex items-center justify-between flex-wrap p-6 h-24">
          <div className="header-background  flex items-center flex-shrink-0 text-white mr-6">
            <img src={'/logo.png'} alt="Logo" className="logo mr-6 ml-10" />
            <div>
              <span className="font-semibold text-xl tracking-tight" style={{ color: '#D20062', fontSize: '24px', fontFamily: 'Helvetica Neue'}}>Guys & Gals</span>
              <span className="font-semibold text-xl tracking-tight" style={{ color: '#D6589F', fontSize: '24px', fontFamily: 'Helvetica Neue'}}> Salon</span>
            </div>
          </div>

          <div className="w-full ml-96">
            <div className="lg:flex-grow flex justify-start lg:justify-start ml-96 text-lg">
              <NavLink exact to="/Homepage" activeClassName="active" className="block mt-0 lg:inline-block font-semibold lg:mt-0 text-black hover:text-slate-600 ml-96 mr-4">
                Home
              </NavLink>
              <NavLink exact to="/services" activeClassName="active" className="block mt-0 lg:inline-block lg:mt-0 font-semibold text-black hover:text-slate-600 mr-4 ml-7">
                Services
              </NavLink>
              

              {/* Profile Dropdown */}
              <div className="relative">
              <button onClick={toggleProfileMenu} className="block mt-0 lg:inline-block lg:mt-0 font-semibold text-black hover:text-slate-600 ml-7">
            {/* Replace text with human icon */}
            <FaUser className="inline-block mr-2" style={{height: '30px', width: '40px'}} /> 
          </button>
                {showProfileMenu && (
                  <div className="absolute top-10 right-0 bg-white border border-gray-200 rounded-md shadow-lg">
                    <Link to="/profile" className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                    <Link to="/" className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
       <div>
     
      
    </div>
       <div className="relative">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <img src="/coverphoto.jpg" alt="" className="w-full" style={{ maxHeight: '730px' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-white text-3xl font-bold mb-4 ml-56 font-serif">"ELEVATE YOUR LOOK,</h2>
          <h2 className="text-white text-3xl font-bold mb-4 ml-56 font-serif">ELEVATE YOUR CONFIDENCE."</h2>
          <h2 className="text-white text-xl mb-4 ml-56 font-thin">Get ready to be served what you deserve</h2>
          <button onClick={handleBookNowClick} className="bg-teal-700 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded ml-52">Book Now</button>
        </div>
      </div>
     

      <div className="container mx-auto mt-24 px-4 flex">
        {/* Description */}
        <div className="text-gray-800 text-lg ml-32 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-black first-letter:mr-3 first-letter:float-left mt-9 ">
          <p><span className="font-serif">Welcome to Guys & Gals Salon, where style meets personality!</span></p>
          <p>Step into our sanctuary of beauty and refinement, where expert</p>
          <p>stylists and personalized service await. Whether you're seeking</p>
          <p>a bold new look or a subtle enhancement, our salon is dedicated</p>
          <p>to elevating your confidence and enhancing your natural charm.</p>
          <p>Experience the epitome of glamour and relaxation at Guys & Gals Salon</p>
          <p>where every visit promises a transformative journey to your most radiant self.</p>
        </div>

        {/* Image */}
        <div className="ml-auto">
          <img src="/desc_img.jpg" alt="" className="h-ful mr-32" style={{ maxHeight: '250px' }} />
        </div>
      </div>

      <div className="container mx-auto mt-24 flex flex-wrap justify-center">
        <div className="text-center text-2xl font-bold mb-4 w-full">POPULAR SERVICES</div>
        <div className="flex justify-center mt-4">
          <img src="./popularServices/img1.jpg" alt="" className="image rounded mr-4 mb-4 img1" style={{ maxWidth: '400px' }} />
          <img src="./popularServices/img2.jpg" alt="" className="image rounded mr-4 mb-4 img2" style={{ maxWidth: '400px' }} />
          <img src="./popularServices/img3.jpg" alt="" className="image rounded mr-4 mb-4 img3" style={{ maxWidth: '400px' }} />
        </div>

        <div className="flex justify-center mt-2">
          <img src="./popularServices/img4.jpg" alt="" className="image rounded mr-4 mb-4 img4" style={{ maxWidth: '400px' }} />
          <img src="./popularServices/img5.jpg" alt="" className="image rounded mr-4 mb-4 img5" style={{ maxWidth: '400px' }} />
          <img src="./popularServices/img6.jpg" alt="" className="image rounded mr-4 mb-4 img6" style={{ maxWidth: '400px' }} />
        </div>
      </div>

       {/* Reviews section */}
       <div className="text-center text-2xl font-bold mb-4 mt-12">Reviews</div>
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {/* Review data mapping */}
          {data.map((d, index) => (
            <div key={index} className="w-full flex justify-center">
              <Review {...d} /> 
            </div>
          ))}
        </Slider>
      </div>
      
      <div className="mt-12">
        <Footer />
      </div>
      
      {/* Booking form overlay */}
      {showBookingForm && <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
        <BookingForm onClose={handleCloseBookingForm} />
      </div>}
    </div>
    
  );

}

// Define review data
const data = [
  {
    name: 'Doe',
    message: 'I had a fantastic experience at Guys & Gals Salon. The staff was friendly and professional, and I love my new haircut!',
    rating: 5,
  },
  {
    name: 'Smith',
    message: 'The service at Guys & Gals Salon is top-notch. I always leave feeling pampered and rejuvenated. Highly recommend!',
    rating: 4,
  },
  {
    name: 'Asok',
    message: 'The service at Guys & Gals Salon is top-notch. I always leave feeling pampered and rejuvenated. Highly recommend!',
    rating: 4,
  },
  {
    name: 'Timbal',
    message: 'The service at Guys & Gals Salon is top-notch. I always leave feeling pampered and rejuvenated. Highly recommend!',
    rating: 4,
  },
  {
    name: 'Lorigas',
    message: 'The service at Guys & Gals Salon is top-notch. I always leave feeling pampered and rejuvenated. Highly recommend!',
    rating: 4,
  },
  {
    name: 'Ambot',
    message: 'The service at Guys & Gals Salon is top-notch. I always leave feeling pampered and rejuvenated. Highly recommend!',
    rating: 4,
  },
];

// Review component
const Review = ({ name, message, rating }) => (
  <div className="bg-white w-64 shadow-lg rounded-lg overflow-hidden p-4">
    <p className="text-gray-800 text-lg">{message}</p>
    <div className="flex justify-between items-center mt-4">
      <div className="flex items-center">
        <span className="text-gray-600 font-semibold">{name}</span>
        <div className="ml-2 flex">
          {[...Array(rating)].map((_, index) => (
            <FaStar key={index} className="text-yellow-500 mr-1" />
          ))}
        </div>
      </div>
      <div className="flex items-center">
        <FaThumbsUp className="text-green-500 mr-2" />
        <FaThumbsDown className="text-red-500" />
      </div>
    </div>
  </div>
);

export default UserPage;
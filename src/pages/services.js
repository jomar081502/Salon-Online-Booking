import React from 'react';
import { useState } from 'react';
import Footer from '../components/footer';
import BookingForm from './BookingForm';
import { NavLink, Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';


const ServicesPage = () => {
    const [showBookingForm, setShowBookingForm] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    const toggleProfileMenu = () => {
      setShowProfileMenu(!showProfileMenu);
    };

    const handleBookNowClick = () => {
      setShowBookingForm(true);
    };
  
    const handleCloseBookingForm = () => {
      setShowBookingForm(false);
    };

    
  
  return (
    <div>
      <div className="rounded-md bg-[#cd668855] p-2"> {/* Adjusted width */}
          <div className="text-sm font-semibold text-center text-gray-600">Call Us: +63 998 9099 129</div>
          <div className="text-sm font-semibold  text-center text-gray-600">Opening Hours: Mon-Fri 9:00 AM - 6:00 PM</div>
        </div>
       <header className=" sticky top-0 z-50">
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
            <FaUser className="inline-block mr-2" style={{height: '30px', width: '30px'}} /> 
          </button>
                {showProfileMenu && (
                  <div className="absolute top-10 right-0 bg-white border border-gray-200 rounded-md shadow-lg">
                    <Link to="/profile" className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                    <Link to="/" className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</Link>
                  </div>
                )}
              </div>
              {/* End of Profile Dropdown */}
            </div>
          </div>  
        </nav>
      </header>
      <div className="relative bottom-20 mt-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <img src="/s_cover.jpg" alt="" className="w-full" style={{ maxHeight: '730px' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-white text-3xl font-bold mb-4 font-serif">"ELEVATE YOUR LOOK,</h2>
          <h2 className="text-white text-3xl font-bold mb-4 font-serif">ELEVATE YOUR CONFIDENCE."</h2>
          <h2 className="text-white text-xl mb-4 font-thin">Get ready to be served what you deserve</h2>
          <button onClick={handleBookNowClick} className="bg-teal-700 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded">Book Now</button>
        </div>
      </div>

    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Services Offered</h1>
      {/* first row */}
      <div className="ml-20 mt-10">
      <div className="flex justify-center mt-4">
        <div className="image-container rounded mr-4 mb-4  h-72">
          <img src="./servicesOffered/SO_img1.jpg" alt="" className="image" style={{width: '250px', height:'180px'  }} />
          <div className="p-4">
            <h2 className="text-lg font-bold">Hair Trim</h2>
            <p className="text-sm">Trimming the hair to maintain or shape the desired length and style.</p>
          </div>
        </div>
        <div className="image-container rounded mr-4 mb-4  h-72">
          <img src="./servicesOffered/SO_img2.jpg" alt="" className="image" style={{width: '250px', height:'180px' }} />
          <div className="p-4">
            <h2 className="text-lg font-bold">Hair Color</h2>
            <p className="text-sm">Applying dye to the hair to change or enhance its color.</p>
          </div>
        </div>
        <div className="image-container rounded mr-4 mb-4  h-72">
          <img src="./servicesOffered/SO_img3.jpg" alt="" className="image" style={{ width: '250px', height:'180px'  }} />
          <div className="p-4">
            <h2 className="text-lg font-bold">Hot Oil</h2>
            <p className="text-sm">Massaging heated oil into the hair and scalp to nourish and moisturize.</p>
          </div>
        </div>
        <div className="image-container rounded mr-4 mb-4 h-72">
          <img src="./servicesOffered/SO_img4.jpg" alt="" className="image" style={{ width: '250px', height:'180px' }} />
          <div className="p-4">
            <h2 className="text-lg font-bold">Balayage</h2>
            <p className="text-sm">Painting hair dye onto sections of hair to create natural-looking highlights.</p>
          </div>
        </div>
      </div>

      {/* 2nd row */}
      <div className="flex justify-center mt-3">
        <div className="image-container rounded mr-4 mb-4  h-72">
          <img src="./servicesOffered/SO_img5.jpg" alt="" className="image" style={{ width: '250px', height:'180px' }} />
          <div className="p-4">
            <h2 className="text-lg font-bold">Hair Rebond</h2>
            <p className="text-sm">Straighten and smoothen your hair for a sleek and polished look.</p>
          </div>
        </div>
        <div className="image-container rounded mr-4 mb-4  h-72">
          <img src="./servicesOffered/SO_img6.jpg" alt="" className="image" style={{width: '250px', height:'180px'  }} />
          <div className="p-4">
            <h2 className="text-lg font-bold">Hair Botox</h2>
            <p className="text-sm">Using a conditioning treatment to rejuvenate and repair damaged hair.</p>
          </div>
        </div>
        <div className="image-container rounded mr-4 mb-4  h-72">
          <img src="./servicesOffered/SO_img7.jpg" alt="" className="image" style={{width: '250px', height:'180px'  }} />
          <div className="p-4">
            <h2 className="text-lg font-bold">Keratin</h2>
            <p className="text-sm">Applying a protein treatment to smooth and strengthen the hair.</p>
          </div>
        </div>
        <div className="image-container rounded mr-4 mb-4  h-72">
          <img src="./servicesOffered/SO_img8.jpg" alt="" className="image" style={{width: '250px', height:'180px'  }} />
          <div className="p-4">
            <h2 className="text-lg font-bold">Highlights</h2>
            <p className="text-sm">Add dimension and brightness to your hair with strategic highlighting.</p>
          </div>
        </div>
      </div>

      {/* 3rd row */}
      <div className="flex justify-center mt-3">
        <div className="image-container rounded mr-4 mb-4  h-72">
          <img src="./servicesOffered/SO_img9.jpg" alt="" className="image" style={{width: '250px', height:'180px' }} />
          <div className="p-4">
            <h2 className="text-lg font-bold">Foot Spa</h2>
            <p className="text-sm">Soaking the feet in warm water with essential oils, followed by exfoliation and massage.</p>
          </div>
        </div>
        <div className="image-container rounded mr-4 mb-4  h-72">
            <img src="./servicesOffered/SO_img10.jpg" alt="" className="image" style={{width: '250px', height:'180px'  }} />
            <div className="p-4">
              <h2 className="text-lg font-bold">Manicure</h2>
              <p className="text-sm"> Trimming, shaping, and polishing the nails, often accompanied by hand massage.</p>
            </div>
          </div>
          <div className="image-container rounded mr-4 mb-4  h-72">
            <img src="./servicesOffered/SO_img11.jpg" alt="" className="image" style={{width: '250px', height:'180px'  }} />
            <div className="p-4">
              <h2 className="text-lg font-bold">Pedicure</h2>
              <p className="text-sm">Similar to a manicure, but for the feet, including nail care  and foot massage.</p>
            </div>
          </div>
          <div className="image-container rounded mr-4 mb-4  h-72">
            <img src="./servicesOffered/SO_img12.jpg" alt="" className="image" style={{ width: '250px', height:'180px'  }} />
            <div className="p-4">
              <h2 className="text-lg font-bold">Foot Massage</h2>
              <p className="text-sm">Applying pressure to specific points on the feet to promote relaxation and alleviate tension.</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-3">
        <div className="image-container rounded mr-4 mb-4  h-72">
          <img src="./servicesOffered/SO_img13.jpg" alt="" className="image" style={{ width: '250px', height:'180px'  }} />
          <div className="p-4">
            <h2 className="text-lg font-bold">Nail Gel</h2>
            <p className="text-sm">Applying gel polish to the nails for a long-lasting and glossy finish.</p>
          </div>
        </div>
        <div className="image-container rounded mr-4 mb-4  h-72">
          <img src="./servicesOffered/SO_img14.jpg" alt="" className="image" style={{ width: '250px', height:'180px'  }} />
          <div className="p-4">
            <h2 className="text-lg font-bold">Waxing (Armpit & Legs)</h2>
            <p className="text-sm">Removing unwanted hair from the armpits and legs using hot wax.</p>
          </div>
        </div>
        <div className="image-container rounded mr-4 mb-4 h-72">
          <img src="./servicesOffered/SO_img15.jpg" alt="" className="image" style={{ width: '250px', height:'180px' }} />
          <div className="p-4">
            <h2 className="text-lg font-bold">Hair & Make-up</h2>
            <p className="text-sm">Styling the hair and applying cosmetics to enhance the appearance for special occasions or events</p>
          </div>
        </div>
       </div>
       </div>

       <div className="text-center mt-32 text-gray-600 w-9/12 ml-48 border rounded ">
        <p className="text-lg">Note: Prices are quoted at a minimum and may vary depending on hair length. Please consult with your stylist for possible additional charges.</p>
      </div>

      <div className="flex mb-8 mt-14 justify-center">
        <div className="mr-16">
          <h2 className="text-4xl font-bold mb-4">Combo Rates</h2>
          <ul className="pl-4 text-2xl">
            <li>Hair Spa + Haircut - 499</li>
            <li>Perm Curl with Treatment - 1,299</li>
            <li>Rebond + Color + Treatment - 1,999</li>
            <li>Rebond + Keratin - 1,999</li>
            <li>Rebond + Single Color - 1,499</li>
            <li>Brazilian Blowout + Hair Color - 1,499</li>
            <li>Balayage - 1,499</li>
            <li>Highlights - 499</li>
            <li>Hair Cut - 150</li>
          </ul>
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-4">Nail Services</h2>
          <ul className="pl-4 text-2xl">
            <li>Gel Polish - 349</li>
            <li>Soft Gel Nail Extension - 499</li>
            <li>Foot Spa with Manicure & Pedicure - 349</li>
            <li>Foot Spa with Manicure & Pedicure & Gel Polish - 699</li>
            <li>Paraffin Wax Treatment - 199</li>
            <li>Manicure - 100</li>
            <li>Pedicure - 100</li>
          </ul>
        </div>
        </div>
        
      </div>
      <div className="mt-12">
        <Footer/>
      </div>
      {showBookingForm && <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
        <BookingForm onClose={handleCloseBookingForm} />
      </div>}
      </div>
  );
}

export default ServicesPage;

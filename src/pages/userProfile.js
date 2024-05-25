import React, { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc  } from "firebase/firestore"; 
import { db } from '../Firebase/firebase';
import BookingForm from './BookingForm';
import BookingList from './bookingList';

const UserProfile = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [upcomingBookings, setUpcomingBookings] = useState([]);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [editingBooking, setEditingBooking] = useState(null);

  const fetchBookings = async () => {
    const querySnapshot = await getDocs(collection(db, "bookings"));
    const bookings = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    setUpcomingBookings(bookings);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const handleBookingSubmit = async (bookingDetails) => {
    try {
      if (editingBooking) {
        const bookingDoc = doc(db, "bookings", editingBooking.id);
        await updateDoc(bookingDoc, bookingDetails);
        setEditingBooking(null); // Clear editing state after update
      } else {
        await addDoc(collection(db, "bookings"), bookingDetails);
      }
      fetchBookings(); // Fetch updated bookings after adding or updating one
      setShowBookingForm(false); // Close the form after submission
    } catch (error) {
      console.error("Error adding/updating booking: ", error);
    }
  };

  const deleteBooking = async (index, id) => {
    try {
      await deleteDoc(doc(db, "bookings", id));
      fetchBookings(); // Fetch updated bookings after deleting one
    } catch (error) {
      console.error("Error deleting booking: ", error);
    }
  };

  const editBooking = (index) => {
    const booking = upcomingBookings[index];
    setEditingBooking(booking);
    setShowBookingForm(true); // Open the booking form for editing
  };

  const openBookingForm = () => {
    setShowBookingForm(true); // Set showBookingForm to true
  };

  const closeBookingForm = () => {
    setShowBookingForm(false); // Set showBookingForm to false
    setEditingBooking(null); // Clear editing state if form is closed without saving
  };

  return (
    <div>
      <div className="rounded-md bg-[#cd668855] p-2">
        <div className="text-sm font-semibold text-center text-gray-600">Call Us: +63 998 9099 129</div>
        <div className="text-sm font-semibold text-center text-gray-600">Opening Hours: Mon-Fri 9:00 AM - 6:00 PM</div>
      </div>
      <header className="sticky top-0 z-50">
        <nav className="sticky top-0 z-50 flex items-center justify-between flex-wrap p-6 h-24">
          <div className="header-background flex items-center flex-shrink-0 text-white mr-6">
            <img src={'/logo.png'} alt="Logo" className="logo mr-6 ml-10" />
            <div>
              <span className="font-semibold text-xl tracking-tight" style={{ color: '#D20062', fontSize: '24px', fontFamily: 'Helvetica Neue' }}>Guys & Gals</span>
              <span className="font-semibold text-xl tracking-tight" style={{ color: '#D6589F', fontSize: '24px', fontFamily: 'Helvetica Neue' }}> Salon</span>
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
              <div className="relative">
                <button onClick={toggleProfileMenu} className="block mt-0 lg:inline-block lg:mt-0 font-semibold text-black hover:text-slate-600 ml-7">
                  <FaUser className="inline-block mr-2" style={{ height: '30px', width: '30px' }} />
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

      <div style={{ backgroundColor: '#b8e1e0', minHeight: '100vh' }}>
      <div className="flex items-center space-x-4">
        <img src={'/profile.png'} alt="Profile" className="ml-20 mt-10 rounded-full" style={{ height: '200px', width: '200px' }} />
        <div className="text-3xl font-semibold">Your Name</div>
      </div>

      {/* Booking form and list */}
      <div className="profile_bg">
      <div className="mt-10 flex justify-center ml-32 w-5/6">
      <div className="container mx-auto">
        <button onClick={openBookingForm} className="bg-teal-700 mt-8 text-white font-semibold py-2 px-4 rounded-md hover:bg-teal-900 transition-colors duration-300 mb-4">Book an Appointment</button>
        {showBookingForm && (
  <BookingForm onClose={closeBookingForm} handleBookingSubmit={handleBookingSubmit} initialBookingDetails={editingBooking} />
)}
        <BookingList bookings={upcomingBookings} deleteBooking={deleteBooking} editBooking={editBooking} />
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default UserProfile;

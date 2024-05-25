import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { collection, addDoc, doc, updateDoc } from "firebase/firestore"; 
import { db } from '../Firebase/firebase';

const BookingForm = ({ onClose, handleBookingSubmit, initialBookingDetails }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showBookingMessage, setShowBookingMessage] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false); // Track if the form is in edit mode
  const [bookingId, setBookingId] = useState(null); // Store the ID of the booking being edited

  // Populate form fields if initial booking details are provided
  useEffect(() => {
    if (initialBookingDetails) {
      setName(initialBookingDetails.name);
      setEmail(initialBookingDetails.email);
      setDate(initialBookingDetails.date);
      setTime(initialBookingDetails.time);
      setSelectedServices(initialBookingDetails.services.map(service => ({ value: service, label: service })));
      setSelectedStaff({ value: initialBookingDetails.staff, label: initialBookingDetails.staff });
      setIsEditMode(true);
      setBookingId(initialBookingDetails.id);
    }
  }, [initialBookingDetails]);

  const options = [
    { value: 'HairTrim', label: 'Hair Trim' },
    { value: 'HairColor', label: 'Hair Color' },
    { value: 'HotOil', label: 'Hot Oil' },
    { value: 'Balayage', label: 'Balayage' },
    { value: 'HairRebond', label: 'Hair Rebond' },
    { value: 'HairBotox', label: 'Hair Botox' },
    { value: 'Keratin', label: 'Keratin' },
    { value: 'Highlights', label: 'Highlights' },
    { value: 'FootSpa', label: 'Foot Spa' },
    { value: 'Manicure', label: 'Manicure' },
    { value: 'Pedicure', label: 'Pedicure' },
    { value: 'FootMassage', label: 'Foot Massage' },
    { value: 'NailGel', label: 'Nail Gel' },
    { value: 'Waxing', label: 'Waxing (Armpit & Legs)' },
    { value: 'HnM', label: 'Hair & Make-up' },
  ];

  const staffOptions = [
    { value: 'Sophia', label: 'Sophia Styles' },
    { value: 'Leo', label: 'Leo Luxe' },
    { value: 'Emma', label: 'Emma Elegance' },
    { value: 'Oliver', label: 'Oliver Opulence' },
    { value: 'Ava', label: 'Ava Artistry' },
    { value: 'Noah', label: 'Noah Noble' },
    { value: 'Isabella', label: 'Isabella Iconic' },
    { value: 'Liam', label: 'Liam Luxury' },
    { value: 'Mia', label: 'Mia Magnificence' },
    { value: 'Lucas', label: 'Lucas Lavish' },
    { value: 'Amelia', label: 'Amelia Aristocrat' },
    // Add more staff options as needed
  ];
  
  const handleServiceSelectChange = (selectedOptions) => {
    setSelectedServices(selectedOptions);
  };

  const handleStaffSelectChange = (selectedOption) => {
    setSelectedStaff(selectedOption);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleConfirm = async () => {
    try {
      if (isEditMode && bookingId) {
        // Update existing booking
        const bookingDocRef = doc(db, "bookings", bookingId);
        await updateDoc(bookingDocRef, {
          name: name,
          email: email,
          date: date,
          time: time,
          services: selectedServices.map(service => service.value),
          staff: selectedStaff.value,
          rescheduled: true // Set rescheduled flag to true
        });
      } else {
        // Add a new booking
        await addDoc(collection(db, "bookings"), {
          name: name,
          email: email,
          date: date,
          time: time,
          services: selectedServices.map(service => service.value),
          staff: selectedStaff.value
        });
      }

      setShowConfirmation(false);
      setShowBookingMessage(true);
     
      setTimeout(() => {
        setShowBookingMessage(false);
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Error submitting booking: ", error);
    }
  };

  const handleCancel = () => {
    setName('');
    setEmail('');
    setDate('');
    setTime('');
    setSelectedServices([]);
    setSelectedStaff(null);
    onClose();
  };

  return (
    <div className="max-w-md w-96 mx-auto bg-[#7AB2B2] p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold">Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-400" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-400" required />
        </div>
        <div className="mb-4">
          <label htmlFor="Date" className="block text-sm font-semibold">Date</label>
          <input type="date" id="Date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-400" required />
        </div>
        <div className="mb-4">
          <label htmlFor="checkOut" className="block text-sm font-semibold">Time</label>
          <div className="flex items-center">
            <input type="time" id="Time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-400" required />
            <div className="ml-2 text-sm">Selected time: {time}</div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="services" className="block text-sm font-semibold">Services</label>
          <Select
            id="services"
            options={options}
            value={selectedServices}
            onChange={handleServiceSelectChange}
            isMulti
            className="w-full mt-1"
            classNamePrefix="select"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="staff" className="block text-sm font-semibold">Staff</label>
          <Select
            id="staff"
            options={staffOptions}
            value={selectedStaff}
            onChange={handleStaffSelectChange}
            className="w-full mt-1"
            classNamePrefix="select"
          />
        </div>
        <div className="flex justify-between">
          <button type="submit" className="w-1/2 bg-teal-700 text-white font-semibold py-2 px-2 rounded-md hover:bg-teal-900 transition-colors duration-300">Submit</button>
          <button type="button" onClick={handleCancel} className="w-1/2 bg-[#B2533E] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#683127] transition-colors duration-300 ml-3">Cancel</button>
        </div>
      </form>
      {/* Confirmation message */}
      {showConfirmation && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-md shadow-md">
            <p className="text-xl font-semibold mb-4">Are you sure?</p>
            <div className="flex justify-between">
              <button onClick={handleConfirm} className="bg-teal-700 text-white font-semibold py-2 px-4 rounded-md hover:bg-teal-900 transition-colors duration-300">Yes</button>
              <button onClick={() => setShowConfirmation(false)} className="bg-[#B2533E] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#683127] transition-colors duration-300 ml-3">No</button>
            </div>
          </div>
        </div>
      )}
      {showBookingMessage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-md shadow-md">
            <p className="text-xl font-semibold mb-4">Appointment {isEditMode ? 'Rescheduled' : 'Booked'}!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingForm;

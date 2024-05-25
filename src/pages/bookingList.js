import React, { useState } from 'react';

const BookingList = ({ bookings, deleteBooking, editBooking }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const handleDeleteConfirmation = (index) => {
    setShowConfirmation(true);
    setDeleteIndex(index);
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
    setDeleteIndex(null);
  };

  const handleConfirmDelete = () => {
    deleteBooking(deleteIndex, bookings[deleteIndex].id); // Pass the id to identify the booking in Firebase
    setShowConfirmation(false);
    setDeleteIndex(null);
  };

  return (
    <div className="flex flex-wrap">
      <h2 className="text-2xl font-bold w-full mb-4 mt-5">Upcoming Appointments</h2>
      {bookings.map((booking, index) => (
        <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 p-4">
          <div className="border rounded-md p-4">
            <div>
              <strong>Name:</strong> {booking.name}
            </div>
            <div>
              <strong>Email:</strong> {booking.email}
            </div>
            <div>
              <strong>Date:</strong> {booking.date}
            </div>
            <div>
              <strong>Time:</strong> {booking.time}
            </div>
            <div>
              <strong>Services:</strong> {booking.services.join(', ')}
            </div>
            <div>
              <strong>Staff:</strong> {booking.staff}
            </div>
            <div className="mt-2">
              <button
                onClick={() => editBooking(index)}
                className="bg-blue-500 text-white px-2 py-1 rounded-md">Edit</button>
              <button
                onClick={() => handleDeleteConfirmation(index)}
                className="bg-red-500 text-white ml-2 px-2 py-1 rounded-md mr-2">Delete</button>
            </div>
          </div>
        </div>
      ))}
      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-red-50 bg p-8 rounded-md">
            <p className="mb-4">Are you sure you want to cancel your appointment?</p>
            <div className="flex justify-center">
              <button onClick={handleCancelDelete} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-4 py-2 rounded-md mr-2">Cancel</button>
              <button onClick={handleConfirmDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-md">Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingList;

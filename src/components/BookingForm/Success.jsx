import React from 'react';

const Success = ({ bookingDetails }) => {
  return (
    <div className="alert alert-success" role="alert">
      <h4 className="alert-heading">Booking successful!</h4>
      <p>
        Thank you for booking {bookingDetails.movie} at {bookingDetails.theater}.
        Your booking ID is {bookingDetails.bookingID}.
      </p>
      <hr />
      <p className="mb-0">
        Please arrive at the theater at least 30 minutes before the show starts.
        Enjoy the movie!
      </p>
    </div>
  );
};

export default Success;
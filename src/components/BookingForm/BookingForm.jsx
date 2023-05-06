import React, { useState } from "react";

const BookingForm = ({ show }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = { name, email, phone, show };
    setBookingDetails(details);
    localStorage.setItem("bookingDetails", JSON.stringify(details));
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  return (
    <div>
      <h2>Booking Form</h2>
      {bookingDetails ? (
        <div>
          <p>Booking Successful!</p>
          <p>Details:</p>
          <ul>
            <li>Name: {bookingDetails.name}</li>
            <li>Email: {bookingDetails.email}</li>
            <li>Phone: {bookingDetails.phone}</li>
            <li>Show: {bookingDetails.show.name}</li>
          </ul>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
            className="form-control"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            required
            />
          </div>
          <div className="form-group">
            <label htmlFor="movie">Movie</label>
            <input
                    type="text"
                    className="form-control"
                    id="movie"
                    value={show.name}
                    readOnly
                    />
          </div>
          <button type="submit" className="btn btn-primary">
            Book Now
          </button>
        </form>
    )}
    </div>
);
};

export default BookingForm;

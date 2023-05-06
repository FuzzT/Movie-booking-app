import React, { useState, useEffect } from "react";
import ShowList from "./components/ShowList/ShowList";
import ShowDetails from "./components/ShowDetails/ShowDetails";
import BookingForm from "./components/BookingForm/BookingForm";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);

  const handleBookTicket = () => {
    setShowBookingForm(true);
  };

  return (
    <div>
    <Header />
    <div className="container">
      <div className="row">
        <div className="col-md-4 mt-5">
          <ShowList shows={shows} onSelectShow={setSelectedShow} />
          {selectedShow && (
            <button className="btn btn-primary mt-3" onClick={handleBookTicket}>
              Book Tickets
            </button>
          )}
        </div>
        <div className="col-md-8 mt-5 p-4">
          {selectedShow && <ShowDetails show={selectedShow} />}
          {showBookingForm && <BookingForm show={selectedShow} />}
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default App;
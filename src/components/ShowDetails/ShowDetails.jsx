import React from "react";
import ShowSummary from "./ShowSummary";

const ShowDetails = ({ show }) => {
  return (
    <div>
      {show ? (
        <div>
          <h2>{show.name}</h2>
          {show.image && (
            <img
              src={show.image.medium}
              alt={show.name}
              className="img-fluid mb-3"
            />
          )}
          <ShowSummary summary={show.summary} />
        </div>
      ) : (
        <p>Select a show from the list</p>
      )}
    </div>
  );
};

export default ShowDetails;

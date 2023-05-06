import React from "react";
import ShowListItem from "./ShowListItem";

const ShowList = ({ shows, onSelectShow }) => {
  return (
    <div>
      <h2>TV Shows</h2>
      <hr />
      <ul className="list-group">
        {shows.map((show) => (
          <ShowListItem
            key={show.show.id}
            show={show.show}
            onSelectShow={onSelectShow}
          />
        ))}
      </ul>
    </div>
  );
};

export default ShowList;

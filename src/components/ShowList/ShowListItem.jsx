import React from "react";

const ShowListItem = ({ show, onSelectShow }) => {
  const handleClick = () => {
    onSelectShow(show);
  };

  return (
    <li className="list-group-item" onClick={handleClick} style={{ cursor: 'pointer' }}>
      {show.name}
    </li>
  );
};

export default ShowListItem;

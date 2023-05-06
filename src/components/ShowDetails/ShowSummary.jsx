import React from "react";

const ShowSummary = ({ summary }) => {
  return <div dangerouslySetInnerHTML={{ __html: summary }}></div>;
};

export default ShowSummary;
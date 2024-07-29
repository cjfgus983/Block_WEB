import React from "react";
import "./Card.css";

const calculateDday = (deadline) => {
  const today = new Date();
  const endDate = new Date(deadline);
  const diffTime = endDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? `D-${diffDays}` : "D-Day";
};

const Card = ({ title, description, imageUrl, organization, deadline }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-deadline">{calculateDday(deadline)}</div>
      <div className="card-content">
        <p className="card-organization">{organization}</p>
        <h3 className="card-title">{title}</h3>
        {/* <p className="card-description">{description}</p> */}
      </div>
    </div>
  );
};

export default Card;

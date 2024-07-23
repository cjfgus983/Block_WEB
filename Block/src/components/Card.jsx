import React from "react";
import "./Card.css";

const Card = ({ title, description, imageUrl, organization }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-organization">{organization}</p>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;

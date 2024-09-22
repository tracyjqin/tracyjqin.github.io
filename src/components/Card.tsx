import React from "react";

interface CardProps {
  company: string;
  date: string;
  description: string;
  image?: string;
}

const Card: React.FC<CardProps> = ({ company, date, description, image }) => {
  return (
    <div>
      <div className="card">
        <h2>{company}</h2>
        <h4 style={{ margin: "-5px" }}>{description}</h4>
        <p>{date}</p>
        <img
          src={image}
          style={{ width: "90%", height: "60%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default Card;

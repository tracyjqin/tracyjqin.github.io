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
        <a style={{ margin: "-5px", fontWeight: "" }}>{description}</a>
        <p style={{ fontSize: "12px" }}>{date}</p>
        <img
          src={image}
          style={{ width: "90%", height: "60%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default Card;

import React from "react";

const Card = ({ children }) => {
  return (
    <div className="card bg-(--color-bg-card) rounded-lg shadow-md p-6 transition-transform duration-300 hover:-translate-y-2">
      {children}
    </div>
  );
};

export default Card;

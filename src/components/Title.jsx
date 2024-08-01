import React from "react";

export const Title = ({ titre, sousTitre }) => {
  return (
    <div className="title-container">
      <h1>{titre}</h1>
      <h3>{sousTitre}</h3>
    </div>
  );
};

import React, { useState } from "react";
import "./About.css";
const About = (props) => {
  const removeDataFromStorage = () => {
    try {
      localStorage.removeItem("lists");
      props.setfavt([]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="header">
        <h1>Express yourself with the perfect GIF, every time</h1>
        <button className="btn-2" onClick={() => removeDataFromStorage()}>
          Delete
        </button>
      </div>
      <div className="list">
        {props.favtdata.map((gif, index) => {
          return (
            <div key={index} id={index} className="giphy-images">
              <img
                src={gif.images.downsized?.url}
                alt={gif.title}
                className="giphy-image"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default About;

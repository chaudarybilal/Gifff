import React, { useState, useEffect } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import "./About.css";

const About = (props) => {
  const deleteitem = (gif) => {
    props.setfavt((gif) => {
      console.log("cliked");
      console.log(gif, "id");
      return props.favtdata.filter((gif, idnex) => {
        return gif !== idnex;
      });
    });
  };
  return (
    <>
      <div className="header">
        <h1>Express yourself with the perfect GIF, every time</h1>
      </div>
      <div className="list">
        {props.favtdata.map((gif, index) => {
          return (
            <div key={index} gif={index} className="giphy-images">
              <img
                src={gif.images.downsized?.url}
                alt={gif.title}
                className="giphy-image"
              />
              <FaRegTrashAlt onClick={() => deleteitem(gif)} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default About;

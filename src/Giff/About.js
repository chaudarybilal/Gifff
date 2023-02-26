import React from "react";
import Giphy from "./Giphy";
import "./Gifff.css";
const About = (props) => {
  console.log("gifs", props.favtdata);
  return (
    <>
      <div className="list">
        {props.favtdata.map((gif, index) => {
          return (
            <div key={index} id={index} className="gif-sec">
              <div className="add">
                <img src={gif.images.downsized?.url} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default About;

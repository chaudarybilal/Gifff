import React, { useContext, useState, useEffect } from "react";
import { ContextData } from "./Giphy";

const About = () => {
  const { gifs, setGifs } = useContext(ContextData);
  const getLocalItem = () => {
    let list = localStorage.getItem("lists");
    if (list) {
      return JSON.parse(localStorage.getItem("lists"));
    } else {
      return [];
    }
  };
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(gifs));
  }, [gifs]);

  return (
    <>
      <div className="list">
        {gifs.map((gif, index) => {
          return (
            <div key={index} id={index} className="gif-sec">
              <div className="add">
                <img
                  width="10px"
                  height="200px"
                  src={gif.images.downsized?.url}
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default About;

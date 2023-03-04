import About from "./About";

import "./Gifff.css";
import { FaCheckSquare } from "react-icons/fa";
import { useState, useEffect } from "react";

const Giphy = (props) => {
  const getLocalItem = () => {
    let list = localStorage.getItem("lists");
    if (list) {
      return JSON.parse(localStorage.getItem("lists"));
    } else {
      return [list];
    }
  };
  const [search, setSearch] = useState("");

  const [gifs, setGifs] = useState(getLocalItem());

  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(100);

  const lmt = 10;
  const apikey = "G67CqXGOL4aPuxBdHv4P1d7PGXc4RTNy";
  var search_url =
    "https://api.giphy.com/v1/gifs/search?q=" +
    search +
    "&key=" +
    apikey +
    "&limit=" +
    lmt +
    "&offset=" +
    offset;

  const onClickhandler = () => {
    console.log("search_url", search_url);

    if (search.length > 0) {
      setLoading(true);

      fetch(search_url)
        .then((response) => {
          setLoading(false);
          return response.json();
        })

        .then((res) => {
          console.log("res", res);

          setGifs([...gifs, ...res.data]);
        })
        .catch((e) => {
          console.log("error", e);
          setLoading(false);
        });
    }
  };
  useEffect(() => {
    onClickhandler();
  }, [offset]);
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(gifs));
  }, [gifs]);
  console.log("gifsdata", gifs);

  const addToFavt = (obj) => {
    props.setfavt([...props.favtdata, obj]);
  };
  const removeDataFromStorage = () => {
    try {
      localStorage.removeItem("lists");
      props.setfavt([]);
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <>
      <div class="flexbox">
        <div class="search">
          <div>
            <input
              type="text"
              placeholder="Search hare"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="btnn">
          <button className="btn" onClick={onClickhandler}>
            Click Me
          </button>
        </div>
      </div>

      <div className="result">
        {loading ? (
          <div className="loading">
            <div className="loader"></div>
          </div>
        ) : (
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
                    <FaCheckSquare onClick={() => addToFavt(gif)} />
                    <button
                      className="btn-2"
                      onClick={() => removeDataFromStorage(gif)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Giphy;

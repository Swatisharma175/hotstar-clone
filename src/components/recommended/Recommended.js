import React from "react";
import "./recommended.css";
import { useEffect } from "react";

const Recommended = () => {
  useEffect(() => {
    let cardContainer = document.querySelectorAll(".card-container")[2];
    let preBtn = document.querySelectorAll(".pre-btn")[2];
    let nxtBtn = document.querySelectorAll(".nxt-btn")[2];
    let containerDimensions = cardContainer.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn.addEventListener("click", () => {
      cardContainer.scrollLeft += containerWidth - 200;
    });

    preBtn.addEventListener("click", () => {
      cardContainer.scrollLeft -= containerWidth + 200;
    });
  }, []);

  return (
    <div>
      <h1 className="title">Recommended For You</h1>

      <div className="movies-list">
        <button className="pre-btn" title="btn">
          <img src="/images/pre.png" alt="" />
        </button>
        <button className="nxt-btn" title="btn">
          <img src="/images/nxt.png" alt="" />
        </button>
        <div className="card-container">
          <div className="card">
            <img src="/images/poster 1.png" className="card-img" alt="" />
            <div className="card-body">
              <h2 className="name">movie name</h2>
              <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
              <button className="watchlist-btn">+ Watchlist</button>
            </div>
          </div>

          <div className="card">
            <img src="/images/poster 2.png" className="card-img" alt="" />
            <div className="card-body">
              <h2 className="name">movie name</h2>
              <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
              <button className="watchlist-btn">+ Watchlist</button>
            </div>
          </div>

          <div className="card">
            <img src="/images/poster 3.png" className="card-img" alt="" />
            <div className="card-body">
              <h2 className="name">movie name</h2>
              <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
              <button className="watchlist-btn">+ Watchlist</button>
            </div>
          </div>

          <div className="card">
            <img src="/images/poster 4.png" className="card-img" alt="" />
            <div className="card-body">
              <h2 className="name">movie name</h2>
              <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
              <button className="watchlist-btn">+ Watchlist</button>
            </div>
          </div>

          <div className="card">
            <img src="/images/poster 5.png" className="card-img" alt="" />
            <div className="card-body">
              <h2 className="name">movie name</h2>
              <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
              <button className="watchlist-btn">+ Watchlist</button>
            </div>
          </div>

          <div className="card">
            <img src="/images/poster 6.png" className="card-img" alt="" />
            <div className="card-body">
              <h2 className="name">movie name</h2>
              <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
              <button className="watchlist-btn">+ Watchlist</button>
            </div>
          </div>

          <div className="card">
            <img src="/images/poster 7.png" className="card-img" alt="" />
            <div className="card-body">
              <h2 className="name">movie name</h2>
              <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
              <button className="watchlist-btn">+ Watchlist</button>
            </div>
          </div>

          <div className="card">
            <img src="/images/poster 8.png" className="card-img" alt="" />
            <div className="card-body">
              <h2 className="name">movie name</h2>
              <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
              <button className="watchlist-btn">+ Watchlist</button>
            </div>
          </div>

          <div className="card">
            <img src="/images/poster 9.png" className="card-img" alt="" />
            <div className="card-body">
              <h2 className="name">movie name</h2>
              <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
              <button className="watchlist-btn">+ Watchlist</button>
            </div>
          </div>

          <div className="card">
            <img src="/images/poster 10.png" className="card-img" alt="" />
            <div className="card-body">
              <h2 className="name">movie name</h2>
              <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
              <button className="watchlist-btn">+ Watchlist</button>
            </div>
          </div>

          <div className="card">
            <img src="/images/poster 11.png" className="card-img" alt="" />
            <div className="card-body">
              <h2 className="name">movie name</h2>
              <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
              <button className="watchlist-btn">+ Watchlist</button>
            </div>
          </div>

          <div className="card">
            <img src="/images/poster 12.png" className="card-img" alt="" />
            <div className="card-body">
              <h2 className="name">movie name</h2>
              <h6 className="des">Lorem ipsum dolor sit amet consectetur.</h6>
              <button className="watchlist-btn">+ Watchlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommended;

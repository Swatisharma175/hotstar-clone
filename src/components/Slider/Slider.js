import "./Slider.css";

import React from "react";

const Slider = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-image">
              <img
                src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4453/1424453-h-838e7eb73942"
                className="w-60"
                alt="..."
              />
            </div>
            <div className="carousel-content-box">
              <div className="carousel-content">
                Crayon Shin-chan (Japanese: クレヨンしんちゃん, Hepburn: Kureyon
                Shin-chan), is a Japanese manga series written and illustrated
                by Yoshito Usui. Crayon Shin-chan made its first appearance in
                1990 in a Japanese weekly magazine called Weekly Manga Action,
                which was published by Futabasha. Due to the death of author
                Yoshito Usui, the manga in its original form ended on September
                11, 2009. A new manga began in the summer of 2010 by members of
                Usui's team,[5] titled New Crayon Shin-chan
                (新クレヨンしんちゃん, Shin Kureyon Shin-chan). Celebrating its
                30th consecutive year on air in 2022, an animated television
                adaptation began airing on TV Asahi in 1992 and is still ongoing
                on several television networks worldwide and has over 1000
                episodes. The show has been dubbed in 30 languages which aired
                in 45 countries.[6]{" "}
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="carousel-image">
              <img
                src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4248/1364248-h-04994afb88d4"
                className="w-60"
                alt="..."
              />
              <div className="carousel-image-box"></div>
            </div>
            <div className="carousel-content-box">
              <div className="carousel-content">
                <p>
                  Crayon Shin-chan (Japanese: クレヨンしんちゃん, Hepburn:
                  Kureyon Shin-chan), is a Japanese manga series written and
                  illustrated by Yoshito Usui. Crayon Shin-chan made its first
                  appearance in 1990 in a Japanese weekly magazine called Weekly
                  Manga Action, which was published by Futabasha. Due to the
                  death of author Yoshito Usui, the manga in its original form
                  ended on September 11, 2009. A new manga began in the summer
                  of 2010 by members of Usui's team,[5] titled New Crayon
                  Shin-chan (新クレヨンしんちゃん, Shin Kureyon Shin-chan).
                  Celebrating its 30th consecutive year on air in 2022, an
                  animated television adaptation began airing on TV Asahi in
                  1992 and is still ongoing on several television networks
                  worldwide and has over 1000 episodes. The show has been dubbed
                  in 30 languages which aired in 45 countries.[6]
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <br />
    </div>
  );
};

export default Slider;

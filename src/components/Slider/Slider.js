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
            <div className="carousel-image-box">
              <img
                src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4453/1424453-h-838e7eb73942"
                className="w-60"
                alt="..."
              />
              <div className="carousel-image-border-left"></div>
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
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="carousel-image-box">
              <img
                src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4248/1364248-h-04994afb88d4"
                className="w-60"
                alt="..."
              />
              <div className="carousel-image-border-left"></div>
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
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-image-box">
              <img
                src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5979/1425979-h-34e430222f41"
                className="w-60"
                alt="..."
              />
              <div className="carousel-image-border-left"></div>
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
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-image-box">
              <img
                src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5600/1425600-h-135c54b9c793"
                className="w-60"
                alt="..."
              />
              <div className="carousel-image-border-left"></div>
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
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-image-box">
              <img
                src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1331/641331-h"
                className="w-60"
                alt="..."
              />
              <div className="carousel-image-border-left"></div>
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

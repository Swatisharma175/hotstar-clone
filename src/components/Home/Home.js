import React from "react";
import "./Home.css";
import Slider from "../Slider/Slider";
import Popular from "../Popular/Popular";
import Recommended from "../Recommended/Recommended";
import Trending from "../Trending/Trending";
import VideoCard from "../VideoCard/VideoCard";

const Home = () => {
  return (
    <div>
      <Slider />
      <VideoCard />
      <Trending />
      <Popular />
      <Recommended />
    </div>
  );
};

export default Home;

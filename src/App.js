import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Carousel from "./components/carousel/Carousel";
import Slider from "./components/Slider/Slider";
import VideoCard from "./components/video-cards/VideoCard";
import Trending from "./components/trending/Trending";
import Popular from "./components/popular/Popular";
import Recommended from "./components/recommended/Recommended";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Carousel /> */}
      <Slider />
      <VideoCard />
      <Trending />
      <Popular />
      <Recommended />
    </div>
  );
}

export default App;

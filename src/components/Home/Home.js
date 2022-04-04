import React from "react";
import HomeReviews from "../HomeReviews/HomeReviews";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="container home-banner mx-auto h-full">
        <div className="text-left my-auto">
          <h1 className="text-6xl font-mono font-bold">Your Next Cloth</h1>
          <h1 className="text-6xl text-blue-600 font-mono font-extrabold">
            Your Best Cloth
          </h1>
          <p className="w-3/4 text-justify pt-6 text-xl text-gray-700">
            We have many kind of TShirt collection. Our customers are happy
            because we delivers the product at time and our products are great
            in quality.
          </p>
          <div className="mt-5">
            <button className="px-6 py-4 bg-blue-100 rounded-lg hover:bg-blue-200 duration-300">
              Live Demo
            </button>
          </div>
        </div>
        <div>
          <img src="tshirt.jpg" alt="tshirt" />
        </div>
      </div>
      <HomeReviews></HomeReviews>
    </div>
  );
};

export default Home;

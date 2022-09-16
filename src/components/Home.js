import Background from "../img/home1.jpg";
import React from "react";

const Home = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      className="w-screen h-screen bg-contain bg-no-repeat bg-bottom-left lg:bg-cover"
    ></div>
  );
};

export default Home;

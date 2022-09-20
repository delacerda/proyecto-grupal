import Background from "../img/home1.jpg";
import React from "react";

const Home = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      className="w-screen h-screen bg-no-repeat bg-bottom-left bg-cover"
    >
    </div>
  );
};

export default Home;

import Background from "../img/home2.jpg";
import React from "react";


const Home = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      className="w-screen h-screen bg-no-repeat bg-bottom-left bg-cover bg-center "
    >
    </div>
  );
};

export default Home;

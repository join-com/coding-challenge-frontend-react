import React from "react";
import "../App.css";
import Title from "./Title";
import Filter from "./Filter";
import BikeList from "./BikeContent";
import Pagination from "./Pagination";

function Home(props) {
  return (
    <div>
      <Title />
      <Filter />
      <BikeList {...props} />
      <Pagination {...props} />
    </div>
  );
}

export default Home;

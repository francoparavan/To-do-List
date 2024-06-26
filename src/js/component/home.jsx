import React from "react";
import Todo from "./Todo";
import bg from "../../img/bg-tdl.png";

const Home = () => {
  return (
    <section className="background" style={{ backgroundImage: `url(${bg})` }}>
      <Todo />
    </section>
  );
};

export default Home;

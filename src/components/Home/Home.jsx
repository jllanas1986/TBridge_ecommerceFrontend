import { Carousel } from "antd";
import React from "react";
import "./Home.scss";

const contentStyle = {
  height: "475px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  fontSize: "40px",
  textShadow: "5px 5px 5px #aaa"
  // background: "#364d79",
};

const Home = () => {
  return (
    <Carousel autoplay>
      <div className="jugueteria">
        <h3 style={contentStyle}>JUGUETERIA</h3>
      </div>
      <div className="cosmetica">
        <h3 style={contentStyle}>COSMETICA</h3>
      </div>
      <div className="electrodomesticos">
        <h3 style={contentStyle}>ELECTRODOMESTICOS</h3>
      </div>
      <div className="electronica">
        <h3 style={contentStyle}>ELECTRONICA</h3>
      </div>
      <div className="hogar">
        <h3 style={contentStyle}>HOGAR</h3>
      </div>
    </Carousel>
  );
};

export default Home;

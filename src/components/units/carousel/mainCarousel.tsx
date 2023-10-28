import React from "react";
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  height: "600px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function MainCarousel(): JSX.Element {
  return (
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>강영규의 포트폴리오입니다.</h3>
      </div>
      <div>
        <h3 style={contentStyle}>강영규의 포트폴리오입니다.</h3>
      </div>
      <div>
        <h3 style={contentStyle}>강영규의 포트폴리오입니다.</h3>
      </div>
      <div>
        <h3 style={contentStyle}>강영규의 포트폴리오입니다.</h3>
      </div>
    </Carousel>
  );
}

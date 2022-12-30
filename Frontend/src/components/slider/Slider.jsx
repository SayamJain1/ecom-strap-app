import { useState } from "react";
import "./Slider.scss";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

function Slider() {
  const [currSlide, setCurrSlide] = useState(0);

  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const prevSlide = () => {
    setCurrSlide(currSlide === 0 ? data.length - 1 : currSlide - 1);
  };

  const nextSlide = () => {
    setCurrSlide(currSlide === data.length - 1 ? 0 : currSlide + 1);
  };
  setTimeout(() => nextSlide(), 3000);

  return (
    <div className="slider">
      <div
        className="container"
        style={{
          width: `${data.length * 100}vw`,
          transform: `translateX(-${currSlide * 100}vw)`,
        }}
      >
        {/* <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" /> */}
        {data.map((img, i) => (
          <img key={i} src={img} />
        ))}
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Slider;

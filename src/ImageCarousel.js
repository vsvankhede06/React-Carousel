import React from "react";
import Card from "./Card";
const Imagecarousel = () => {
  let box = document.querySelector("product");
  const cardNumbers = Array.from({ length: 10 }, (card, index) => index + 1);
  const prev = () => {
    box = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  };
  const next = () => {};
  return (
    <div className="product">
      <button className="pre-btn" onClick={prev}>
        <p>&lt;</p>
      </button>
      <button className="next-btn" onClick={next}>
        <p>&gt;</p>
      </button>
      <div className="container">
        {cardNumbers.map((cardno, index) => (
          <Card key={index} cardno={cardno} />
        ))}
      </div>
    </div>
  );
};

export default Imagecarousel;

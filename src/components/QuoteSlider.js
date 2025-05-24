import React, { useState } from "react";
import quotes from "../data/quotes";
import "./QuoteSlider.css"

const QuoteSlider = () => {
  const [index, setIndex] = useState(0);

  const nextQuote = () => {
    setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const prevQuote = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="slider-parent"
    >
      <div className="slider-space">
        <p className="slider-quote-text" >"{quotes[index].text}"</p>
        <p className="slider-author-text" >{quotes[index].author}</p>
        <button className="slider-button-prev" onClick={prevQuote} >
          PREVIOUS QUOTE
        </button>
        <button className="slider-button-next" onClick={nextQuote} >
          NEXT QUOTE
        </button>
      </div>
    </div>
  );
};



export default QuoteSlider;

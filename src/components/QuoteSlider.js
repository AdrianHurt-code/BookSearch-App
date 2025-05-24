import React, { useState } from "react";
import quotes from "../data/quotes";

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
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        marginTop: "30px",
      }}
    >
      <div className="slider-space" style={styles.slider}>
        <p style={styles.text}>"{quotes[index].text}"</p>
        <p style={styles.author}>{quotes[index].author}</p>
        <button onClick={prevQuote} style={styles.button}>
          PREVIOUS QUOTE
        </button>
        <button onClick={nextQuote} style={styles.button}>
          NEXT QUOTE
        </button>
      </div>
    </div>
  );
};

const styles = {
  slider: {
    padding: "1rem",
    borderRadius: "10px",
    maxWidth: "700px",
    textAlign: "center",
    cursor: "default",
  
  },
  text: {
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
    color:"black",
    fontWeight:"bold"
  },
  author: {
    fontWeight: "bold",
    color: "#555",
  },
  button: {
    margin: "20px 10px 0px 10px",
    padding: "10px",
    backgroundColor: "#da9b13",
    color: "white",
    border: "3px solid black",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default QuoteSlider;

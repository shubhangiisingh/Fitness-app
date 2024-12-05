
import React from "react";
import "./Vectors.css";

const Counter = ({ count, label, imageSrc, altText }) => {
  return (
    <div className="counter">
      <img src={imageSrc} alt={altText} className="counter-image" />
      <div className="counter-content">
        <h2 className="counter-value">{count}</h2>
        <p className="counter-label">{label}</p>
      </div>
    </div>
  );
};

const Counters= () => {
  const counters = [
    {
      count: "950+",
      label: "Happy Clients",
      imageSrc: "vector22.png",
      altText: "Happy Clients Icon",
    },
    {
      count: "15+",
      label: "Years of Experience",
      imageSrc: "vector28.png",
      altText: "Years of Experience Icon",
    },
    {
      count: "117+",
      label: "Expert Trainers",
      imageSrc: "vector2.png",
      altText: "Expert Trainers Icon",
    },
    {
      count: "117+",
      label: "Expert Trainers",
      imageSrc: "vector29.png",
      altText: "Company Branch",
    },
    {
      count: "117+",
      label: "Expert Trainers",
      imageSrc: "vector25.png",
      altText: "Positive Reviews",
    },
  ];

  return (
    <div className="emoji">
    <section className="counters-section">
      {counters.map((counter, index) => (
        <Counter
          key={index}
          count={counter.count}
          label={counter.label}
          imageSrc={counter.imageSrc}
          altText={counter.altText}
          className={index === 2 || index === 4 ? 'highlight-counter' : ''}
        />
      ))}
    </section>
    </div>
  );
};

export default Counters;

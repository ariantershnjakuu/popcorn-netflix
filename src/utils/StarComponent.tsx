import React from "react";
import Star from "./Star";
import { useState } from "react";

interface StartComponentProps {
  maxRating: number;
}

const stars = {
  display: "flex",
};

const containerStart = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const textStyle = {
  lineHeight: "1",
  margin: "0",
};
const StartComponent: React.FC<StartComponentProps> = ({ maxRating }) => {
  const [rating, setRating] = useState(0);

  const hadleRating = (value: number) => {
    setRating(value);
  };

  return (
    <div style={containerStart}>
      <div style={stars}>
        {Array.from({ length: maxRating || 5 }, (_, i) => (
          <Star key={i} onRate={() => hadleRating(i + 1)} />
        ))}
      </div>
      <p style={textStyle}>{rating || " "}</p>
    </div>
  );
};

export default StartComponent;

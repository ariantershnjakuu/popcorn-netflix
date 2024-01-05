import React from "react";
import Star from "./Star";
import { useState } from "react";

interface StartComponentProps {
  maxRating?: number;
  color?: string;
  size?: number;
}

const stars = {
  display: "flex",
};

const containerStart = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const StartComponent: React.FC<StartComponentProps> = ({
  maxRating = 5,
  color = "#fcc419",
  size = 32,
}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const hadleRating = (value: number) => {
    setRating(value);
  };

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    fontSize: `${size}px`,
    color: color,
  };

  return (
    <div style={containerStart}>
      <div style={stars}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => hadleRating(i + 1)}
            full={hover ? hover >= i + 1 : rating >= i + 1}
            onHover={() => setHover(i + 1)}
            onHoverLeave={() => setHover(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>{hover || rating || ""}</p>
    </div>
  );
};

export default StartComponent;

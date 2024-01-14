import React from "react";
import Star from "./Star";
import { useState } from "react";

interface StartComponentProps {
  maxRating?: number;
  color?: string;
  size?: number;
  onSetRating?: any;
}

const stars = {
  display: "flex",
};

const containerStart = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const StartComponent: React.FC<StartComponentProps> = ({
  maxRating = 5,
  color = "#fcc419",
  size = 32,
  onSetRating,
}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const hadleRating = (value: number) => {
    setRating(value);
    onSetRating(value);
  };

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    fontSize: `18px`,
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

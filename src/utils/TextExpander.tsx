import React, { useState } from "react";

interface TextExpanderProps {
  children: React.ReactNode;
  collapsedNumWords?: number;
  expandButtonText?: string;
  collapseButtonText?: string;
  buttonColor?: string;
  expanded?: boolean;
  className?: string;
}

const TextExpander: React.FC<TextExpanderProps> = ({
  collapsedNumWords = 15,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor,
  expanded = false,
  className,
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded);
  return (
    <div>
      <span>
        {isExpanded
          ? (children as string)
              .split(" ")
              .slice(0, collapsedNumWords)
              .join(" ") + "..."
          : children}
      </span>

      <button
        style={{
          color: buttonColor,
          border: "none",
          background: "none",
          cursor: "pointer",
        }}
        onClick={() => setIsExpanded((exp) => !exp)}
      >
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
};

export default TextExpander;

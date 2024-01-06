interface TextExpanderProps {
  children: React.ReactNode;
  collapsedNumWords?: number;
  expandButtonText?: string;
  collapseButtonText?: string;
  buttonColor?: string;
  expanded?: boolean;
  className?: string;
  setExpanded?: any;
}

const TextExpander: React.FC<TextExpanderProps> = ({
  children,
  collapsedNumWords,
  expandButtonText,
  collapseButtonText,
  buttonColor,
  expanded,
  className,
  setExpanded,
}) => {
  return (
    <div>
      <span>
        {expanded
          ? (children as string)
              .split(" ")
              .slice(0, collapsedNumWords)
              .join(" ")
          : children}
      </span>

      <button
        style={{
          color: buttonColor,
          border: "none",
          background: "none",
          cursor: "pointer",
        }}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? expandButtonText : collapseButtonText}
      </button>
    </div>
  );
};

export default TextExpander;

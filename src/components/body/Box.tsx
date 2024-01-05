import React, { useState } from "react";
interface ListBoxProps {
  children: React.ReactNode;
}

const ListBox: React.FC<ListBoxProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
};

export default ListBox;

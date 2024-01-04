import React, { useState } from "react";
import ListBox from "./body/ListBox";
import WatchedBox from "./body/WatchedBox";

interface MainProps {}

const Main: React.FC<MainProps> = () => {
  return (
    <main className="main">
      <ListBox />
      <WatchedBox />
    </main>
  );
};

export default Main;

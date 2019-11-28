import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Lists from "./components/lists";
import { initDB } from "./database/localDatabase";

const App: React.FC = () => {
  useEffect(() => {
    initDB();
  });

  return (
    <div className="App">
      <Header />
      <Lists />
    </div>
  );
};

export default App;

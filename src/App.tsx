import React from "react";
import "./App.css";
import Header from "./components/header";
import Lists from "./components/lists";

const App: React.FC = () => {
  return <div className="App">
    <Header/>
    <Lists/>
  </div>;
};

export default App;

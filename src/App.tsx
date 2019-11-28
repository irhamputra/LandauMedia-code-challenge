import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Lists from "./components/lists";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost } from "./redux/actions";

const App: React.FC = () => {
  const { posts } = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const FETCH_DATA = () => dispatch(getAllPost());

  useEffect(() => {
    FETCH_DATA();
  }, []);

  return (
    <div className="App">
      <Header />
      <Lists data={posts} />
    </div>
  );
};

export default App;

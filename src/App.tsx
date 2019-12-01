import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost } from "./redux/actions";
import Header from "./components/header";
import Lists from "./components/lists";
import Profile from "./components/profile";

const Container = styled.div`
  display: flex;
`;

const App: React.FC = () => {
  const { posts } = useSelector((state: any) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPost());
  }, []);

  return (
    <div className="App">
      <Header />
      <Container>
        <Lists data={posts} />
        <Profile />
      </Container>
    </div>
  );
};

export default App;

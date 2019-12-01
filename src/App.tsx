import React, { useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import Header from "./components/header";
import Lists from "./components/lists";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost } from "./redux/actions";

const Container = styled.div`
  display: flex;

  & > .profile {
    margin-right: 15%;
    padding: 20px;
    @media screen and (max-width: 414px) {
      display: none;
    }
  }
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
        <div className="profile">Profile Section</div>
      </Container>
    </div>
  );
};

export default App;

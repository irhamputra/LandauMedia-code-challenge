import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost, getAllUser } from "./redux/actions";
import Header from "./components/header";
import Lists from "./components/lists";
import Profile from "./components/profile";
import Stories from "./components/stories";

const Container = styled.div`
  display: flex;
`;

const App: React.FC = () => {
  const { posts, users } = useSelector((state: any) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPost());
    dispatch(getAllUser());
  }, []);

  return (
    <div className="App">
      <Header />
      <Stories users={users} />
      <Container>
        <Lists data={posts} />
        <Profile />
      </Container>
    </div>
  );
};

export default App;

import React from "react";
import styled from "styled-components";
import Avatar from "./avatar";

const List = styled.div`
  padding: 10px;
`;

const User = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  margin-bottom: 10px;
`;

const Images = styled.div`
  margin-bottom: 20px;
`;

const Username = styled.span`
  margin-left: 10px;
  font-weight: bold;
`;

const Lists: React.FC<{ data: any }> = ({ data }) => {
  const renderList = () => {
    return data.map((post: any) => {
      return (
        <Images key={post.id}>
          <User>
            <Avatar imageURL={post.imageURL} width={15} />
            <Username>{post.username}</Username>
          </User>
          <img src={post.postsURL[0]} alt={post.id} width="100%" />
        </Images>
      );
    });
  };

  return <List>{!data ? <h1>Loading...</h1> : renderList()}</List>;
};

export default Lists;

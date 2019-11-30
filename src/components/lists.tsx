import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import Avatar from "./avatar";

const List = styled.div`
  padding: 10px;
  margin: 0 34%;

  @media screen and (max-width: 414px) {
    margin: 0;
  }
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

const Button = styled.button`
  font-size: 16px;
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
          {post.postsURL.length > 0 ? (
            <Carousel
              showThumbs={false}
              showIndicators={post.postsURL.length > 1}
              showArrows={false}
              showStatus={false}
            >
              {post.postsURL.map((photo: string, i: number) => {
                return <img src={photo} key={i} alt={i.toString()} />;
              })}
            </Carousel>
          ) : (
            <img src={post.postsURL[0]} alt={post.id} width="100%" />
          )}
          <div>
            <Button onClick={() => console.log("like me")}>
              <span role="img" aria-label="emoji-like">
                😻
              </span>{" "}
              <strong>like me</strong>
            </Button>
            <div>
              <strong>{post.likes} meowed</strong>
            </div>
            <strong>{post.username}</strong> <span>{post.description}</span>
            {post.comments.map((com: any) => {
              return (
                <div key={com.id}>
                  <strong>{com.username}</strong> <span>{com.comment}</span>
                </div>
              );
            })}
          </div>
        </Images>
      );
    });
  };

  return <List>{!data ? <h1>Loading...</h1> : renderList()}</List>;
};

export default Lists;

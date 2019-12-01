import React from "react";
import styled from "styled-components";
import Avatar from "./avatar";
import Comments from "./comments";
import CarouselImage from "./carousel";
import { useDispatch } from "react-redux";
import { likePost } from "../redux/actions";
import CommentForm from "./comment";
import { createBreakpoint } from "react-use";

const List = styled.div`
  padding: 0;
  margin-left: 15%;
  width: 50%;

  @media screen and (max-width: 414px) {
    margin: 0;
    width: 100%;
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;

  @media screen and (max-width: 414px) {
    margin: 10px;
  }
`;

const Wrapper = styled.div`
  margin: 10px 0;

  @media screen and (max-width: 414px) {
    margin: 10px;
  }
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

const Counter = styled.div`
  margin: 5px 0;
`;

const Lists: React.FC<{ data: any }> = ({ data }) => {
  const dispatch = useDispatch();
  const useBreakpoint = createBreakpoint({ XL: 1280, L: 768, S: 414 });
  const breakpoint = useBreakpoint();

  const renderList = () => {
    return data.map((post: any) => {
      return (
        <Images key={post.id}>
          <User>
            <Avatar
              imageURL={post.imageURL}
              width={breakpoint === "S" ? 12 : 8}
            />
            <Username>{post.username}</Username>
          </User>
          {post.postsURL.length > 0 ? (
            <CarouselImage postsURL={post} />
          ) : (
            <img src={post.postsURL[0]} alt={post.id} width="100%" />
          )}
          <Wrapper>
            <Button onClick={() => dispatch(likePost(post.id))}>
              <span role="img" aria-label="emoji-like">
                😻
              </span>{" "}
              <strong>like me</strong>
            </Button>
            <Counter>
              {post.likes > 0 && <strong>{post.likes} meowed</strong>}
            </Counter>
            <strong>{post.username}</strong> <span>{post.description}</span>
            <Comments postComment={post} />
            <CommentForm />
          </Wrapper>
        </Images>
      );
    });
  };

  return <List>{!data ? <h1>Loading...</h1> : renderList()}</List>;
};

export default Lists;

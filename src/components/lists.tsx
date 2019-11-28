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

const DATA = [
  {
    id: 1,
    username: "oreo_the_cat",
    imageURL: "https://cataas.com/cat",
    postsURL: ["https://cataas.com/cat/says/hello%20world!"],
    description: "Welcome to my cat pages, love meow!",
    likes: 20,
    comments: [
      {
        id: 3,
        username: "nala_cat",
        comment: "Hey oreo nice to meet you"
      },
      {
        id: 4,
        username: "white_coffee_cat",
        comment: "Oreo you should not be here.."
      }
    ]
  },
  {
    id: 2,
    username: "apollo_cat",
    imageURL: "https://cataas.com/cat?type=huehehe",
    postsURL: [
      "https://cataas.com/cat/says/hello?size=55",
      "https://cataas.com/cat?type=huf"
    ],
    likes: 10,
    description: "Try my best to annoy hooman",
    comments: [
      {
        id: 5,
        username: "hana_kitty",
        comment: "I want to help you Apollo "
      },
      {
        id: 6,
        username: "sukiicat",
        comment: "Yeah me too we have to annoy him. lol"
      }
    ]
  }
];

const Lists = () => {
  const renderList = () => {
    return DATA.map((post: any) => {
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

  return <List>{renderList()}</List>;
};

export default Lists;

import React  from "react";
import Avatar from "./avatar";
import styled from "styled-components";

const UserStories = styled.div`
  display: flex;
  overflow-x: auto;
  border-bottom: 1px solid #f7f7f7;
  padding: 0 15%;
  background-color: #f7f7f7;

  &::-webkit-scrollbar {
    display: none;
  }
  
  @media screen and (max-width: 414px) {
  padding: 0px;
  }
`;

const UserContent = styled.div`
  min-width: 70px;
  margin: 10px;
  
  & > .username {
    text-align: center;
    font-size: 14px;
  }
`;

const Stories: React.FC<{ users: any }> = ({ users }) => {
  return (
    <UserStories>
      {users.map((user: any) => {
        return (
          <UserContent key={user.id}>
            <Avatar imageURL={user.imageURL} width={100} />
            <p className="username">
              {user.username.length > 11
                ? user.username.substring(0, user.username.length - 8) + "..."
                : user.username}
            </p>
          </UserContent>
        );
      })}
    </UserStories>
  );
};

export default Stories;

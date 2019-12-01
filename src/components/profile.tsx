import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-right: 15%;
  padding: 20px;
  @media screen and (max-width: 414px) {
    display: none;
  }
`;
const Profile: React.FC = () => {
  return <Wrapper className="profile">Profile Section</Wrapper>;
};

export default Profile;

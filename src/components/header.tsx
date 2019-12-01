import React from "react";
import Form from "./form";
import styled from "styled-components";

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15%;
  border-bottom: 1px solid whitesmoke;

  @media screen and (max-width: 414px) {
    padding: 10px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  & > h2 {
    margin-left: 10px;
    @media screen and (max-width: 414px) {
      margin-left: 5px;
    }
  }
`;

const Header: React.FC = () => {
  return (
    <Menu>
      <Logo>
        <span role="img" aria-label="emoji-login">
          😺
        </span>
        <h2>InstaMeow</h2>
      </Logo>
      <Form />
    </Menu>
  );
};

export default Header;

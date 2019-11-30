import React, { useState } from "react";
import Form from "./form";
import styled from "styled-components";
import Avatar from "./avatar";
import Icons from "./Icons";

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 35%;
  border-bottom: 1px solid whitesmoke;

  @media screen and (max-width: 414px) {
    padding: 10px;
  }
`;

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const onClickIcon = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Menu>
      <Avatar />
      {isVisible ? (
        <Form isVisible={isVisible} />
      ) : (
        <h2 style={{ margin: 0 }}>Instapet</h2>
      )}
      <Icons isVisible={isVisible} onClick={onClickIcon} />
    </Menu>
  );
};

export default Header;

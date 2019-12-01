import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";

export const Button = styled.button`
  font-size: 18px;
  margin: 0;
  padding: 0;
  height: 100%;
`;

Modal.setAppElement("#root");

const Login: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)"
    }
  };

  const onOpenModal = () => {
    setIsOpen(true);
  };

  const onCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div id="modal">
      <Button onClick={onOpenModal}>
        <span role="img" aria-label="login-emoji">
          🚪
        </span>
      </Button>
      <Modal style={customStyles} isOpen={isOpen} onRequestClose={onCloseModal}>
        <Button onClick={onCloseModal}>
          <span role="img" aria-label="close-emoji">
            ❌
          </span>
        </Button>
        <h1>Login</h1>
      </Modal>
    </div>
  );
};

export default Login;

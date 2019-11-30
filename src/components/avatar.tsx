import React from "react";
import styled from "styled-components";

const Image = styled.img`
  border-radius: 50px;
  width: 10%;
`;

const Avatar: React.FC<{ imageURL?: string; width?: number }> = ({
  imageURL,
  width
}) => {
  return (
    <>
      {imageURL ? (
        <Image alt="cat" src={imageURL} width={width + "%"} />
      ) : (
        <button
          style={{ fontSize: 16 }}
          onClick={() => console.log("login modal")}
        >
          <span role="img" aria-label="emoji-login">😺</span>
        </button>
      )}
    </>
  );
};

export default Avatar;

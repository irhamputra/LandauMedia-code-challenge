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
    <Image
      alt="cat"
      src={imageURL ? imageURL : "https://cataas.com/cat"}
      width={width + "%"}
    />
  );
};

export default Avatar;

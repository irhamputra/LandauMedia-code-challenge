import React from "react";
import styled from "styled-components";

const Image = styled.img`
  border-radius: 50px;
`;

const Avatar: React.FC<{ imageURL?: string; width?: number }> = ({
  imageURL,
  width
}) => {
  return <Image alt="cat" src={imageURL} width={width + "%"} />;
};

export default Avatar;

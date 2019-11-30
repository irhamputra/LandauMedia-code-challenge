import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";

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
        <FontAwesomeIcon icon={faUser} size="lg" />
      )}
    </>
  );
};

export default Avatar;

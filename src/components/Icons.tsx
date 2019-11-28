import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";

const Icons: React.FC<{ isVisible: boolean; onClick?: any }> = ({
  isVisible,
  onClick
}) => {
  return (
    <FontAwesomeIcon
      icon={isVisible ? faTimes : faSearch}
      size="lg"
      onClick={onClick}
    />
  );
};

export default Icons;

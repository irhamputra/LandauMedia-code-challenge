import React from "react";

const Icons: React.FC<{ isVisible?: boolean; onClick?: any }> = ({
  isVisible,
  onClick
}) => {
  return (
    <button style={{ fontSize: 16, margin: 0, padding: 0 }} onClick={onClick}>
      {isVisible ? "❌" : "🔍"}
    </button>
  );
};

export default Icons;

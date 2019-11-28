import React from "react";
import useForm from "react-hook-form";
import styled from "styled-components";
import { db } from "../database/localDatabase";

const SearchBar = styled.div`
  display: flex;
  transition: 1s ease-in-out;
  align-items: center;
`;

const Input = styled.input`
  text-align: center;
  padding: 10px;
  border: none;
  font-size: 18px;
  &::placeholder {
    width: 100%;
    height: 100%;
    color: lightgray;
    text-align: center;
    line-height: 30px;
  }
`;

const Form: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  const { handleSubmit, register, errors, reset } = useForm();

  const onSubmit = (data: object) => {
    console.log(data);
    db.get("posts")
      // @ts-ignore
      .push(data)
      .write();
    reset();
  };

  return (
    <SearchBar>
      {isVisible && (
        <form
          style={{ width: "100%", height: 30 }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            type="text"
            ref={register}
            name="username"
            placeholder="enter username"
          />
          {errors.username && <span>Error!</span>}
        </form>
      )}
    </SearchBar>
  );
};

export default Form;

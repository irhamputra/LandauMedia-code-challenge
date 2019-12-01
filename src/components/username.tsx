import React from "react";
import useForm from "react-hook-form";
import styled from "styled-components";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import Login, { Button } from "./login";

const SearchBar = styled.div`
  display: flex;
  transition: 1s ease-in-out;
  align-items: center;
  align-content: stretch;
  align-self: center;
`;

const Input = styled.input`
  text-align: center;
  border: none;
  width: 80%;
  font-size: 16px;

  &::placeholder {
    width: 100%;
    height: 100%;
    color: lightgray;
    text-align: center;
    line-height: 30px;
    padding: 10px 0;
  }
`;

const formValidation = Yup.object().shape({
  username: Yup.string()
    .min(2)
    .required()
});

const UsernameForm: React.FC = () => {
  const { handleSubmit, register } = useForm({
    validationSchema: formValidation
  });
  const state = useSelector((state: any) => state.posts);

  React.useEffect(() => {
    console.log(state);
  }, []);

  const onSubmit = (data: object) => {
    // get some data who logged in
    console.log(data);
  };

  return (
    <SearchBar>
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
        <Button>
          <span role="img" aria-label="search-emoji">
            🔍
          </span>
        </Button>
      </form>

      <Login />
    </SearchBar>
  );
};

export default UsernameForm;

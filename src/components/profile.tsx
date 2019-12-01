import React, { useState } from "react";
import styled from "styled-components";
import useForm from "react-hook-form";
import * as Yup from "yup";

const Wrapper = styled.div`
  margin-right: 15%;
  width: 20%;
  padding: 20px 0 20px 20px;
  @media screen and (max-width: 414px) {
    display: none;
  }
`;

const Login = styled.button`
  width: 100%;
  background: #212121;
  color: white;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;
  border: 1px solid #212121;

  &:hover {
    background: black;
  }
`;

const Register = styled.button`
  width: 100%;
  padding: 10px;
  border: 1px solid #212121;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;
`;

const Title = styled.p`
  margin-bottom: 10px;
  font-weight: bold;
  text-align: center;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid lightgray;
  width: 100%;
  font-size: 16px;
  padding: 10px 0;

  &::placeholder {
    color: lightgray;
    width: 100%;
  }
`;

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string()
    .min(8)
    .required()
});

const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string()
    .min(8)
    .required(),
  username: Yup.string()
    .min(6)
    .required()
});

const Profile: React.FC = () => {
  const [isRegister, setIsRegister] = useState(false);
  const { handleSubmit, register, reset } = useForm({
    validationSchema: isRegister ? RegisterSchema : LoginSchema
  });

  const onShowLoginForm = () => {
    setIsRegister(false);
  };

  const onLogin = (data: object) => {
    console.log("login", data);
    reset();
  };

  const onShowRegisterForm = () => {
    setIsRegister(true);
  };

  const onRegister = (data: object) => {
    console.log("register", data);
    reset();
  };

  return (
    <Wrapper className="profile">
      <Title>
        {isRegister ? "Create your account" : "Member of InstaMeow?"}
      </Title>
      <form
        onSubmit={isRegister ? handleSubmit(onRegister) : handleSubmit(onLogin)}
      >
        <Input
          type="email"
          ref={register}
          name="email"
          placeholder="Your email"
        />
        <Input
          type="password"
          ref={register}
          name="password"
          placeholder="Your password"
        />
        {isRegister && (
          <div>
            <Input
              type="text"
              ref={register}
              name="username"
              placeholder="Your username"
            />
            <Register>Register</Register>
          </div>
        )}
        {!isRegister && <Login>Login</Login>}
      </form>
      {isRegister && <Login onClick={onShowLoginForm}>Login now</Login>}
      {!isRegister && (
        <Register onClick={onShowRegisterForm}>Register now</Register>
      )}
    </Wrapper>
  );
};

export default Profile;

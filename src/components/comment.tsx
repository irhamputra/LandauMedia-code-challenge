import React, { useState } from "react";
import useForm from "react-hook-form";
import styled from "styled-components";
import { uuid } from "../lib/uuid";
import { useDispatch } from "react-redux";
import { userAddComment } from "../redux/actions";

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &::placeholder {
    width: 100%;
    height: 100%;
    color: lightgray;
    line-height: 30px;
    padding: 10px 0;
  }
`;

interface IComment {
  id?: number;
  username?: string;
  comment?: Record<string, any>;
}

const CommentForm: React.FC<{ comments: any }> = ({ comments }) => {
  const { handleSubmit, register, reset } = useForm();
  const dispatch = useDispatch();
  const dispatchComment = (id: number, comment: IComment) =>
    dispatch(userAddComment(id, comment));

  const onSubmit = (data: IComment) => {
    if (!data.comment) console.error("Comment ga ada");

    const newComment = {
      id: uuid,
      username: "luna_rose",
      comment: data.comment
    };

    dispatchComment(comments.id, newComment);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          type="text"
          name="comment"
          placeholder="type your comment here..."
        />
      </form>
    </>
  );
};

export default CommentForm;

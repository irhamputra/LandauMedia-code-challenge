import React from "react";
import styled from 'styled-components';

interface IComments {
  postComment: {
    id: number;
    username: string;
    comments: string[];
  };
}

const CommentSection = styled.div`
  margin: 5px 0;
`;

const Comments: React.FC<{ postComment: number | string }> = ({
  postComment
}: IComments | any) => {
  return postComment.comments.map((com: any) => {
    return (
      <CommentSection key={com.id}>
        <strong>{com.username}</strong> <span>{com.comment}</span>
      </CommentSection>
    );
  });
};

export default Comments;

import React from "react";

interface IComments {
  postComment: {
    id: number;
    username: string;
    comments: string[];
  };
}

const Comments: React.FC<{ postComment: number | string }> = ({
  postComment
}: IComments | any) => {
  return postComment.comments.map((com: any) => {
    return (
      <div key={com.id}>
        <strong>{com.username}</strong> <span>{com.comment}</span>
      </div>
    );
  });
};

export default Comments;

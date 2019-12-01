import { db } from "../database/localDatabase";

export const getUser = () => {
  return async (dispatch: any) => {
    dispatch({ type: "GET_USER" });
  };
};

export const userPostPhoto = () => {
  return async (dispatch: any, getState: object): Promise<any> => {
    // getState from global store
    dispatch({ type: "USER_POST_PHOTO" });
  };
};

export const userAddComment = (postID: number, comment: object) => {
  return async (dispatch: any, getState: object): Promise<any> => {
    // getState
    dispatch({ type: "USER_ADD_COMMENT" });
  };
};

export const updateComment = (commentID: number, comment: object) => {
  return { type: "UPDATE_COMMENT", payload: { commentID, comment } };
};

export const userDeleteComment = () => {
  return async (dispatch: any, getState: object): Promise<any> => {
    dispatch({ type: "USER_DELETE_COMMENT" });
  };
};

export const login = () => {
  return async (dispatch: any, getState: object): Promise<any> => {
    dispatch({ type: "USER_LOGIN" });
  };
};

export const register = () => {
  return async (dispatch: any, getState: object): Promise<any> => {
    // get value user from getState().user

    // set as newUser object

    // write to db
    dispatch({ type: "USER_REGISTER" });
  };
};

export const likePost = (id: number) => {
  return async (dispatch: any) => {
    const postOne = db.get("postsCollection").value();

    postOne.forEach((el: any) => {
      if (el.id === id) {
        db.get("postsCollection")
          // @ts-ignore
          .find({ id })
          .update("likes", (n: number) => n + 1)
          .write();
      }
    });

    dispatch({ type: "LIKED_PHOTO", payload: db.getState().postsCollection });
  };
};

export const getAllUser = () => {
  return { type: "FETCH_USERS", payload: db.getState().userCollection };
};

export const getAllPost = () => {
  return { type: "FETCH_POSTS", payload: db.getState().postsCollection };
};

import { db } from "../database/localDatabase";

export const userPostPhoto = () => {
  return async (dispatch: any, getState: object): Promise<any> => {
    // getState from global store
    dispatch({ type: "USER_POST_PHOTO" });
  };
};

export const userAddComment = () => {
  return async (dispatch: any, getState: object): Promise<any> => {
    // getState
    dispatch({ type: "USER_ADD_COMMENT" });
  };
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
    dispatch({ type: "USER_REGISTER" });
  };
};

export const likePost = (id: number) => {
  return async (dispatch: any) => {
    dispatch({ type: "LIKED_PHOTO", payload: id  });
  };
};

export const getAllPost = () => {
  return { type: "FETCH_DATA", payload: db.getState().postsCollection };
};

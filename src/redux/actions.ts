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

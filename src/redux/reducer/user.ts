export const user = (state = {}, action: any) => {
  switch (action.type) {
    case "USER_LOGIN":
      return action.payload;

    case "USER_LOGOUT":
      return (state = {});

    case "USER_REGISTER":
      return action.payload;

    default:
      return state;
  }
};

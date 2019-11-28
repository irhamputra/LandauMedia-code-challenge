export const photos = (state = {}, action: any) => {
  switch (action.type) {
    case "POST_PHOTO":
      return { ...state, post: action.payload };

    default:
      return state;
  }
};

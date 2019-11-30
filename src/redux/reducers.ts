export const initialState = {
  user: {},
  posts: [] as any
};

export const reducers = (state = initialState, action: any) => {
  switch (action.type) {
    case "USER_LOGIN":
      return action.payload;

    case "USER_LOGOUT":
      return (state.user = {});

    case "USER_REGISTER":
      return action.payload;

    case "POST_PHOTO":
      return { ...state, post: action.payload };

    case "FETCH_DATA":
      return { ...state, posts: action.payload };

    case "LIKED_PHOTO":
      return {
        ...state,
        likes: state.posts.forEach((el: any) => {
          if (el.id === action.payload) {
            el.likes += 1;
          }
        })
      };

    default:
      return state;
  }
};

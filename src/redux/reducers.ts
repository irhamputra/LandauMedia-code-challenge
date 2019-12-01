export const initialState = {
  user: {},
  posts: [],
  users: []
};

interface IPost {
  id: number;
  likes: number;
  comments: string[];
  description: string;
  imageURL: string;
  postURL: string[];
  username: string;
}

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

    case "FETCH_POSTS":
      return { ...state, posts: action.payload };

    case "FETCH_USERS":
      return { ...state, users: action.payload };

    case "LIKED_PHOTO":
      return { ...state, posts: action.payload };

    case "USER_ADD_COMMENT":
      return { ...state, posts: action.payload };

    default:
      return state;
  }
};

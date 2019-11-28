import low from "lowdb";
import LocalStorage from "lowdb/adapters/LocalStorage";

const adapter = new LocalStorage("db");
export const db = low(adapter);

// mock data
const DATA = [
  {
    id: 1,
    username: "oreo_the_cat",
    imageURL: "https://cataas.com/cat",
    postsURL: ["https://cataas.com/cat/says/hello%20world!"],
    description: "Welcome to my cat pages, love meow!",
    likes: 20,
    comments: [
      {
        id: 3,
        username: "nala_cat",
        comment: "Hey oreo nice to meet you"
      },
      {
        id: 4,
        username: "white_coffee_cat",
        comment: "Oreo you should not be here.."
      }
    ]
  },
  {
    id: 2,
    username: "apollo_cat",
    imageURL: "https://cataas.com/cat?type=huehehe",
    postsURL: [
      "https://cataas.com/cat/says/hello?size=55",
      "https://cataas.com/cat?type=huf"
    ],
    likes: 10,
    description: "Try my best to annoy hooman",
    comments: [
      {
        id: 5,
        username: "hana_kitty",
        comment: "I want to help you Apollo "
      },
      {
        id: 6,
        username: "sukiicat",
        comment: "Yeah me too we have to annoy him. lol"
      }
    ]
  }
];

// init new post
export const initDB = () => {
  console.log("init DB");
  db.defaults({ posts: DATA, user: [] }).write();
};

export const postPhoto = (data: object) => {
  return (
    db
      .get("posts")
      // @ts-ignore
      .push(data)
      .write()
  );
};

export const postComment = (data: object) => {
  return (
    db
      .get("comments")
      // @ts-ignore
      .push(data)
      .write()
  );
};

export const userRegister = (data: object) => {
  return async () => {
    await db
      .get("posts")
      // @ts-ignore
      .push(data)
      .write();
  };
};

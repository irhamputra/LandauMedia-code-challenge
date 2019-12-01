import low from "lowdb";
import LocalStorage from "lowdb/adapters/LocalStorage";
import { DATA } from "./mockdata";

const adapter = new LocalStorage("db");
export const db = low(adapter);

// init new post
export const initDB = () => {
  console.log("init DB");
  db.defaults({ postsCollection: DATA, userCollection: [] }).write();
  db.defaults({ loggedIn: {} }).write();
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
      .get("postsCollection")
      // @ts-ignore
      .push(data)
      .write();
  };
};

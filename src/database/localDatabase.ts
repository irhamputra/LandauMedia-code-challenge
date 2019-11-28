import low from "lowdb";
import LocalStorage from "lowdb/adapters/LocalStorage";

const adapter = new LocalStorage("db");
const db = low(adapter);

// init new post
export const initDB = () => {
  console.log("init DB");
  db.defaults({ posts: [], comments: [], user: [] }).write();
};

/*
 * METHODS
 */
export const postPhoto = (data: object) => {
  // @ts-ignore
  return db.get("posts").push(data).write();
};

export const postComment = (data: object) => {
  // @ts-ignore
  return db.get("comments").push(data).write();
};

export const userRegister = (data: object) => {
  return async () => {
    // @ts-ignore
    await db.get("posts").push(data).write();
  };
};

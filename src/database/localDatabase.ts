import low from "lowdb";
import LocalStorage from "lowdb/adapters/LocalStorage";
import { DATA, USER } from "./mockdata";

const adapter = new LocalStorage("db");
export const db = low(adapter);

export const initDB = () => {
  console.log("init DB");
  db.defaults({ postsCollection: DATA, userCollection: USER }).write();
  db.defaults({ loggedIn: {} }).write();
};

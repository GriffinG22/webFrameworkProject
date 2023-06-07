import { User } from "./models/user";

const user = new User({ name: "myname", age: 25 });

user.set({ name: "Griffin" });

console.log(user.get("name"), user.get("age"));

console.log("-----------");

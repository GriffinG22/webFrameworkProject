import { User } from "./models/user";

const user = new User({ name: "myname", age: 25 });

user.on("change", () => {
  console.log("change1");
});
user.on("change", () => {
  console.log("change2");
});
user.on("save", () => {
  console.log("save");
});

user.trigger("change");
user.trigger("save");

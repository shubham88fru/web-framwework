import { User } from "./models/User";

const user = new User({ id: 1, name: "new record", age: 0 });
user.on("save", () => {
  console.log("User was saved");
});

user.save();

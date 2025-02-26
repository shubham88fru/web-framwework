import { User } from "./models/User";

const user = User.buildUser({ id: 1, name: "new record 2", age: 0 });
user.on("save", () => {
  console.log("User was saved");
});

user.save();

import { User } from "./models/User";

const user = new User({ id: 1 });
user.set({ name: "new name", age: 999 });
user.save();

const user2 = new User({ name: "shubham", age: 25 });
user2.save();

user2.events.on("change", () => {
  console.log("change event triggered");
});

user2.events.trigger("change");

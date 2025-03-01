import { User } from "./models/User";
import { UserForm } from "./views/UserForm";

const userForm = new UserForm(
  document.getElementById("root")!,
  User.buildUser({ name: "NAME", age: 20 })
);

userForm.render();

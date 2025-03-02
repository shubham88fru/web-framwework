import { User } from "./models/User";
import { UserEdit } from "./views/UserEdit";

const userEdit = new UserEdit(
  document.getElementById("root")!,
  User.buildUser({ name: "NAME", age: 20 })
);

userEdit.render();

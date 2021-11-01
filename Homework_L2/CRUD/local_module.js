const addUser = require("./add_user");
const readUsers = require("./read_users");
const readUser = require("./read_user");
const updateUser = require("./update_user");
const deleteUser = require("./delete_user");

addUser({username: "hung", password: "453" });
// updateUser(3, { username: "huong1", password: "1" });
// deleteUser(3)
// readUser(1);
// readUser();
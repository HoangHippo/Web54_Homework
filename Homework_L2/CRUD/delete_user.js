const fs = require("fs");

const deleteUser = (id) => {
  fs.readFile("users.json", "utf-8", (err, data) => {
    if (err) throw err;
    const users = JSON.parse(data);
    const $deleteUser = users.filter((user) => user.id != id);
    console.log(result);
    fs.promises.writeFile("users.json", JSON.stringify($deleteUser));
  });
};

module.exports = deleteUser;

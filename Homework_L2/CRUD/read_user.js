const fs = require("fs");

const readUser = (id) => {
  fs.readFile("users.json", { encoding: "utf-8" }, (err, data) => {
    if (err) throw err;
    const users = JSON.parse(data);
    const $readUser = users.filter((x) => x.id === id);
    console.log($readUser);
  });
};
readUser(1);

module.exports = readUser;

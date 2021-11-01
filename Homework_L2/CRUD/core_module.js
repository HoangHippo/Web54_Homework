const fs = require("fs");

const users = [
  {
    id: 1,
    username: "tuan",
    password: "123456",
  },
  {
    id: 2,
    username: "ha",
    password: "12346",
  },
  {
    id: 3,
    username: "hoang",
    password: "13456",
  },
  {
    id: 4,
    username: "dat",
    password: "23456",
  },
];

fs.writeFile("users.txt", JSON.stringify(users), { flag: "a" }, (err) => {
  console.log(err);
});


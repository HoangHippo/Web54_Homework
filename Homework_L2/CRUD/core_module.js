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

//CRUD
//Them User
const addUser = async (user) => {
  try {
    const stringUsers = await fs.promises.readFile("users.json", {
      encoding: "utf-8",
    });
    const users = JSON.parse(stringUsers);
    const newUsers = [
      ...users,
      {
        id: users.length + 1,
        ...user,
      },
    ];
    await fs.promises.writeFile("users.json", JSON.stringify(newUsers));
  } catch (err) {
    console.log(err);
  }
};
addUser({ username: "hung", password: "453" });

// Đọc nhiều User
const readUsers = () => {
  fs.readFile("users.json", { encoding: "utf-8" }, (err, data) => {
    if (err) throw err;
    console.log(JSON.parse(data));
  });
};
readUsers();

// Đọc User
const readUser = (id) => {
  fs.readFile("users.json", { encoding: "utf-8" }, (err, data) => {
    if (err) throw err;
    const user = JSON.parse(data);
    const result = user.filter((x) => x.id === id);
    console.log(result);
  });
};
readUser(1);

// Sửa User
const updateUser = (id, { username, password }) => {
  fs.readFile("users.json", { encoding: "utf-8" }, (err, data) => {
    if (err) throw err;
    const users = JSON.parse(data);
    console.log(users);
    const result = users.find((value, index) => {
      if (value.id === id) {
        users[index].username = username;
        users[index].password = password;

        console.log(users[index]);
      }
    });
  });
};
updateUser(1, { username: "hung", password: "9999999" });

//Xoa User
const deleteUser = (id) => {
  fs.readFile("users.json", "utf-8", (err, data) => {
    if (err) throw err;
    const users = JSON.parse(data);
    const result = users.filter((user) => user.id != id);
    console.log(result);
    fs.promises.writeFile("users.json", JSON.stringify(result));
  });
};
deleteUser(1);

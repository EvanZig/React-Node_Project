import data from "../mockData/users.json";
import MockAdapter from "axios-mock-adapter";

/**
 * based on https://github.com/spiyushani/react-crud-with-mock-backend/
 *
 */

let usersList = data.users;
let currentUser;
let userIndex;

export const initializeAxiosMockAdapter = (instance) => {
  const mock = new MockAdapter(instance);
  mock.onPost("/register").reply((config) => addUser(config));
  mock.onPut("/update").reply((config) => updateUser(config));
  mock.onGet("/show").reply((config) => showUsers(config));
  mock.onDelete("/delete").reply((config) => deleteUser(config));
  mock.onPost("/login").reply((config) => giveTokens(config));
};

export const addUser = (config) => {
  const user = JSON.parse(config.data);
  currentUser = user.email;
  console.log(usersList);
  usersList.push(user);
  console.log(usersList);
  userIndex = usersList.findIndex((user) => user.email === currentUser);
  return [
    200,
    {
      idToken: "mockIdToken",
      refreshToken: "mockRefreshToken",
    },
  ];
};

export const showUsers = () => {
  return [200, usersList];
};

export const deleteUser = (config) => {
  usersList.splice(userIndex, 1);
  console.log(usersList);
  return [200, null];
};

export const updateUser = (config) => {
  const updatedUserData = JSON.parse(config.data);
  usersList[userIndex] = updatedUserData;
  console.log(usersList);
  return [200, currentUser];
};

export const giveTokens = (config) => {
  const { email, password } = JSON.parse(config.data);

  let matchedUser;
  usersList.forEach((user) => {
    if (user.email === email && user.password === password) {
      matchedUser = user;
      currentUser = user.email;
      userIndex = usersList.findIndex((user) => user.email === currentUser);
      console.log(currentUser);
    }
  });

  if (matchedUser) {
    return [
      200,
      {
        idToken: "mockIdToken",
        refreshToken: "mockRefreshToken",
      },
    ];
  }

  return [401, { message: "Invalid email or password" }];
};

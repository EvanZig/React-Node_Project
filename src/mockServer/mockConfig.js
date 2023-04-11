import data from "../mockData/users.json";
import MockAdapter from "axios-mock-adapter";

/**
 * based on https://github.com/spiyushani/react-crud-with-mock-backend/
 *
 */

let usersList = data.users;

export const initializeAxiosMockAdapter = (instance) => {
  const mock = new MockAdapter(instance);
  mock.onPost("/register").reply((config) => addUser(config));
  mock.onPut("/update").reply((config) => updateUser(config));
  mock.onGet("/show").reply((config) => showUsers(config));
  mock.onDelete("/delete").reply((config) => deleteUser(config));
};

export const addUser = (config) => {
  const user = JSON.parse(config.data);
  console.log(usersList);
  usersList.push(user);
  console.log(usersList);
  return [200, user];
};

export const showUsers = () => {
  return [200, usersList];
};

export const deleteUser = (config) => {
  console.log("deleted");
  return [200, null];
};

export const updateUser = (config) => {
  const user = JSON.parse(config.data);
  // console.log(user);
  return [200, user];
};

const giveTokens = (config) => {
  const { email, password } = JSON.parse(config.data);

  // Loop through the users list and check if the email and password match
  let matchedUser;
  usersList.forEach((user) => {
    if (user.email === email && user.password === password) {
      matchedUser = user;
    }
  });

  // If a match is found, return a 200 status code with a mock response containing the user's email, access token, and refresh token
  if (matchedUser) {
    return [
      200,
      {
        email: matchedUser.email,
        accessToken: "mockAccessToken",
        refreshToken: "mockRefreshToken",
      },
    ];
  }

  // If no match is found, return a 401 status code with an error message
  return [401, { message: "Invalid email or password" }];
};

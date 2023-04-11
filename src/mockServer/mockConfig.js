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

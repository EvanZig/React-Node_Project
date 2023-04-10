import data from "../mockData/users.json";
import MockAdapter from "axios-mock-adapter";

/**
 * based on https://github.com/spiyushani/react-crud-with-mock-backend/
 *
 */

let usersList = data.users;

export const initializeAxiosMockAdapter = (instance) => {
  //product related
  const mock = new MockAdapter(instance);
  mock.onPost("/register").reply((config) => addUser(config));
};

export const addUser = (config) => {
  console.log("addUser called with config:", config);
  const user = JSON.parse(config.data);
  usersList.push(user);
  return [200, user];
};

export const showUsers = () => {};

export const deleteUser = (config) => {
  // const user =
  //   return [200, user];
};

export const updateUser = (config) => {
  //   const id = extractIdPathParamFromUrl(config);
  //   const userIndex = usersList.findIndex((c) => c.id === id);
  //   const user = JSON.parse(config.data);
  //   countriesList[userIndex] = user;
  //   return [200, user];
};

import { API_URI } from "../constants";

// CORE
const callApi = async (url) => {
  const res = await fetch(url);
  // ADD VALIDATION & SERVER ERRORS HERE.
  // Example: status 404
  return res.json();
};

// SERVICES

export const getAll = () => {
  return callApi(`${API_URI}/all`);
};

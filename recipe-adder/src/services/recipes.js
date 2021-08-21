import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/recipes';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const request = axios.post(`${baseUrl}/add`, newObject);
  return request.then((response) => response.data);
};

const recipes = {
  getAll: getAll,
  create: create,
};

export default recipes;

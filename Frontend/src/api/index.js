import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000/api' });

export const fetchProducts = () => API.get('/products');
export const createProduct = (newProduct) => API.post('/products', newProduct);

import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unilab.edu.br/api',
});
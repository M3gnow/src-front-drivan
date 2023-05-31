import axios from 'axios';

export const axiosInstance = axios.create({
  timeout: 18000,
  headers: { 
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Content-Type': 'application/json'
  }
});
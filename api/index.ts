import {
  UserApi,
} from '@/types/typescript-axios/api';

import { Configuration } from '@/types/typescript-axios/configuration';

import axios from 'axios';

const API_URL = process.env.API_URL || 'http://localhost:3000';
console.log('API_URL', API_URL)

const config = new Configuration({
  basePath: API_URL,
});

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

const userApi = new UserApi(config, '', axiosInstance);

export {
  userApi
};

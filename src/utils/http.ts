import axios from 'axios';

const BASE_URL = '/';

const instance = axios.create({
  baseURL: BASE_URL,
});

if (process.env.NODE_ENV === 'development') {
  instance.interceptors.request.use((req) => {
    console.log(`${req.method}:${req.url} : TIME(${new Date()})`);
    return req;
  });
}

instance.interceptors.response.use(
  (res) => res,
  (error) => {
    console.error(
      `${error.config.method.toUpperCase()}:${error.config.url} Error : TIME(${new Date()})`,
    );
  },
);

const http = {
  get: <T>(url: string) => {
    return instance.get<T>(url);
  },
};

export default http;

import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
  backdrops?: T[];
  genres?: T[];
}

//https://api.themoviedb.org/3/movie/550?api_key=bd2ab66e6faf7c9e384833a989606004
const axiosInstance = axios.create({
  // baseURL: 'https://api.rawg.io/api',
  // https://api.rawg.io/api/games?key=765949d838b34ee1924c0bb50fcd977b&page=1
  baseURL: 'https://api.themoviedb.org/3',
  params: {
      // key: '765949d838b34ee1924c0bb50fcd977b',
      api_key: 'bd2ab66e6faf7c9e384833a989606004',

  },
});

const axiosInstance2 = axios.create({
  // baseURL: 'https://api.rawg.io/api',
  // https://api.rawg.io/api/games?key=765949d838b34ee1924c0bb50fcd977b&page=1
  baseURL: 'https://api.themoviedb.org/movie/popular/',
  params: {
      // key: '765949d838b34ee1924c0bb50fcd977b',
      api_key: 'bd2ab66e6faf7c9e384833a989606004',

  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  getAllG = (config: AxiosRequestConfig) => {
    return axiosInstance2
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + '/' + id)
      .then((res) => res.data);
  };


}

export default APIClient;

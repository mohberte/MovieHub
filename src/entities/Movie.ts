import Genre from './Genre';

export default interface Movie {
  id: number;
  original_title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  key: string;
  genres: Genre[];
}

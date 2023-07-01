import Genre from './Genre';

export default interface Game {
  id: number;
  original_title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  key: string;
  name: string;
  slug: string;
  genres: Genre[];
  description_raw: string;
  background_image: string;
  // parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

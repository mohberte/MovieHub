import { useInfiniteQuery } from '@tanstack/react-query';
import ms from 'ms';
import APIClient, { FetchResponse } from '../services/api-client';
import useGameQueryStore from '../store';
import { Game } from '../entities/Game';

const apiClient = new APIClient<Game>('/discover/movie');
const apiClients = new APIClient<Game>('/search/movie');

// { value: 'movie/popular', label: 'popular' },
// { value: 'movie/now_playing', label: 'now playing' }

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  const apiToUse = gameQuery.searchText ? apiClients : apiClient;
  
  const handleRedirect = () => {
    const { sortOrder } = gameQuery;

    switch (sortOrder) {
      case 'movie/popular':
        window.location.href = 'https://api.themoviedb.org/3/discover/movie?api_key=bd2ab66e6faf7c9e384833a989606004&page=1';
        break;
      case 'movie/now_playing':
        window.location.href = 'https://api.themoviedb.org/3/movie/now_playing?api_key=bd2ab66e6faf7c9e384833a989606004&page=1';
        break;
      default:
        break;
    }
  };

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiToUse.getAll({
        params: {
          with_genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          query: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms('24h'),
  });
};

export default useGames;

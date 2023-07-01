import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import Game from '../entities/Game';

const apiClient = new APIClient<Game>('/movie');

const useGame = (id: string) =>
  useQuery({
    queryKey: ['id', id],
    queryFn: () => apiClient.get(id),
  });

export default useGame;

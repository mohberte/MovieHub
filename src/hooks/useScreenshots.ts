import { useQuery } from '@tanstack/react-query';
import Screenshot from '../entities/Screenshot';
import APIClient from '../services/api-client';

interface Backdrop {
  file_path: string;
  // other properties specific to backdrops
}

const useScreenshots = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(
    `/movie/${gameId}/images`
  );

  return useQuery({
    queryKey: ['screenshots', gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshots;

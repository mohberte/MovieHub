import { Heading } from '@chakra-ui/react';
import useGenre from '../hooks/useGenre';
import useGameQueryStore from '../store';

const MovieHeading = () => {
  const genreId = useGameQueryStore(s => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore(s => s.gameQuery.platformId);

  const heading = ` ${
    genre?.name || ''
  } Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default MovieHeading;

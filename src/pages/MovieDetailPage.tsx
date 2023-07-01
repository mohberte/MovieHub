import {
  GridItem,
  Heading,
  SimpleGrid,
  Spinner
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import MovieScreenShots from '../components/MovieScreenshots';
import MovieTrailer from '../components/MovieTrailer';
import useGame from '../hooks/useMovie';

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data: game, isLoading, error } = useGame(id!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game.original_title}</Heading>
        <Heading> {game.key} </Heading>
        { <ExpandableText>{game.overview}</ExpandableText>
        
      }
      <MovieScreenShots gameId={game.id} />
      </GridItem>
      { <GridItem>
<MovieTrailer gameId={game.id} />
      </GridItem> }
    </SimpleGrid>
  );
};

export default MovieDetailPage;

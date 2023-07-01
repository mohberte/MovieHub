import {
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import GameScreenshots from '../components/GameScreenshots';
import GameTrailer from '../components/GameTrailer';
import useGame from '../hooks/useGame';

const GameDetailPage = () => {
  const { id } = useParams();
  const { data: game, isLoading, error } = useGame(id!);
  const link = "https://www.youtube.com/watch?v=" + game?.key;

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game.original_title}</Heading>
        <Heading> {game.key} </Heading>
        { <ExpandableText>{game.overview}</ExpandableText>
        
      }
      <GameScreenshots gameId={game.id} />
      </GridItem>
      {/* <iframe width="420" height="315"
src="https://www.youtube.com/embed/mi4pEsYeljk">

</iframe> */}
      { <GridItem>
<GameTrailer gameId={game.id} />
      </GridItem> }
    </SimpleGrid>
  );
};

export default GameDetailPage;

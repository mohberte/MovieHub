import {
  Box,
  Card,
  CardBody,
  Heading,
  HStack,
  Image
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Circlem from '../compo/circlem';
import Movie from '../entities/Movie';
import getCroppedImageUrl from '../services/image-url';
import CriticScore from './CriticScore';
import Emoji from './Emoji';

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(movie.poster_path)} />
      <CardBody>
       
        <Box position="absolute" top={300}  right={0} zIndex={1}>
        <Circlem score={movie.vote_average} />
      </Box>
          <Heading fontSize="2xl">
          <Link to={'/movie/' + movie.id}>{movie.original_title}</Link>
          <Emoji rating={movie.vote_average} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default MovieCard;

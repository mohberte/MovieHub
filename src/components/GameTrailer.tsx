import useTrailers from '../hooks/useTrailers';

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[0].key;
  return first ? (
    
    <iframe width="420" height="315"
    src={"https://www.youtube.com/embed/"+ first}>
  
    </iframe>
  ) : null;
};

export default GameTrailer;

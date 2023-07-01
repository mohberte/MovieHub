import {
  SimpleGrid,
  Spinner,
  Text
} from '@chakra-ui/react';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useGames from '../hooks/useMovies';
import MovieCard from './MovieCard';
import MovieCardContainer from './MovieCardContainer';
import MovieCardSkeleton from './MovieCardSkeleton';

const MovieGrid = () => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  const fetchedGamesCount =
    data?.pages.reduce(
      (total, page) => total + page.results.length,
      0
    ) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
      key={fetchedGamesCount.valueOf()}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <MovieCardContainer key={skeleton}>
              <MovieCardSkeleton />
            </MovieCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((movie) => (
              <MovieCardContainer key={movie.id}>
                <MovieCard movie={movie} />
              </MovieCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

// export default MovieGrid;

//  {page.results.map((game) => (
//                <Grid>
//                 {/* <Image src={getCroppedImageUrl(game.backdrop_path)} /> */}
//                 <Image src={getCroppedImageUrl(game.poster_path)} />
//                  <Link to={'/movie/' + game.id}>{game.original_title}</Link>
//                 <Circlem score={game.vote_average}/>
//                  hehe  </Grid>
//               ))}
import {
    Grid,
    SimpleGrid,
    Spinner,
    Text,
Image,  
Box,
Flex} from '@chakra-ui/react';
  import React from 'react';
  import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import MovieCardContainer from '../components/MovieCardContainer';
import MovieCardSkeleton from '../components/MovieCardSkeleton';
import SortSelector from '../components/SortSelector';
  import useGames from '../hooks/useMovies';
import getCroppedImageUrl from '../services/image-url';
import Circlem from './circlem';
  
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
  
  export default MovieGrid;
  
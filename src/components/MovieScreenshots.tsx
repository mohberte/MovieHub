import { Image, SimpleGrid } from '@chakra-ui/react';
import React from 'react'
import useScreenshots from '../hooks/useScreenshots';

interface Props {
  gameId: number;
}

const MovieScreenshots = ({ gameId }: Props) => {
  const {data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;
  
  if (error) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.backdrops?.map(file => 
        <Image key={file.id} src={"http://image.tmdb.org/t/p/w300//" + file.file_path} />)}
    </SimpleGrid>
  )
}

export default MovieScreenshots
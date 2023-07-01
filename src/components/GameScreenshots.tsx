import { Image, SimpleGrid } from '@chakra-ui/react';
import React from 'react'
import useScreenshots from '../hooks/useScreenshots';

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const {data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;
  
  if (error) throw error;
  console.log('data');
  console.log(data?.backdrops);
  console.log('data');
  

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.backdrops?.map(file => 
        <Image key={file.id} src={"http://image.tmdb.org/t/p/w300//" + file.file_path} />)}
    </SimpleGrid>
  )
}

export default GameScreenshots
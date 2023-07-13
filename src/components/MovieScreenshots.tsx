import { Image, SimpleGrid } from '@chakra-ui/react';
import React from 'react'
import Slider from "react-slick";
import useScreenshots from '../hooks/useScreenshots';

interface Props {
  gameId: number;
}

const MovieScreenshots = ({ gameId }: Props) => {

  var settings = {
    dots: true,
    infinite: true,
    variableWidth: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const {data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;
  
  if (error) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} style={{
      width:700}}>
      <Slider {...settings} >
      {data?.backdrops?.map(file => 
        <Image key={file.id} src={"http://image.tmdb.org/t/p/w300//" + file.file_path} />)}
        </Slider>
    </SimpleGrid>
  )
}

export default MovieScreenshots
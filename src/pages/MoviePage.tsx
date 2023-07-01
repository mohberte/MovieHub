import { Box, Grid, Show, GridItem, Flex } from '@chakra-ui/react'
import MovieGrid from '../compo/MovieGrid'
import GameGrid from '../components/GameGrid'
import GameHeading from '../components/GameHeading'
import GenreList from '../components/GenreList'

const MoviePage = () => {
  return (
    <Grid
    templateAreas={{
      base: `"main"`,
      lg: `"aside main"`,
    }}
    templateColumns={{
      base: '1fr',
      lg: '250px 1fr',
    }}
  >
  <div className="container">yoo</div>
  <Show above="lg">
      <GridItem area="aside" paddingX={5}>
        <GenreList />
      </GridItem>
    </Show>
      <GridItem gridArea="main">
        <MovieGrid />
      </GridItem>
    </Grid>
  )
}

export default MoviePage
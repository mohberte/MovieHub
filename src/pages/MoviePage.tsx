import { Box, Grid, Show, GridItem, Flex } from '@chakra-ui/react'
import MovieGrid from '../compo/MovieGrid'
import Disclaimer from '../components/Disclaimer'
import GenreList from '../components/GenreList'
import SortSelector from '../components/SortSelector'

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
  
  <Show above="lg">
      <GridItem area="aside" paddingX={5} >
        <GenreList />
        <div style={{ marginTop: '20px' }}>
    <Disclaimer />
  </div>
        
      </GridItem>
    </Show>
      <GridItem gridArea="main">
      <Box paddingLeft={2}>
        <Flex marginBottom={5}>
        </Flex>
      </Box>
        <MovieGrid />
      </GridItem>
    </Grid>
  )
}

export default MoviePage
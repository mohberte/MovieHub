import { Box, Grid, Show, GridItem, Flex } from '@chakra-ui/react'
import MovieGrid from '../compo/MovieGrid'
import GenreList from '../components/GenreList'
import MovieHeading from '../components/MovieHeading'
import SortSelector from '../components/SortSelector'

const HomePage = () => {
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
      <GridItem area="aside" paddingX={5}>
        <GenreList />
      </GridItem>
    </Show>
    <GridItem area="main">
      <Box paddingLeft={2}>
        <MovieHeading />
        <Flex marginBottom={5}>
          <Box marginRight={5}>
          </Box>
          <SortSelector />
        </Flex>
      </Box>
      <MovieGrid />
    </GridItem>
  </Grid>
  )
}

export default HomePage
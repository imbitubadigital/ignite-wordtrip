import { Grid, GridItem } from "@chakra-ui/react";
import {Item} from './Item'

export function Categories () {
  return (
    <Grid
      templateColumns={["1fr 1fr","1fr 1fr","1fr 1fr","repeat(5, 1fr)"]}
      maxW="1160"
      w="100%"
      mx="auto"
      gap={[1, 5]}
      justify="space-between"
      align="center"
      mt={["10","32"]}
    >
      <GridItem>
        <Item icon="cocktail" name="vida noturna" />
      </GridItem>
      <GridItem>
        <Item icon="surf" name="praia" />
      </GridItem>
      <GridItem>
        <Item icon="building" name="moderno" />
      </GridItem>
      <GridItem>
        <Item icon="museum" name="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Item icon="earth" name="e mais..." />
      </GridItem>
    </Grid>
  )
}

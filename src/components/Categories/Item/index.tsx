import { Flex, Image, Text, useBreakpointValue, Box } from "@chakra-ui/react";
import {PropsItem} from './interfaces'
export function Item({icon, name}: PropsItem) {
  const isMobile = useBreakpointValue({
    base:false,
    sm:true
  })
  return (
    <Flex direction={["row", "column"]} align="center" justify="center">
     {isMobile ? <Image src={`/categories/${icon}.svg`} alt={name} w="85px" /> : <Box w="8px" h="8px" borderRadius="4px" bg="yellow.400" mx="10px" />}
      <Text fontWeight="600" color="gray.700" fontSize={["md", "xl","2xl"]}>{name}</Text>
    </Flex>
  )
}

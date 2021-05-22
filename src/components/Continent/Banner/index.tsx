import { Flex, Heading} from "@chakra-ui/react";
import {PropsBanner} from './interfaces'
export function Banner({image, title}: PropsBanner){
  return (
    <Flex
      h={["150px","300px","500px"]}
      px={["0","0","36"]}
      pt={["0","0","72"]}
      bgImage={`url('${image}')`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify={["center","center", "flex-start"]}
    >
      <Heading
      as="h2"
        textAlign={["center","left"]}
        fontSize={["1.75rem","5xl"]}
        color="gray.100"
        fontWeight="500"
      >
        {title}
      </Heading>

    </Flex>
  )

}

import { Flex, Image, Box, Heading, Text} from "@chakra-ui/react"
export function Banner () {
  return (
    <Flex
      w="100%"
      h={["335px"]}
      bgImage="url('banner.svg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex w="100%"
        maxW="1160px"
        mx="auto"
        direction="row"
        justify="space-between"
        align="center"
        padding={['20px', '20px', '20px', '0px']}

        >
        <Box maxW="375">
          <Heading as="h2" fontSize="36" color="white" fontWeight="500">
            5 Continentes<br />
            infinitas possibilidades.
          </Heading>
          <Text fontSize="20" mt="6"  color="gray.300">Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
        </Box>

        <Image
          src="airplane.svg"
          alt="Conheça o mundo"
          width="417px"
          mt="28"
          w={["300px","300px","300px","430px"]}
          display={['none','none', 'block']}
        />
      </Flex>
    </Flex>
  );
}

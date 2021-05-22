import { Flex, Box, Image, Icon} from "@chakra-ui/react"
import {PropsHeader} from './interfaces'
import Link from 'next/link'
import { RiArrowLeftSLine } from 'react-icons/ri';

export function Header ({back = false}: PropsHeader) {
  return (
    <Flex as="header" bg="gray.100" w="100%" h={["50ox", "100px"]}>
      <Flex w="100%" maxW="1160px" mx="auto" direction="row" justify="space-between" align="center">
        {!back ? (<Box />) : (
          <Link href="/" >
            <a>
              <Icon as={RiArrowLeftSLine} fontSize={32} />
            </a>
          </Link>
        )}
        <Image src="/logo.svg" alt="WordTrip" width="184px" />
        <Box />
      </Flex>

    </Flex>
  )
}

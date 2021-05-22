import {Flex, Heading, Text} from '@chakra-ui/react'
import Link from 'next/link';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import {SliderProps} from './interfaces'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export function Slider({continents}: SliderProps) {
  return (
    <Flex maxW="1160px" mx="auto" w="100%" direction="column">
      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5","14"]}
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa?<br/>Então escolha seu continente
      </Heading>
      <Flex w="100%" h={["250px","450px"]} maxW="1160px" mx="auto" mb={["5","10"]}>
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay:4000,
        }}
        style={{width: '100%', flex: '1'}}
      >

        {continents.map(continent => (
          <SwiperSlide key={continent.slug}>
                <Flex
                  w="100%"
                  h="100%"
                  align="center"
                  justify="center"
                  direction="column"
                  bgImage={`url('${continent.image}')`}
                  bgPosition="100% 30%"
                  bgRepeat="no-repeat"
                  bgSize="cover"
                  textAlign="center"
                >
                  <Link href={`/continent/${continent.slug}`}>
                    <a>
                      <Heading fontSize={["3xl","4xl","5xl"]} color="gray.100" fontWeight="bold">{continent.title}</Heading>
                      <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem","1xl", "2xl"]} mt={["2","4"]}>{continent.summary}</Text>
                    </a>
                  </Link>
                </Flex>
          </SwiperSlide>
        ))}

      </Swiper>
    </Flex>
    </Flex>
  )
}

import React from 'react'
import { Box, Flex, Heading, Stack, Text, Image as ChakraImage, Divider, Center, Button } from '@chakra-ui/react'
import Image from 'next/image'

// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  return (
    <Flex flex={1} direction="column" w="100%" margin="0 auto" maxW={1120}>
      <Flex as="header" flex={1} align="center" justify="center" p="27px 0px">
        <Image src="/Logo.svg" width="187" height="46" alt="worldtrip" />
      </Flex>

      <ChakraImage
        h={335}
        pos="absolute"
        w="100vw"
        top={100}
        left={0}
        src="/Banner.png"
        objectFit="cover" />
      <Flex direction="column" justify="center" pos="relative" h={370}>
        <Heading color="white">
          5 Continentes,<br />
          infinitas possibilidades.
        </Heading>
        <Text color="white">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
        <Box pos="absolute" transform="rotateZ(3deg);" right={0} bottom={0}>
          <Image src="/Airplane.png" width="417" height="271" alt="Avião" />
        </Box>
      </Flex>

      <Flex marginTop={20}>
        <Stack spacing={5} flex={1} align="center">
          <Image src="/icons/cocktail.svg" width="85" height="85" alt="coquetel" />
          <Text as="h4" fontSize="lg" fontWeight="semibold">
            vida noturna
          </Text>
        </Stack>
        <Stack spacing={5} flex={1} align="center">
          <Image src="/icons/surf.svg" width="85" height="85" alt="praia" />
          <Text as="h4" fontSize="lg" fontWeight="semibold">
            praia
          </Text>
        </Stack>
        <Stack spacing={5} flex={1} align="center">
          <Image src="/icons/building.svg" width="85" height="85" alt="prédio" />
          <Text as="h4" fontSize="lg" fontWeight="semibold">
            moderno
          </Text>
        </Stack>
        <Stack spacing={5} flex={1} align="center">
          <Image src="/icons/museum.svg" width="85" height="85" alt="museu" />
          <Text as="h4" fontSize="lg" fontWeight="semibold">
            clássico
          </Text>
        </Stack>

        <Stack spacing={5} flex={1} align="center">
          <Image src="/icons/earth.svg" width="85" height="85" alt="terra" />
          <Text as="h4" fontSize="lg" fontWeight="semibold">
            e mais...
          </Text>
        </Stack>
      </Flex>

      <Center marginY={20}>
        <Divider w="90px" borderColor="gray.600"/>
      </Center>

      <Center>    
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true, type: 'bullets'  }}
        >
          <SwiperSlide>
            <Flex color="white" flex={1} direction="column" align="center" justify="center" h={406} backgroundImage="url(/slider/Europe.png)" backgroundSize="cover" backgroundPosition="center">
              <Heading as="h2" fontSize="xxx-large" fontWeight="semibold">
                Europa
              </Heading>
              <Text fontSize="xl" marginTop={5} fontWeight="semibold">
                O continente mais antigo.
              </Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex color="white" flex={1} direction="column" align="center" justify="center" h={406} backgroundImage="url(/slider/America.jpg)" backgroundSize="cover">
              <Heading as="h2" fontSize="xxx-large" fontWeight="semibold">
                Europa
              </Heading>
              <Text fontSize="xl" marginTop={5} fontWeight="semibold">
                O continente mais antigo.
              </Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </Center>
      <div>

      </div>
    </Flex>
  )
}

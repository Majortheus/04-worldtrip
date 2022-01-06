import React from 'react'
import { Box, Flex, Heading, Text, Image as ChakraImage, Grid, } from "@chakra-ui/react";
import Image from 'next/image';
import { ChevronLeftIcon } from '@chakra-ui/icons'

export default function Home() {
  return (
    <Flex flex={1} direction="column" w="100%" margin="0 auto" maxW={1120} paddingBottom={10}>
      <Flex as="header" flex={1} align="center" justify="center" p="27px 0px">
        <ChevronLeftIcon pos="absolute" left={180} w="7" h="7" />
        <Image src="/Logo.svg" width="187" height="46" alt="worldtrip" />
      </Flex>
      <ChakraImage
        h={450}
        pos="absolute"
        w="100vw"
        top={100}
        left={0}
        src="/slider/Europe.png"
        objectFit="cover" />
      <Flex direction="column" justify="flex-end" pos="relative" h={450}>
        <Heading color="white" mb="10">
          Europa
        </Heading>
      </Flex>
      <Flex mt="10">
        <Text as="p" maxW={550}>
          A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, A Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
        <Flex p="0 50px" flex="1" justifyContent="space-around">
          <Box textAlign="center">
            <Text color="brand.500" fontSize="3xl" fontWeight="bold">50</Text>
            <Text fontWeight="bold">países</Text>
          </Box>
          <Box textAlign="center">
            <Text color="brand.500" fontSize="3xl" fontWeight="bold">60</Text>
            <Text fontWeight="bold">línguas</Text>
          </Box>
          <Box textAlign="center">
            <Text color="brand.500" fontSize="3xl" fontWeight="bold">27</Text>
            <Text fontWeight="bold">cidades +100</Text>
          </Box>
        </Flex>
      </Flex>
      <Flex mt="14" direction="column">
        <Heading fontSize="3xl">Cidades +100</Heading>
        <Grid mt="10" gap="10" templateColumns="repeat(auto-fill, 250px);">
          <Box border="1px solid black" borderRadius={8} w={250} overflow="hidden">
            <ChakraImage src="/slider/Europe.png" w={250} h={180} alt="Paris" />
            <Flex p="15px 25px" justifyContent="space-between" alignItems="center">
              <Flex direction="column">
                <Text fontSize="xl" fontWeight="bold" color="gray.600">Paris</Text>
                <Text color="gray.400">França</Text>
              </Flex>
              <ChakraImage src="/slider/Europe.png" w={10} h={10} alt="Frence Flag" borderRadius="50%" />
            </Flex>
          </Box>
          <Box border="1px solid black" borderRadius={8} w={250} overflow="hidden">
            <ChakraImage src="/slider/Europe.png" w={250} h={180} alt="Paris" />
            <Flex p="15px 25px" justifyContent="space-between" alignItems="center">
              <Flex direction="column">
                <Text fontSize="xl" fontWeight="bold" color="gray.600">Paris</Text>
                <Text color="gray.400">França</Text>
              </Flex>
              <ChakraImage src="/slider/Europe.png" w={10} h={10} alt="Frence Flag" borderRadius="50%" />
            </Flex>
          </Box>
          <Box border="1px solid black" borderRadius={8} w={250} overflow="hidden">
            <ChakraImage src="/slider/Europe.png" w={250} h={180} alt="Paris" />
            <Flex p="15px 25px" justifyContent="space-between" alignItems="center">
              <Flex direction="column">
                <Text fontSize="xl" fontWeight="bold" color="gray.600">Paris</Text>
                <Text color="gray.400">França</Text>
              </Flex>
              <ChakraImage src="/slider/Europe.png" w={10} h={10} alt="Frence Flag" borderRadius="50%" />
            </Flex>
          </Box>
          <Box border="1px solid black" borderRadius={8} w={250} overflow="hidden">
            <ChakraImage src="/slider/Europe.png" w={250} h={180} alt="Paris" />
            <Flex p="15px 25px" justifyContent="space-between" alignItems="center">
              <Flex direction="column">
                <Text fontSize="xl" fontWeight="bold" color="gray.600">Paris</Text>
                <Text color="gray.400">França</Text>
              </Flex>
              <ChakraImage src="/slider/Europe.png" w={10} h={10} alt="Frence Flag" borderRadius="50%" />
            </Flex>
          </Box>
          <Box border="1px solid black" borderRadius={8} w={250} overflow="hidden">
            <ChakraImage src="/slider/Europe.png" w={250} h={180} alt="Paris" />
            <Flex p="15px 25px" justifyContent="space-between" alignItems="center">
              <Flex direction="column">
                <Text fontSize="xl" fontWeight="bold" color="gray.600">Paris</Text>
                <Text color="gray.400">França</Text>
              </Flex>
              <ChakraImage src="/slider/Europe.png" w={10} h={10} alt="Frence Flag" borderRadius="50%" />
            </Flex>
          </Box>
          <Box border="1px solid black" borderRadius={8} w={250} overflow="hidden">
            <ChakraImage src="/slider/Europe.png" w={250} h={180} alt="Paris" />
            <Flex p="15px 25px" justifyContent="space-between" alignItems="center">
              <Flex direction="column">
                <Text fontSize="xl" fontWeight="bold" color="gray.600">Paris</Text>
                <Text color="gray.400">França</Text>
              </Flex>
              <ChakraImage src="/slider/Europe.png" w={10} h={10} alt="Frence Flag" borderRadius="50%" />
            </Flex>
          </Box>
        </Grid>
      </Flex>
    </Flex >
  )
}
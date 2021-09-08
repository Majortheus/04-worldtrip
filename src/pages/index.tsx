import { Box, Flex, Heading, Stack, Text, Image as ChakraImage } from '@chakra-ui/react'
import Image from 'next/image'

export default function Home() {
  return (
    <Flex flex={1} direction="column" w="100%" margin="0 auto" maxW={1120}>
      <Flex as="header" flex={1} align="center" justify="center" p="27px 0px">
        <Image src="/Logo.svg" width="187" height="46" alt="worldtrip"/>
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
          5 Continentes,<br/>
          infinitas possibilidades.
        </Heading>
        <Text color="white">	
          Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
        </Text>
        <Box pos="absolute" rotateX="-3deg" right={0} bottom={0}>
          <Image src="/Airplane.png" width="417" height="271" alt="Avião" />
        </Box>
      </Flex>
      
      <Flex marginTop={25}>
        <Stack spacing={5} flex={1} align="center">
          <Image src="/icons/cocktail.svg" width="85" height="85" alt="coquetel" />
          <Text as="h4" fontSize="lg">
            vida noturna
          </Text>
        </Stack>
        <Stack spacing={5} flex={1} align="center">
          <Image src="/icons/surf.svg" width="85" height="85" alt="praia" />
          <Text as="h4" fontSize="lg">
            praia
          </Text>
        </Stack>
        <Stack spacing={5} flex={1} align="center">
          <Image src="/icons/building.svg" width="85" height="85" alt="prédio" />
          <Text as="h4" fontSize="lg">
            moderno
          </Text>
        </Stack>
        <Stack spacing={5} flex={1} align="center">
        <Image src="/icons/museum.svg" width="85" height="85" alt="museu" />
          <Text as="h4" fontSize="lg">
            clássico
          </Text>
        </Stack>
        
        <Stack spacing={5} flex={1} align="center">
          <Image src="/icons/earth.svg" width="85" height="85" alt="terra" />
          <Text as="h4" fontSize="lg">
          e mais...
          </Text>
        </Stack>
      </Flex>
      <div>
        
      </div>
      <div>
        
      </div>
    </Flex>
  )
}

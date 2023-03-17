import {
  Box,
  Center,
  Container,
  Heading,
  Image,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {data} from '../../app/components/database'

export default function Instructors() {
  return (
    <>
      <Box my={'30px'}>
        <Container maxW={1400}>
          <Flex display={{lg:'flex', base:'grid'}}>
            {data.map((ins) => (
                <Box key={ins.id} rowGap='10px'>
                <Center>
                  <Image borderRadius={'full'} alt='Zia' src={ins.src} height={'90px'} width='90px'></Image>
                </Center>
                  <Heading textAlign={'center'} size='md'>{ins.heading}</Heading>
                  <Text textAlign={'center'} fontSize='sm' px='30px'>{ins.text}
                  </Text>
                </Box>
            ))}
          </Flex>
        </Container>
      </Box>
    </>
  );
}

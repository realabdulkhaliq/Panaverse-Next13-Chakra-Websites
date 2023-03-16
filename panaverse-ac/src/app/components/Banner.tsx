import { Box, Container, Heading } from '@chakra-ui/react'
import React from 'react'

export default function Banner(hello: any) {
  return (
    <>
    <Box bgImage={hello.src} bgSize='cover' bgAttachment='fixed' py={'200px'}>
        <Container maxW={1100}>
            <Heading color={'white'} size='2xl'>{hello.title}</Heading>
        </Container>
    </Box>
    </>
  )
}

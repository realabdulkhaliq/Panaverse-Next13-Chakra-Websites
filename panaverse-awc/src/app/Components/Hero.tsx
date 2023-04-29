'use client'

import { Box, Button, Flex, Stack, Heading, Text, AvatarGroup, Avatar, HStack, Container } from "@chakra-ui/react"
import Image from "next/image"
import banner from '@/../public/banner5.png'

const Hero = () => {
return(
    <>
    <Box backgroundImage={'/bg.webp'} backgroundAttachment={'fixed'} backgroundSize={'cover'} p={{md:'20', base:'5'}}>
        <Container maxW={'container.xl'}>
        <Stack direction={{base:'column', md:'row'}}>
            <Box w={{base:'100%', md:'50%'}}>
            <Heading color={'white'} size={'3xl'}>Build your next idea even faster</Heading>
            <Text lineHeight={'8'} color={'white'} mb={6}>One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies</Text>
            <Button colorScheme="blue" mr={2}>Buy Now</Button>
            <Button colorScheme="blue" variant={'outline'}>View Components</Button>
            <Flex alignItems={'center'} display={{base:'grid', md:'flex'}}>
            <AvatarGroup size='md' max={4} mt={6}>
                <Avatar name="Zia Khan" src="/Zia.webp" />
                <Avatar name="Adil Altaf" src="/adil.jpg" />
                <Avatar name="Awais Ali" src="/owais.jpg" />
                <Avatar name="Abdul Khaliq" src="/ak.jpg" />
                <Avatar name="Abdul Khaliq" src="/ak.jpg" />
            </AvatarGroup>
            <Text color={'white'} mt="5" ml="3">Created By Abdul Khaliq</Text>
            </Flex>
            </Box>
            <Box w={{base:'100%', md:'50%'}}>
            <Image src={banner} alt="Image"/>
            </Box>
        </Stack>
        </Container>
        </Box>
    </>
)
}

export default Hero
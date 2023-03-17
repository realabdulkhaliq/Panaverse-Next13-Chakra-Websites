'use client'
import { Box, Button, Center, Container, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import banner1 from '@/../public/banner1.webp'
import banner2 from '@/../public/banner2.webp'
import banner3 from '@/../public/banner3.webp'
import Image from 'next/image'
import { top } from '../components/database';
import Link from 'next/link'
import Instructors from './Instructors'
import { RevealWrapper } from  'next-reveal'

export default function HomePage() {
  return (
    <>
    <Box bgImage={'bannerbg.png'} bgSize='cover'>
        <Container maxW={1400}>
        <Flex px={10} py={{lg:'150px', base:'80px'}} display={{lg:'flex', base:'grid'}}>
            <Box flexBasis='50%'>
                <Heading size={'2xl'} color={'white'}>Prepare yourself for the Next Generation of Internet with Panaverse</Heading>
                <Text color={'whiteAlpha.700'} mt='20px'>One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies</Text>
                <Button colorScheme='purple' size='lg' mt='20px'>More Info</Button>
            </Box>
            <Box mt={{lg:'-90px', base:'10px'}} flexBasis='50%'>
            <RevealWrapper origin='top' delay={200} duration={1000} distance='500px' reset={true}>
                <Image src={banner1} alt='' height={600} width={600}></Image>
            </RevealWrapper>
            </Box>
        </Flex>
        </Container>
    </Box>
    <Box>
        <Container maxW={1400}>
            <Flex display={{lg:'flex', base:'grid'}} gap={10} m='50px' columnGap={40}>
            <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
            <Box flexBasis={'50%'}>
                <Image src={banner2} alt=''/>
            </Box>
            </RevealWrapper>
            <Box flexBasis='50%' m='auto'>
            <RevealWrapper origin='right' delay={200} duration={1000} distance='500px' reset={true}>
                <Heading bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' pb={'10px'}>Program Of Studies</Heading>
                <Text mt='20px'>This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</Text>
                <Button mt='20px' colorScheme='purple'>Read More</Button>
            </RevealWrapper>
            </Box>
            </Flex>
        </Container>
    </Box>
    <Box>
        <Container maxW={1400}>
            <Box bg='purple.100' textAlign='center' py='80px'>
                <Heading bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'>Our Top Courses</Heading>
                <Center>
                    <Flex display={{lg:'flex', base:'grid'}}>
                    {top.map((top) =>(
                    <Box key={top.id} m='20px' borderRadius={'lg'} boxShadow='dark-lg' bgColor={'white'} p='20px'>
                        <Heading textDecoration={'underline'}>{top.heading}</Heading>
                        <Text>{top.text}</Text>
                    </Box>
                    ))}
                    </Flex>
                </Center>
                <Link href={'/syllabus'}><Button colorScheme={'purple'} size='lg'>View All</Button></Link>
            </Box>
        </Container>
    </Box>
    <Box>
        <Container maxW={1400}>
            <Flex display={{lg:'flex', base:'grid'}} gap={10} m='50px' columnGap={40}>
            <Box flexBasis='50%' m='auto'>
                <Heading bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'>What Is Panaverse DAO?</Heading>
                <Text mt='20px'>Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professional metaverse developers from Pakistan for the upcoming Era of Internet.</Text>
                <Button mt='20px' colorScheme='purple'>Read More</Button>
            </Box>
            <Box flexBasis={'50%'}>
                <Image src={banner3} alt=''/>
            </Box>
            </Flex>
        </Container>
    </Box>
    <Box>
        <Container maxW={1380}>
            <Box bg='purple.100' borderLeftColor={'purple.900'} borderLeftWidth={'thick'} borderRadius={'lg'} textAlign='center' p='80px'>
                <Heading bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' pb={'12px'}>The Program in a Nutshell</Heading>
                <Heading color={'purple.700'} mt='20px'>Earn While You Learn</Heading>
                <Text mt='20px'>In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program’s beginning. It resembles a cross between a corporate venture and an educational project.</Text>
            </Box>
        </Container>
    </Box>
    <Instructors />
    </>
  )
}

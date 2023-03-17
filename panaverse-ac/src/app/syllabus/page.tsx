'use client';
import { Box, Center, Container, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react'
import Banner from '../components/Banner'
import { core, cards } from '../components/database';

export default function Syllabus() {
  return (
    <>
    <Banner title='Syllabus' src='/syllabuscover.png' />
    <Box>
      <Container maxW={1400}>
        <Box my={'40px'}>
          <Heading bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' textAlign={'center'} size='2xl' p='10px'>Course Syllabus</Heading>
          <Text textAlign={'center'} mx={{lg:'110px', base:'20px'}} mt={'10px'}>The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each.</Text>
        </Box>
        <Box my={'40px'}>
          <Heading bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' textAlign={'center'}>Common In All</Heading>
          <Text textAlign={'center'} mx={{lg:'110px', base:'20px'}} mt={'10px'}>Every participant of the program will start by completing the following three core courses.</Text>
        </Box>
        <Center>
        <Flex gap='20px' display={{lg:'flex', base:'grid'}} m='auto'>
          {core.map((co) => (
            <Box textAlign={'center'} boxShadow='dark-lg' mx={'20px'} borderRadius={'lg'} p='20px' width='350px' bgGradient={'radial(white, purple.100)'} key={co.id}>
            <Center flexDir={'column'} rowGap='20px'>
            <Heading textDecoration={'underline'} p='10px'>{co.heading}</Heading>
            <Text>{co.text}</Text>
            </Center>
          </Box>
          ))}
        </Flex>
        </Center>
        <Box mt='40px' textAlign={'center'}>
          <Heading bgGradient={'linear(to-l, #7928CA, #FF0080)'} bgClip='text'>Specialized Tracks</Heading>
          <Text mt='20px'>After completing the first two quarters the participants will select one or more specializations consisting of two courses each:</Text>
        </Box>
        {cards.map((card)=>(
        <Box key={card.id} textAlign='center'>
          <Center flexDir={'column'} rowGap='20px'>
          <Heading mt={'50px'} bgGradient='linear(to-r, blue.900, purple.300)' bgClip={'text'}>{card.heading1}</Heading>
          <Text mb={'30px'}>{card.text1}</Text>
          </Center>
          <Center flexDir={'column'} rowGap='20px'>
          <Flex gap={'30px'} mb='20px' display={{lg:'flex', base:'grid'}}>
            <Box boxShadow={'dark-lg'} borderRadius='lg' width='350px' p='30px' bgGradient={'radial(white, purple.100)'}>
              <Heading textDecoration={'underline'}>{card.heading2}</Heading>
              <Text>{card.text2}</Text>
            </Box>
            <Box boxShadow={'dark-lg'} borderRadius='lg' width='350px' p='30px' bgGradient={'radial(white, purple.100)'}>
              <Heading textDecoration={'underline'}>{card.heading3}</Heading>
              <Text>{card.text3}</Text>
            </Box>
          </Flex>
          </Center>
        </Box>
        ))}
      </Container>
    </Box>
    </>
  )
}

'use client';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons'
import Image from 'next/image';
import React from 'react'
import Banner from '../components/Banner'
import launching from '../../../public/launching.jpg'


export default function Contact() {
  return (
    <>
    <Banner title='Contact Us' src='/second.jpg' />
    <Box>
      <Container maxW={1400}>
        <Box my='50px' mx='20px'>
          <Heading textAlign={'center'} bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'>Certified Web 3.0 and Metaverse Developer: A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar</Heading>
          <Text textAlign={{lg:'center', base:'justify'}} mt='20px'>This curriculum is intended for beginners who want to learn software development from the ground up. The first two quarters are shared by all specialities and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a year-long hybrid programme that includes both onsite and online classes and is divided into four quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.</Text>
        </Box>
        <Flex display={{lg:'flex', base:'grid'}}>
          <Box flexBasis={'50%'} m='20px'><Image src={launching} alt='Launching'></Image></Box>
          <Box flexBasis={'50%'} m='20px'>
            <Heading  bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' pb='10px'>President Launching the PIAIC</Heading>
            <Text mt='20px'>President Dr Arif Alvi launching the PIAIC with Mr Zia Ullah Khan, Mr Adil Altaf, Mr Hunaid Lakhani, Mr Sulaiman, Mr Zeeshan Hanif, Maulana Bashir Farooqi, and Yousaf Lakhani on Dec. 9, 2018.</Text>
            <Heading size={'md'} mt='30px'>PIAIC Helpline</Heading>
            <Flex mt='20px'>
            <PhoneIcon /><Text ml='10px'>+92-308-2220203 (WhatsApp as well)</Text>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
    </>
  )
}

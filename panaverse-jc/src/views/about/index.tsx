import { Box, Container, Heading, Text, Flex, } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'
import presedent from '../../assets/images/President.webp'
import { about } from '@/utils/data'

export default function AboutPage() {
  return (
    <>
    <Container maxW={'container.md'} mt={120} mb={'80px'}>
        <Flex justify={'center'}>
            <Image src={presedent} alt='President of Pakistan' width={100} height={100}></Image>
        </Flex>
        <Heading size={'md'} textAlign={'center'} pt={4}>{about.title}</Heading>
        <Heading size={'sm'} color={'#718096'} textAlign={'center'} pt={4}>{about.subTitle}</Heading>
        <Box textAlign={'justify'} pt={8}>
            <Text>{about.description1}</Text>
            <Text pt={4}>
            Dr. Arif Alvi was born in <Text as={'span'} fontWeight={'bold'}>1949</Text> and completed his early 
            education in Karachi. He did his Bachelor of Dental Surgery (BDS) from De’ Montmorency College of 
            Dentistry, Lahore where he was declared the <Text as={'span'} fontWeight={'bold'}>“Best Graduate”</Text>. He completed his Masters of Science in 
            the field of Prosthodontics from University of Michigan (1975) and in Orthodontics from University 
            of Pacific, San Francisco (1982). He was awarded fellowship <Text as={'span'} fontWeight={'bold'}>‘Diplomatic American Board of 
            Orthodontists (1995)’.</Text>
            </Text>
            <Text pt={4}>{about.description2}</Text>
            <Text pt={4}>{about.description3}</Text>
            <Text pt={4}>{about.description4}</Text>
        </Box>
    </Container>
    </>
  )
}

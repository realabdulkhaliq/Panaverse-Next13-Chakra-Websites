'use client'
import React from 'react'
import logo from '@/../public/logo.png'
import Image from 'next/image'
import { Box, Container, Flex, Grid, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'

export default function Footer() {
  return (
    <>
    <Box bg={'blackAlpha.900'} py={'60px'} px='20px'>
        <Container maxW={1400}>
            <SimpleGrid spacing={'15px'} templateColumns={{lg:'repeat(4, 1fr)', md:'repeat(2, 1fr)', base:'repeat(1, 1fr)'}} textAlign={{lg:'start', md:'start',base:'center'}}>
                <Box>
                    <Heading size={'lg'} color={'white'}>ABOUT US</Heading>
                    <Box px={{lg:'0',md:'0',base:'100px'}}><Image src={logo} alt='Panaverse' width={120} height={120}></Image></Box>
                    <Text color={'gray'} pr='20px'>The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.</Text>
                </Box>
                <Box>
                    <Heading size={'lg'} color={'white'}>USEFUL LINKS</Heading>
                    <Grid color={'gray'} pt='40px' rowGap={'5px'}>
                        <Link href={''}>Home</Link>
                        <Link href={''}>Syllabus</Link>
                        <Link href={''}>Explore</Link>
                        <Link href={''}>About</Link>
                        <Link href={''}>Contact</Link>
                    </Grid>
                </Box>
                <Box>
                    <Heading size={'lg'} color={'white'}>FOLLOW US</Heading>
                    <Grid color={'gray'} pt='40px' rowGap={'5px'}>
                        <Link href={''}>Facebook</Link>
                        <Link href={''}>Youtube</Link>
                        <Link href={''}>Twitter</Link>
                        <Link href={''}>Linkedin</Link>
                        <Link href={''}>Github</Link>
                    </Grid>
                </Box>
                <Box>
                    <Heading size={'lg'} color={'white'}>CONTACT US</Heading>
                    <Grid color={'gray'} pt='40px' rowGap={'5px'}>
                    <Flex justifyContent={{lg:'start', md:'start',base:'center'}}><PhoneIcon mr={'10px'} /><Link href={''}>+92 123 4567890</Link></Flex>
                    <Flex justifyContent={{lg:'start', md:'start',base:'center'}}><EmailIcon mr={'10px'} /><Link href={''}>iqhlak005@gmail.com</Link></Flex>
                        <Link href={''}>Lahore, Pakistan</Link>
                    </Grid>
                </Box>
            </SimpleGrid>
        </Container>
    </Box>
    </>
  )
}

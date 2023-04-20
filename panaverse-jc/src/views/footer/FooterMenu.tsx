import { Container, SimpleGrid, Box, Text, Heading, Grid, Link, HStack, FormControl, Input, IconButton, InputGroup, InputLeftElement } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import logo from 'public/logo.png'
import NextLink from 'next/link'
import { AiOutlineTwitter, AiOutlineYoutube, AiOutlineFacebook, AiOutlineGithub } from 'react-icons/ai'
import {EmailIcon} from '@chakra-ui/icons'

export default function FooterMenu() {
  return (
    <>
    <Container maxW={'full'} padding={0} bg={'#0C0C0E'} py={'30px'}>
      <SimpleGrid templateColumns={{base:'1fr', md:'1fr 1fr', lg:'2fr 1fr 1fr 1fr'}} p={'20px'}>
        <Box>
          <Box color={'gray'} bgClip='text'>
          <Image src={logo} alt='' width={200} height={120}/></Box>
          <Text fontSize={'sm'} mt={6} pr={'60px'} color={'gray'}>The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.</Text>
          <HStack color={'white'} mt={'20px'} spacing={6}>
            <Link as={NextLink} isExternal href='https://github.com/panaverse/learn-nextjs'><AiOutlineTwitter size={30}/></Link>
            <Link as={NextLink} isExternal href='https://www.youtube.com/@panaverse'><AiOutlineYoutube size={30}/></Link>
            <Link as={NextLink} isExternal href='https://www.facebook.com/panaverse.dao'><AiOutlineFacebook size={30}/></Link>
            <Link as={NextLink} isExternal href='https://github.com/panaverse/learn-nextjs'><AiOutlineGithub size={30}/></Link>
          </HStack>
        </Box>
        <Box>
          <Heading color={'white'} size={'md'}>Company</Heading>
          <Grid rowGap={3} mt={12}>
            <Link as={NextLink} href={''} color={'gray'}>Home</Link>
            <Link as={NextLink} href={''} color={'gray'}>About</Link>
            <Link as={NextLink} href={''} color={'gray'}>Web 3.0</Link>
            <Link as={NextLink} href={''} color={'gray'}>Blog</Link>
            <Link as={NextLink} href={''} color={'gray'}>Testimonials</Link>
            <Link as={NextLink} href={''} color={'gray'}>Become Instructor</Link>
          </Grid>
        </Box>
        <Box>
          <Heading color={'white'} size={'md'}>Support</Heading>
          <Grid rowGap={3} mt={12}>
            <Link as={NextLink} href={''} color={'gray'}>Help Center</Link>
            <Link as={NextLink} href={''} color={'gray'}>Terms of Service</Link>
            <Link as={NextLink} href={''} color={'gray'}>Privacy Policy</Link>
            <Link as={NextLink} href={''} color={'gray'}>Build Career</Link>
          </Grid>
        </Box>
        <Box>
          <Heading color={'white'} size={'md'}>Stay up to date</Heading>
          <HStack mt={12}>
          <InputGroup>
          <InputLeftElement pointerEvents={'none'} 
           // eslint-disable-next-line react/no-children-prop
          children={<EmailIcon color='gray.300' />}/>
          <Input placeholder='Enter Email' _placeholder={{ color: "white" }} />
          </InputGroup>
          <IconButton
          colorScheme='green'
          aria-label='Enter Email'
          icon={<EmailIcon />}/>
          </HStack>
          <Text pt={3} color={'gray'} fontSize={'sm'}>Get the latest news and updates right at your inbox.</Text>
          </Box>
      </SimpleGrid>
    </Container>
    </>
  )
}

import { web3Intro } from '@/utils/data'
import { Box, Container, Heading, SimpleGrid, Text, Link, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'
import MotionBox from '@/components/MotionBox'
import { fadeIn, planetVariants } from '@/utils/framerMotion'
import NextLink from 'next/link'
import Zoom from '@/assets/images/Zoom.png'
import bgImage from '../../../assets/images/education-shape.png'

export default function StudyOnZoom() {
  return (
    <>
    <Box>
        <Container maxW={'container.lg'} pt={120} overflow="hidden" position={'relative'}>
            <MotionBox
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            >
            <Box
            position={"absolute"}
            left={'2%'}
            top="10%"
            display={{ base: "none", md: "block" }}
            zIndex={-2}
            >
            <Image src={bgImage} alt="shape"  height={450} width={450}/>
            </Box>
            <SimpleGrid templateColumns={{base:'1fr', md:'1fr 1fr'}} spacing={8}>
                <Flex justify={'center'} objectFit="cover">
                            <Image src={Zoom} alt='Icon' height={500}></Image>
                </Flex>
                <MotionBox variants={fadeIn("left", "tween", 0.5, 1)}>
                <Box>
                    <Heading size={'xl'}>{web3Intro.zoom.title1} <Heading as={'span'} color={'blue'} 
                    size={'xl'}>{web3Intro.zoom.title2}</Heading></Heading>
                    <Text pt={'40px'} pb={'20px'}>{web3Intro.zoom.description}</Text>
                    <Link as={NextLink} isExternal href={"https://panaverse.co"}
                    _hover={{outline: "none",}} margin={'auto'} display={{base:'none', md:'inline-flex'}} >
                    <Button fontWeight={'bold'} colorScheme='blue' padding="0px 40px" height={50}
                    _hover={{bg: "red.500",}} display={{ base: "none", md: "inline-flex" }}>
                        {web3Intro.zoom.button}
                    </Button>
                    </Link>
                </Box>
                </MotionBox>
            </SimpleGrid>
            </MotionBox>
        </Container>
    </Box>
    </>
  )
}

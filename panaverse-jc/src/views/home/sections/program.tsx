import { web3Intro } from '@/utils/data'
import { Box, Container, Heading, SimpleGrid, Text, Link, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'
import MotionBox from '@/components/MotionBox'
import { fadeIn, planetVariants } from '@/utils/framerMotion'
import NextLink from 'next/link'
import bgImage from '../../../assets/images/education-shape.png'
import programStudyImage from '@/assets/images/programStudy.jpeg'

export default function ProgramNutshell() {
  return (
    <>
    <Box>
        <Container maxW={'container.md'} pt={20}>
        <Box textAlign={'center'}>
                <Heading size={'2xl'}>The Program in a <Heading as={"span"} size={'2xl'} color={'blue'}>Nutshell</Heading></Heading>
                <Heading color={'red.400'} pt={4} size={'lg'}>{web3Intro.program.subhead}</Heading>
                <Text py={4}>{web3Intro.program.discription}</Text>
            </Box>
        </Container>
        <Container maxW={'container.xl'} pt={120} overflow="hidden" position={'relative'}>
            <MotionBox
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            >
            <Box
            position={"absolute"}
            left={'2%'}
            top="20%"
            display={{ base: "none", md: "block" }}
            zIndex={-4}
            >
            <Image src={bgImage} alt="shape"  height={450} width={450}/>
            </Box>
            <SimpleGrid templateColumns={{base:'1fr', md:'1fr 1fr'}} spacing={8}>
                <MotionBox variants={fadeIn("right", "tween", 0.5, 1)}>
                <Box>
                    <Heading size={'xl'}>{web3Intro.programStudy.title1} <Heading as={'span'} color={'blue'} size={'xl'}>
                        {web3Intro.programStudy.title2}</Heading></Heading>
                    <Text pt={'40px'} pb={'20px'}>{web3Intro.programStudy.description}</Text>
                    <Link as={NextLink} isExternal href={"https://portal.piaic.org/signup"}
                    _hover={{outline: "none",}} margin={'auto'} display={{base:'none', md:'inline-flex'}} >
                    <Button fontWeight={'bold'} colorScheme='blue' padding="0px 40px" height={50}
                    _hover={{bg: "red.500",}} display={{ base: "none", md: "inline-flex" }}>{web3Intro.programStudy.button}
                    </Button>
                    </Link>
                </Box>
                </MotionBox>
                <MotionBox variants={planetVariants("right")} position={"relative"}>
                    <Flex justify={'center'} objectFit="cover">
                            <Image src={programStudyImage} alt='Icon' height={500}></Image>
                    </Flex>
                </MotionBox>
            </SimpleGrid>
            </MotionBox>
        </Container>
    </Box>
    </>
  )
}

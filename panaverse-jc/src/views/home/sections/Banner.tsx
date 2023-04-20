import { Box, Container, Heading, SimpleGrid, Text, Link, Button, Stack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import bannercurve from '@/assets/images/banner-curve.png' 
import bannerarrow from '@/assets/images/banner-arrow.png' 
import bannerdot from '@/assets/images/banner-dot.png' 
import bannerslider from '@/assets/images/banner-slider.png' 
import bannerimage from '@/assets/images/banner-image.png' 
import NextLink from 'next/link'
import { banner } from '@/utils/data'
import MotionBox from '@/components/MotionBox'
import { fadeIn } from '@/utils/framerMotion'

export default function Banner() {
  return (
    <>
    <Container flex={1} maxW={'full'} padding={0}>
        <Box minH={'container.sm'} bg={'#EDEEF3'} position={'relative'}>
            <Box position={'absolute'} left={0} top={'20%'}><Image src={bannercurve} alt='Banner Curve'></Image></Box>
            <Box position={'absolute'} left={0} top={'40%'}><Image src={bannerarrow} alt='Banner Arrow'></Image></Box>
            <Box position={'absolute'} right={0} top={'30%'}><Image src={bannerdot} alt='Banner Arrow'></Image></Box>
            <SimpleGrid templateColumns={{base:'1fr', md:'1fr 1fr'}} spacing={10}>
                <Container maxW={'lg'} zIndex={2}>
                <Stack mt={95}>
                    <Heading size={'sm'} color={'#145CEB'}>{banner.heading1}</Heading>
                    <Heading pt={34} size={'2xl'}>{banner.heading2}</Heading>
                    <Text pt={25} pb={18} fontSize={'sm'}>{banner.text}</Text>
                    <Link as={NextLink} isExternal href={"https://portal.piaic.org/signup"}
                    _hover={{outline: "none",}} margin={'auto'} display={{base:'none', md:'inline-flex'}} >
                    <Button fontWeight={'bold'} colorScheme='blue' padding="0px 40px" height={50}
                    _hover={{bg: "red.500",}} display={{ base: "none", md: "inline-flex" }}>{banner.button}
                    </Button>
                    </Link>
                </Stack>
                </Container>
                <Stack position={'relative'} zIndex={1}>
                    <Container pt={95} maxW={'lg'}>
                        <MotionBox bg='white' padding={"15px 25px 20px"} boxShadow="0 30px 60px 0 rgb(1 11 60 / 14%)"
                            borderRadius={4} position="absolute" right="35%" bottom={"20px"} display={{ base: "none", md: "block" }}
                            // @ts-ignore no problem in operation, although type error appears.
                            transition={{
                                y: {
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeOut",
                                    repeatType: "loop",
                                  },
                                }}
                                animate={{
                                  y: ["2rem", "4rem", "6rem"],
                                }}
                            >
                            <Text fontSize={"sm"} color="#474956">Tomorrow is our</Text>
                            <Heading size="sm">“When I Grow Up” Spirit Day!</Heading>
                        </MotionBox>
                        <MotionBox position={'absolute'} zIndex={-1} bottom="100px" left="10%" display={{ base: "none", md: "block" }} 
                        animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                        }}
                        // @ts-ignore no problem in operation, although type error appears.
                        transition={{
                        duration: 3,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        }}>
                            <Image src={bannerslider} alt='Banner Slider'></Image>
                        </MotionBox>
                        <MotionBox
                variants={{
                  hidden: {},
                  show: {},
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
              >
                <MotionBox
                  variants={fadeIn("right", "tween", 0.2, 1)}
                  borderRadius={"40px 4px 40px 4px"}
                  objectFit={"cover"}
                  overflow="hidden"
                >
                  <Image src={bannerimage} alt="get-started" />
                </MotionBox>
              </MotionBox>

                    </Container>
                </Stack>
            </SimpleGrid>
        </Box>
    </Container>
    </>
  )
}

import { courseData, courseStatic } from '@/utils/data'
import { Box, Card, CardBody, Container, Flex, HStack, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import studentIcon from '@/assets/images/studentIcon.png'
import Image from 'next/image'
import MotionBox from '@/components/MotionBox'
import { fadeIn } from '@/utils/framerMotion'

export default function CourseStatics() {
  return (
    <>
    <Box>
        <Container maxW={'container.xl'} pt={120}>
            <Box textAlign={'center'}>
                <Heading size={'2xl'}>We Are <Heading as={"span"} size={'2xl'} color={'blue'}>Proud</Heading></Heading>
                <Text py={4}>{courseData.description}</Text>
            </Box>
            <MotionBox
            variants={fadeIn("up", "tween", 0.5, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            >
            <SimpleGrid templateColumns={{base:'1fr', md:'1fr 1fr', lg:'1fr 1fr 1fr 1fr'}} spacing={8}>
                {courseStatic.map((data)=>(
                    <Card key={data.id} shadow={'none'} justify={'center'} bg={data.bg} alignItems={'center'} padding={'50px 30px'}>
                        <Flex justify={'center'}>
                            <Image src={studentIcon} alt='Icon' width={60} height={60}></Image>
                        </Flex>
                            <Heading mt={2} color={'white'} textAlign={'center'}>{data.count}</Heading>
                            <Text pt={2} textAlign={'center'} color={'white'}>{data.disc}</Text>
                    </Card>
                ))}
            </SimpleGrid>
            </MotionBox>
        </Container>
    </Box>
    </>
  )
}

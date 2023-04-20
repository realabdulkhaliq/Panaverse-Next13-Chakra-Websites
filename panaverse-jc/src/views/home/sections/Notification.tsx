import { Container, SimpleGrid, Box, Flex, Heading, Text, HStack, Link, } from "@chakra-ui/react"
import { AiOutlineClockCircle } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { BsArrowRightSquare, BsChatRightQuote } from 'react-icons/bs'
import NextLink from "next/link"
import { aboutMe, feedback } from "@/utils/data"
import Image from "next/image"
import AbdulKhaliqImage from '@/assets/images/abdulkhaliqavatar.png'

const Notification = () => {
    return (
        <>
        <Container maxW={'container.xl'} bg={'gray.200'}>
            <Flex flexBasis={'50%'} flexDir={{base:'column', md:'row'}} py={'80px'}>
            <Flex flexDir={'row'} m={'auto'}>
                <Box>
                    <Heading pb={'30px'}>Upcomming Events</Heading>
                    {feedback.map((data)=>(
                    <SimpleGrid key={data.id} templateColumns={{base:'1fr', lg:'3fr 9fr'}}  pb={'10px'}>
                        <Box>
                            <Flex flexDir={'column'} mb={{base:'10px', lg:'0px'}}>
                                <Box bg={'blue'}><Heading color={'white'} textAlign={'center'} py={'10px'}>{data.date}</Heading></Box>
                                <Box bg={'white'}><Text color={'black'} textAlign={'center'} py={'10px'}>{data.month}</Text></Box>
                            </Flex>
                        </Box>
                        <Flex bg={'white'} mx={{base:'0px',lg:'20px'}} p={'10px'} flexDir={'row'}>
                            <Flex flex={1} flexDir={'column'}>
                                <Box><Heading size={'md'}>Web 3 Seminar</Heading></Box>
                                <Box>
                                    <HStack pt={'20px'}>
                                        <AiOutlineClockCircle size={15} />
                                        <Text>{data.time}</Text>
                                        <GoLocation size={15} />
                                        <Text>{data.location}</Text>
                                    </HStack>
                                </Box>
                            </Flex>
                            <Flex justify={'center'} alignItems={'center'}><Box pl={'100px'} pr={'20px'}>
                            <Link as={NextLink} isExternal href='https://www.panaverse.co/'>
                                <BsArrowRightSquare size={30} /></Link></Box>
                            </Flex>
                        </Flex>
                    </SimpleGrid>
                    ))}
                </Box>
            </Flex>
            <Flex flexDir={'column'} flexBasis={'50%'}>
                <Heading pb={'30px'}>{`Student's Feedback`}</Heading>
                <Flex bg={'white'} justify={'center'} alignItems={'center'} flexDir={'column'} p={'20px'}>
                    <BsChatRightQuote color="gray" size={100} />
                    <Text>{aboutMe.about}</Text>
                    <Flex justify={'center'}>
                    <Image src={AbdulKhaliqImage} alt='President of Pakistan' width={100} height={100}></Image>
                    </Flex>
                    <Heading size={'md'}>Abdul Khaliq</Heading>
                    <Heading size={'sm'} color={'gray'} pt={'5px'}>Software Engineer</Heading>
                </Flex>
            </Flex>
            </Flex>
        </Container>
        </>
    )
}
export default Notification
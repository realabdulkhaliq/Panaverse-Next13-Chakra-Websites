'use client'

import { Box, Button, Container, HStack, Stack, Heading, Icon, SimpleGrid, Text } from "@chakra-ui/react"
import { feature, featureData } from "../data/data";

const Feature = () => {
return (
    <>
    <Box>
        <Container maxW={'container.md'}>
            <Box textAlign={'center'} py={12}>
                <Text color={'blue.500'} fontWeight={'bold'} mb={4}>Features</Text>
                <Heading fontWeight={'semibold'} mb={4}>{featureData.heading}</Heading>
                <Text fontSize={'20'}>{featureData.text}</Text>
            </Box>
        </Container>
        <Container maxW={'container.lg'} py={12}>
            <SimpleGrid templateColumns={{base:'1fr',md:'1fr 1fr'}} gap={10}>
            {feature.map(fet => (
            <HStack key={fet.id} gap={'5px'}>
                <Icon as={fet.icon} boxSize={10} color={'blue.500'}/>
                <Box>
                    <Text fontWeight={'bold'}>{fet.text1}</Text>
                    <Text>{fet.text2}</Text>
                </Box>
            </HStack>
            ))}
            </SimpleGrid>
        </Container>
        <Container maxW={1200} bgColor={'blue.50'} p={16} borderRadius={'xl'} mb={8}>
            <Stack direction={{base:'column', md:'row'}}>
            <Box flex={3}>
                <Heading>{featureData.heading2}</Heading>
                <Text>{featureData.text2}</Text>
            </Box>
            <Box flex={2} alignSelf={'flex-start'}>
                <Button colorScheme="blue" float={'right'}>{featureData.button}</Button>
            </Box>
            </Stack>
        </Container>
    </Box>
    </>
 )
}

export default Feature
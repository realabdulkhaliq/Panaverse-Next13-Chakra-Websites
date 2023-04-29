'use client'

import { Box, Container, Heading, SimpleGrid, Text, Card, CardBody, Icon, Button, CardHeader, CardFooter } from "@chakra-ui/react"
import { highlightsCard, highlightsData } from "../data/data"

const Highlights = () => {
return (
    <>
    <Box>
        <Container maxW={'container.md'} textAlign={'center'}>
        <Text color={'blue.500'} fontWeight={'bold'} mb={4}>{highlightsData.head}</Text>
        <Heading fontWeight={'semibold'} mb={4}>{highlightsData.heading}</Heading>
        <Text fontSize={'20'}>{highlightsData.text}</Text>
        </Container>
        <Container maxW={'container.lg'} py={12}>
            <SimpleGrid templateColumns={{base:'1fr',md:'1fr 1fr', lg:'1fr 1fr 1fr 1fr'}} gap={4}>
                {highlightsCard.map(card => (
                    <Card key={card.id} align={'center'}>
                        <CardHeader textAlign={'center'}>
                            <Icon as={card.icon} boxSize={16} color={'blue.500'}></Icon>
                            <Heading fontSize={'20'} mt={2}>{card.heading}</Heading>
                        </CardHeader>
                        <CardBody textAlign={'center'}>
                            <Text my={2}>{card.text}</Text>
                        </CardBody>
                        <CardFooter>
                            <Button colorScheme="blue">View More</Button>
                        </CardFooter>
                    </Card>
                ))}
            </SimpleGrid>
        </Container>
    </Box>
    </>
)
}

export default Highlights
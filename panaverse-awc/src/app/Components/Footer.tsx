'use client'

import { Box, Container, Flex, HStack, Text } from "@chakra-ui/react"
import { BsDiscord, BsFacebook, BsGithub } from "react-icons/bs"

const Footer = () => {
return (
    <>
    <Box bgColor={'gray.200'}>
        <Container maxW={'container.lg'}>
            <Flex direction={{base:'column', md:'row'}} py={4}>
            <Box flex={1}>
                <Text>© 2023 Panaverse. All rights reserved.</Text>
            </Box>
            <Box>
                <HStack gap={6}>
                <BsGithub size={24}/>
                <BsFacebook size={24}/>
                <BsDiscord size={24}/>
                </HStack>
            </Box>
            </Flex>
        </Container>
    </Box>
    </>
)
}

export default Footer
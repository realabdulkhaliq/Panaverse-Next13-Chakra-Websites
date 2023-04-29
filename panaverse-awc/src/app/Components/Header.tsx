'use client'
import { Box, Button, Container, Flex, HStack, Hide, Icon, Image, Link, List, ListItem, Show } from "@chakra-ui/react"
import { PhoneIcon, AddIcon, WarningIcon, SearchIcon, MoonIcon } from '@chakra-ui/icons'
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"
import ColorMode from "./ColorMode"


const Header = () => {
return(
    <>
    <Box py={4} as="header" position={"sticky"} top="0" zIndex={1} bgColor={'inherit'} 
    borderBottom={1} borderStyle={'solid'} borderBottomColor={'gray.500'}>
        <Container maxW={'container.xl'}>
        <Flex justifyContent={{base:'space-between',md:'space-around'}} alignItems={'center'}>
        <Box>
        <HStack spacing={'20'}>
        <Image src='/logo.png' alt='Logo' h={'50px'} w={'100px'}/>
        <Hide below='md'>
            <DesktopNav />
        </Hide>
        </HStack>
        </Box>
        <Hide below="md">
        <HStack spacing={4}>
            <SearchIcon h={6} w={6}/>
            <ColorMode />
        <Link href="http://piaic.org/" target={"_blank"}>
        <Button variant={'outline'}>Go to PIAIC</Button></Link>
        </HStack>
        </Hide>
        <Show below="md">
            <HStack>
            <ColorMode />
            <MobileNav />
            </HStack>
        </Show>
        </Flex>
        </Container>
    </Box>
    </>
)
}

export default Header
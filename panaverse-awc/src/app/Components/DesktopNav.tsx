'use client'
import {List, HStack, ListItem} from '@chakra-ui/react'
const DesktopNav = () => {
return(
    <>
    <List>
        <HStack spacing={8}>
            <ListItem fontWeight={'medium'}>Home</ListItem>
            <ListItem fontWeight={'medium'}>About</ListItem>
            <ListItem fontWeight={'medium'}>Contact</ListItem>
        </HStack>
        </List>
    </>
)
}

export default DesktopNav 
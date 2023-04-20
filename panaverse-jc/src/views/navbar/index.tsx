"use client";
import {Box, Button, Flex, Link, Stack, useDisclosure, IconButton, MenuList, MenuItem, Menu} from '@chakra-ui/react'
import Image from 'next/image';
import logo from '@/../public/logo.png'
import NextLink from 'next/link';
import { HamburgerIcon, CloseIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import DesktopNav from './DesktopNav';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <>
    <Box as='nav' role='decoration'>
      <Flex bg={'white'} borderColor={'gray.200'} borderBottom={1} borderStyle={'solid'} align={'center'}>
        <Flex px={4} py={4} flex={{base:1}} justify={{base:'start', md:'start'}}>
          <Link as={NextLink} href='/'>
          <Image src={logo} alt='Logo' width={100} height={50} />
          </Link>
          <Flex display={{base:'none', md:'flex'}} ml={10} alignItems={'center'} flex={1}>
          <DesktopNav />
          </Flex>
          <Stack flex={{base: 0}} justify={'flex-end'} direction={'row'} spacing={6}>
            <Link as={NextLink} isExternal href='https://github.com/panaverse/' margin={'auto'} 
            display={{base:'none', md:'inline-flex'}}>
            <Button fontWeight={'bold'} variant={"link"} color="black" rightIcon={<ExternalLinkIcon />}>
                Github
            </Button>
            </Link>
            <Link as={NextLink} isExternal href={"https://portal.piaic.org/signup"}
             _hover={{outline: "none",}} margin={'auto'} display={{base:'none', md:'inline-flex'}} >
            <Button fontWeight={400} colorScheme='blue' padding="0px 40px" height={50}
                _hover={{bg: "red.500",}} display={{ base: "none", md: "inline-flex" }}>
              Apply
            </Button>
            </Link>
          </Stack>
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
            justify="end"
          >
            <IconButton
              onClick={onToggle}
              bg="transparent"
              icon={
                isOpen ? ( <Stack>
                  <CloseIcon w={3} h={3} />
                  <Menu>
                    <MenuList>
                      <MenuItem>Home</MenuItem>
                      <MenuItem>Home</MenuItem>
                      <MenuItem>Home</MenuItem>
                    </MenuList>
                    </Menu> 
              </Stack>
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            >
              
            </IconButton>
          </Flex>
        </Flex>
      </Flex>
    </Box>
    </>
  );
};
export default Navbar;

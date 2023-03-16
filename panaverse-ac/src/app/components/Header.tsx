"use client";
import { Box, Button, Container, Flex, SimpleGrid, Menu, MenuButton, IconButton, MenuItem, MenuList } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/logo.png";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Header() {
  return (
    <>
      <Box boxShadow={"lg"}>
        <Container maxW={1400}>
          <SimpleGrid templateColumns={{ lg: 'repeat(3, 1fr)', base: 'repeat(2, 1fr)' }} mx="10px">
            <Box my={2}>
              <Image
                src={logo}
                alt="Panaverse Logo"
                height={100}
                width={100}
              ></Image>
            </Box>
            <Flex
              display={{ lg: "flex", base: "none" }}
              gap={10}
              placeItems="center"
              fontFamily={"cursive"}
              fontWeight="semibold"
              fontSize={"18px"}
            >
              <Link href={"/"}>Home</Link>
              <Link href={"/syllabus"}>Syllabus</Link>
              <Link href={"/explore"}>Explore</Link>
              <Link href={"/about"}>About</Link>
              <Link href={"/contact"}>Contact</Link>
            </Flex>
            <Box display={{ lg: "initial", base: "none" }}>
              <Button
                float={"right"}
                size="lg"
                colorScheme='purple'
                my="12px"
              >
                <Link href={'https://www.piaic.org/'}>Apply</Link>
              </Button>
            </Box>
            <Box display={{lg:'none', base:'initial'}} pt='20px'>
              <Menu>
                <MenuButton float='right'
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon />}
                  variant="outline"
                />
                <MenuList>
                  <MenuItem><Link href={'/'}>Home</Link></MenuItem>
                  <MenuItem><Link href={'/syllabus'}>Syllabus</Link></MenuItem>
                  <MenuItem><Link href={'/explore'}>Explore</Link></MenuItem>
                  <MenuItem><Link href={'/about'}>About</Link></MenuItem>
                  <MenuItem><Link href={'/contact'}>Contact</Link></MenuItem>
                  <MenuItem><Link href={'https://www.piaic.org/'}>Apply</Link></MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}

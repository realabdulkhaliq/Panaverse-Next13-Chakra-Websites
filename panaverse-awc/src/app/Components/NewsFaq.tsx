"use client";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";

const NewsFaqs = () => {
  return (
    <>
      <Box bgColor={"gray.200"}>
        <Container maxW={"container.xl"} py={16}>
          <Flex direction={{base:'column',md:"row"}} justifyContent={'space-around'}>
            {/* In Box we can also use flex={1} */}
            <Box mb={{base:'5', md:'0'}}> 
              <Heading>Join our Newletter</Heading>
              <Text mt={2}>
                Dont miss any more news and subscribe to our newsletter today.
              </Text>
            </Box>
            <HStack>
              <Input placeholder="Enter Your Email" width={"240px"} borderColor={'gray'}/>
              <Button colorScheme="gray">Subscribe</Button>
            </HStack>
          </Flex>
        </Container>
      </Box>
        <Container maxW={"container.lg"} py={12}>
          <Heading color={"blue.500"} size={'sm'}>Support</Heading>
          <Flex gap={10} py={10} display={{base:'grid', md:'flex'}}>
            <Box flex={1} >
              <Heading>FAQs</Heading>
              <Text lineHeight={2} >
                Everything you need to know about the product and billing. For
                questions about licensing, please see our licensing page.
              </Text>
            </Box>
            <Box flex={1}>
              <Accordion allowToggle>
                <AccordionItem>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Section 1 title
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4} fontSize={'sm'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Section 2 title
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  <AccordionPanel pb={4} fontSize={'sm'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </Flex>
        </Container>
    </>
  );
};

export default NewsFaqs;

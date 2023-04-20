'use client'

import NextLink from 'next/link'
import React from 'react'
import { NAV_ITEMS } from '@/utils/constants'
import { Box, Link, Stack } from '@chakra-ui/react'

export default function DesktopNav() {
  return (
    <>
    <Stack direction={"row"} spacing={4}>
    {NAV_ITEMS.map((nav)=>(
        <Box key={nav.label}>
        <Link as={NextLink} href={nav.href ?? '#'} p={2} fontSize='lg' color="gray.900" 
        _hover={{ color: "blue" }}>{nav.label}</Link>
        </Box>
        ))}
    </Stack>
    </>
  )
}

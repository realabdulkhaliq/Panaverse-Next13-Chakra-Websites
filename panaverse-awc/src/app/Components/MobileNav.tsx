'use client'

import { HamburgerIcon } from "@chakra-ui/icons"
import { IconButton, Link, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"

const MobileNav = () => {
return (
    <>
    <Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
  />
  <MenuList>
    <MenuItem><Link href="/">Home</Link></MenuItem>
    <MenuItem><Link href="/">About</Link></MenuItem>
    <MenuItem><Link href="/">Contact</Link></MenuItem>
  </MenuList>
</Menu>
    </>
)
}

export default MobileNav
import { MoonIcon } from "@chakra-ui/icons"
import { IconButton, useColorMode } from "@chakra-ui/react"

const ColorMode = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <header>
        <IconButton icon={<MoonIcon />}   aria-label='Moon' onClick={toggleColorMode} borderRadius={'full'}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </IconButton>
      </header>
    )
  }

  export default ColorMode
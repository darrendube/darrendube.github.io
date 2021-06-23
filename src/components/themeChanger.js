import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import { FaMoon, FaSun, FaYoutube } from "react-icons/fa"
import Toggle from 'react-toggle';
import {
  chakra,
  Flex,
  Box,
  HStack,
  Icon,
  IconButton,
  Link,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  useUpdateEffect,
  HTMLChakraProps,
} from "@chakra-ui/react"


const ICONS = {
  checked: <img src="/assets/moon.svg" alt="dark mode" />,
  unchecked: <img src="/assets/sun.svg" alt="light mode" />,
};


export default () => (
  <div className="toggle-container">
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <IconButton
      size="md"
      fontSize="lg"
 
      variant="ghost"
      color="current"
      ml={{ base: "0", md: "3" }}
      onClick={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
      //icon={theme === 'dark' ? FaMoon : FaSun}
      icon={<FaSun/>}
    />
    )}
  </ThemeToggler>
  </div>
)

//<Toggle checked={theme === 'dark'} icons={ICONS} onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')} />
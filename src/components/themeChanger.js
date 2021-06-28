import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import { FaMoon, FaSun, FaYoutube } from "react-icons/fa"

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

export default function Toggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return(
    
      <IconButton
      size="md"
      fontSize="lg"
 
      variant="ghost"
      color="current"
      ml={{ base: "0", md: "3" }}
      onClick={toggleColorMode}
      
      icon={colorMode === "light" ? <FaMoon color="#555555"/> : <FaSun color="rgba(255,255,255,0.66)" />}
    />
    
  
  
)}

//<Toggle checked={theme === 'dark'} icons={ICONS} onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')} />


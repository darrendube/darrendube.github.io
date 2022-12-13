import React from 'react';
import {FaMoon, FaSun} from "react-icons/fa"

import {IconButton, useColorMode,} from "@chakra-ui/react"

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
      
      icon={colorMode === "light" ? <FaMoon color="#ffffff"/> : <FaSun color="#ffffff" />}
    />
    
  
  
)}

//<Toggle checked={theme === 'dark'} icons={ICONS} onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')} />


import React, { useState } from "react"
import styled from "styled-components"

import Logo from "./logo"
import { FaMoon, FaSun, FaYoutube } from "react-icons/fa"
import ThemeChanger from "./themeChanger"


import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
  Box, useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Link } from "gatsby"





const Navigation = styled.nav`
  
`



const Toggle = styled.div`
  display: none;
  position: relative;
  height: 100%;
  cursor: pointer;
  z-index: 5;
  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  all: unset;
  
  display: flex;
  height: 100vh;
  justify-content: flex-end;
  align-items: center;
  z-index: 3;
  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background: white;
  
    transition: left 0.3s ease;
    top: 0;
    left: ${props => (props.open ? "100%" : "0")};
  }
`



const NavbarLinks = () => {
  return (
    <>
    
      <Link className="nav-item" href="/">Home</Link>
      
      <Link className="nav-item" href="/contact">Contact</Link>

      
      
    </>
  )
}



const Navbar = () => {
  const hbcolor = useColorModeValue("#000000","#ffffff")
  
  const [display, changeDisplay] = useState('none')
  const Hamburger = styled.div`
  
  width: 30px;
  height: 4px;
  border-radius: 10px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg) " : "inherit")};
  background-color: ${hbcolor}
  ::before {
    width: 30px;
    height: 4px;
    border-radius: 10px;
    
    content: "";
    position: absolute;
    transition: all 0.3s linear;
    background-color: ${hbcolor}
  }
  ::after {
    width: 30px;
    height: 4px;
    border-radius: 10px;
    
    content: "";
    position: absolute;
    transition: all 0.3s linear;
    background-color: ${hbcolor}
  }
  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 1px)" : "rotate(0deg)"};
    top: -10px;
    background-color: ${hbcolor}
  }
  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg)" : "rotate(0deg)")};
    top: 10px;
    background-color: ${hbcolor}
  }
`

  const [navbarOpen, setNavbarOpen] = useState(false)
  const bg = useColorModeValue("rgba(255,255,255,0.7)", "rgba(14,24,42,0.7)")

  return (
    <Box as="nav" className="nav-bar" bg={bg}>
      <div className="nav-bar-contents items-wrapper">
      <Logo />
      
     	<div className="togglewrapper">
     	<Flex>
      
      <Flex
        position="fixed"
        top="11px"
        
        right="0rem"
        align="center"
        
      ><ThemeChanger />
        {/* Desktop */}
        
        <Flex
          display={['none', 'none', 'flex','flex']}
          mr="11px"
        >
          <Link to="/" >
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%"
              color={useColorModeValue("#0000000","#a0aec0")}
            >
              Home
                    </Button>
          </Link>

          

          <Link to="/contact" >
            <Button
              as="a"
              variant="ghost"
              aria-label="Contact"
              my={5}
              w="100%"
              color={useColorModeValue("#0000000","#a0aec0")}
            >
              Contact
                    </Button>
          </Link>
        </Flex>

        {/* Mobile */}
        <IconButton
        variant="unstyled"
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={
            <HamburgerIcon />
          }
          color={useColorModeValue("#0000000","#a0aec0")}
          onClick={() => changeDisplay('flex')}
          display={['flex', 'flex', 'none', 'none']}
        />
        
      </Flex>

      {/* Mobile Content */}
      
      <Flex
        w='100vw'
        display={display}
        bgColor={useColorModeValue("#ffffff","#0e182a")}
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        zIndex={20}
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            variant="unstyled"
            mt={2.5}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={
              <CloseIcon />
            }
            onClick={() => changeDisplay('none')}
            color={useColorModeValue("#0000000","#a0aec0")}
          />
        </Flex>

        <Flex
          flexDir="column"
          align="center"
        >
          <Link to="/" >
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%"
              color={useColorModeValue("#0000000","#a0aec0")}
            >
              Home
                    </Button>
          </Link>

          

          <Link to="/contact" >
            <Button
              as="a"
              variant="ghost"
              aria-label="Contact"
              my={5}
              w="100%"
              color={useColorModeValue("#0000000","#a0aec0")}
            >
              Contact
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
      </div></div>
    </Box>
  )
}

export default Navbar















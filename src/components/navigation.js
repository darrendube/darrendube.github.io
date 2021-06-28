import React, { useState } from "react"
import styled from "styled-components"

import Logo from "./logo"
import { FaMoon, FaSun, FaYoutube } from "react-icons/fa"
import ThemeChanger from "./themeChanger"
import {Box, useColorModeValue, Link} from "@chakra-ui/react"



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
const hbcolor = useColorModeValue("#000000","#ffffff")
  const [navbarOpen, setNavbarOpen] = useState(false)
  const bg = useColorModeValue("rgba(255,255,255,0.7)", "rgba(14,24,42,0.7)")

  return (
    <Box as="nav" className="nav-bar" bg={bg}>
      <div className="nav-bar-contents items-wrapper">
      <Logo />
      
     	<div className="togglewrapper">
     	<div className="theme-toggler"><ThemeChanger /></div>
      <Toggle
      	className="no-select"
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger className="hamburger" open /> : <Hamburger className="hamburger"/>}
      </Toggle>
      {navbarOpen ? (
        <Navbox className="navbox">
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox className="navbox" open>
          <NavbarLinks />
        </Navbox>
      )}
      </div></div>
    </Box>
  )
}

export default Navbar
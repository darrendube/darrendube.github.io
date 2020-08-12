import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Logo from "./logo"
import ThemeChanger from "./themeChanger"


const Navigation = styled.nav`
  
`



const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "100%" : "0")};
  }
`

const Hamburger = styled.div`
  
  width: 30px;
  height: 3px;
  border-radius: 10px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg) " : "inherit")};

  ::before {
    width: 25px;
    height: 3px;
    border-radius: 10px;
    
    content: "";
    position: absolute;
    transition: all 0.3s linear;
    
  }

  ::after {
    width: 20px;
    height: 3px;
    border-radius: 10px;
    
    content: "";
    position: absolute;
    transition: all 0.1s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 2px) scale(1.2,1)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) scale(1.5,1)" : "rotate(0deg)")};
    top: 10px;
  }
`

const NavbarLinks = () => {
  return (
    <>
    
      <Link className="nav-item" to="/">Home</Link>
      <Link className="nav-item" to="/">Projects</Link>
      <Link className="nav-item" to="/">Contact</Link>
      
    </>
  )
}



const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className="nav-bar">
      <Logo />
     	<div className="togglewrapper">
     	<ThemeChanger/>
      <Toggle
      	className="no-select"
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger className="hamburger" open /> : <Hamburger className="hamburger"/>}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
      </div>
    </nav>
  )
}

export default Navbar
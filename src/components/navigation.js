import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Logo from "./logo"
import ThemeChanger from "./themeChanger"


const Navigation = styled.nav`
  height: 70px;

  display: flex;
  background-color: #fff;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;

  @media (max-width: 768px) {
    position: sticky;
    height: 70px;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
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
  background-color: #767676;
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
    background-color: #767676;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
    
  }

  ::after {
    width: 20px;
    height: 3px;
    border-radius: 10px;
    background-color: #767676;
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

const NavItem = styled(Link)`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  font-weight: bold;

  

  :hover {
    color: #5978F3;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

const NavbarLinks = () => {
  return (
    <>
    
      <NavItem to="/404">About</NavItem>
      <NavItem to="/404">Projects</NavItem>
      <NavItem to="/contact">Contact</NavItem>
      
    </>
  )
}



const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
      <Logo />
      <Toggle
      	className="no-select"
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
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
    </Navigation>
  )
}

export default Navbar
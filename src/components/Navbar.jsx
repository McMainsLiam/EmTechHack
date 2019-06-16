import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Link } from 'gatsby'
import { Divider } from '../elements/Dividers'
import config from '../model/config'

const NavbarStyled = styled.div`
  width: 100%;
  padding: 20px 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: fixed;
  z-index: 1000000000;

  @media only screen and (max-width: 840px) {
    display: none;
  }
`

const NavbarButton = styled.a`
  padding: 10px;
  color: white;
  ${tw`text-lg font-sans text-white`};
  padding-left: 20px;

  &:hover {
    color: #ccc;
    text-decoration: underline;
    text-decoration-color: #ccc;
  }
`

const NavbarStyledMobile = styled.div`
  display: none;

  @media only screen and (max-width: 840px) {
    display: block;
  }
`

const NavbarButtonMobile = styled.a`
  padding: 10px;
  color: white;
  ${tw`text-lg font-sans text-white`};
  padding-left: 20px;

  &:hover {
    color: #ccc;
    text-decoration: underline;
    text-decoration-color: #ccc;
  }
`

const Logo = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
  width: 100px;
  height: auto;
  filter: saturate(0%) brightness(100);
`

const Navbar = ({ offset }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Divider speed={0.1} offset={offset} factor={2}>
      <NavbarStyled>
        <Link to="/">
          <NavbarButton>Home</NavbarButton>
        </Link>
        <a href={config.signUpFormURL} target="_blank" rel="noopener noreferrer">
          <NavbarButton>Apply Now</NavbarButton>
        </a>
        <Link to="/faq">
          <NavbarButton>FAQ</NavbarButton>
        </Link>
        <a className="mailtoui" href={config.mailToURL} target="_blank" rel="noopener noreferrer">
          <NavbarButton>Contact Us</NavbarButton>
        </a>
        <Link to="/sponsors">
          <NavbarButton>Prizes</NavbarButton>
        </Link>
        <Link to="/sponsors">
          <NavbarButton>Sponsors</NavbarButton>
        </Link>
        <Link to="/">
          <NavbarButton>About Us</NavbarButton>
        </Link>
        <Link to="/schedule">
          <NavbarButton>Schedule</NavbarButton>
        </Link>
      </NavbarStyled>
      <NavbarStyledMobile>
        <Logo src={require('../resources/logo.png')}></Logo>
      </NavbarStyledMobile>
    </Divider>
  )
}

export default Navbar

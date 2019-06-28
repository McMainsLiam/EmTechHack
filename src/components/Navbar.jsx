import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'
import { Divider } from '../elements/Dividers'
import config from '../model/config'
import useWindowDimensions from '../helpers/useWindowDimension'
import '../styles/navbar.css'
import { colors } from '../../tailwind'

const NavbarButton = styled.a`
  padding: 10px;
  color: ${props => (props.accent ? colors['orange-light'] : 'white')} !important;

  ${tw`text-3xl font-sans text-white font-bold`};

  &:hover {
    color: #bbb;
    text-decoration-color: #bbb;
  }
`

// const NavbarStyledMobile = styled.div`
//   display: none;

//   @media only screen and (max-width: 840px) {
//     display: block;
//   }
// `

// const NavbarButtonMobile = styled.a`
//   padding: 10px;
//   color: white;
//   ${tw`text-lg font-sans text-white`};
//   padding-left: 20px;

//   &:hover {
//     color: #ccc;
//     text-decoration: underline;
//     text-decoration-color: #ccc;
//   }
// `

const Logo = styled.img`
  position: fixed;
  left: 20px;
  top: 20px;
  width: 100px;
  height: auto;
  filter: saturate(0%) brightness(100);
  z-index: 1000000;
`

// const HamburgerMenu = styled.div`
//   display: flex;
//   flex-direction: column;
//   position: fixed;
//   top: 10px;
//   right: 10px;
//   padding: 10px;
// `

// const MenuButton = styled.div`
//   height: 2px;
//   width: 25px;
//   background-color: white;
//   border-radius: 1px;
//   margin-bottom: 3px;
// `

const Navbar = ({ offset }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { _, width } = useWindowDimensions()

  return (
    <Menu>
      <a href={config.signUpFormURL} target="_blank" rel="noopener noreferrer">
        <NavbarButton accent>Apply Now</NavbarButton>
      </a>
      <Link to="/">
        <NavbarButton>Home</NavbarButton>
      </Link>
      <Link to="/about">
        <NavbarButton>About Us</NavbarButton>
      </Link>
      <Link to="/faq">
        <NavbarButton>FAQ</NavbarButton>
      </Link>
      <Link to="/sponsors">
        <NavbarButton>Prizes</NavbarButton>
      </Link>
      <Link to="/sponsors">
        <NavbarButton>Sponsors</NavbarButton>
      </Link>
      <a href={config.mailToURL} target="_blank" rel="noopener noreferrer">
        <NavbarButton>Contact Us</NavbarButton>
      </a>

      {/* <Link to="/schedule">
        <NavbarButton>Schedule</NavbarButton>
      </Link> */}
    </Menu>
  )
}

export default Navbar

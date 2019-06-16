import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Link } from "gatsby";

const NavbarStyled = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  @media only screen and (max-width: 415px) {
    justify-content: space-between;
  }
`;

const NavbarButton = styled.a`
  padding: 10px;
  color: white;
  ${tw`text-lg font-sans text-white`};
  padding-left: 20px;
`;

const Navbar = () => (
  <NavbarStyled>
    <NavbarButton>
      <Link to="/apply">Apply Now</Link>
    </NavbarButton>
    <NavbarButton>
      <Link to="/faq">FAQ</Link>
    </NavbarButton>
    <NavbarButton>
      <Link to="/faq">Contact Us</Link>
    </NavbarButton>
    <NavbarButton>
      <Link to="/faq">Prizes</Link>
    </NavbarButton>
    <NavbarButton>
      <Link to="/faq">Sponsors</Link>
    </NavbarButton>
    <NavbarButton>
      <Link to="/faq">About Us</Link>
    </NavbarButton>
    <NavbarButton>
      <Link to="/faq">Schedule</Link>
    </NavbarButton>
  </NavbarStyled>
);

export default Navbar;

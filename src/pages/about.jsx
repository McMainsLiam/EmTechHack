import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Parallax } from "react-spring/renderprops-addons.cjs";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import { Title } from "../elements/Titles";
import Navbar from "../components/Navbar";
import HeroWide from "../views/HeroWide";
import { Button } from "../elements/Buttons";
import config from "../model/config";

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const ExternalLink = styled.a``;

const About = () => (
  <>
    <Layout />
    <Parallax pages={1}>
      <Navbar></Navbar>

      <HeroWide offset={0}>
        <Title>Our Mission</Title>
        <ContactText>
          EmTechHack is designed to inspire students to use the latest development technologies - including blockchain,
          AI, machine learning, AR, VR, and computer vision - to build something new. However, you don't have to be a
          developer to participate. Our goal is to bring together designers, entrepreneurs, and developers so whether
          you're a veteran developer or a budding designer, EmTechHack has a place for you.
        </ContactText>

        <ExternalLink href={config.signUpFormURL} target="_blank">
          <Button>Apply Now</Button>
        </ExternalLink>
        <Link to="/faq">
          <Button dark>FAQ</Button>
        </Link>
        <Link to="/prizes">
          <Button>Prizes</Button>
        </Link>
        <Link to="/sponsors">
          <Button dark>Sponsors</Button>
        </Link>
      </HeroWide>
    </Parallax>
  </>
);

export default About;

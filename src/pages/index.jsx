import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Parallax } from "react-spring/renderprops-addons.cjs";

// Components
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

// Elements
import Inner from "../elements/Inner";
import { Title, BigTitle, Subtitle, IntroTitle, SponsorTitle, SponsorSubtitle } from "../elements/Titles";

// Views
import Hero from "../views/Hero";
import Projects from "../views/Projects";
import About from "../views/About";
import Contact from "../views/Contact";

import Navbar from "../components/Navbar";
import { Button } from "../elements/Buttons";
import { Link } from "gatsby";
import FAQ, { getGradientColorFromIndex } from "../model/FAQ";
import config from "../model/config";

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const CardTitle = styled.p`
  ${tw`text-xl lg:text-2xl font-sans text-white mt-8 xxl:w-3/4`};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;

const ExternalLink = styled.a``;

const Index = () => (
  <>
    <Layout />
    <Parallax pages={2}>
      <Navbar></Navbar>
      <Hero offset={0.08}>
        <IntroTitle>UTD Blockchain Presents</IntroTitle>
        <BigTitle>Emerging Tech Hackathon</BigTitle>
        <Subtitle>October 19th - 20th, 2019</Subtitle>
        <Link to="/faq">
          <Button dark>Learn More</Button>
        </Link>
        <ExternalLink href={config.signUpFormURL} target="_blank">
          <Button>Apply Now</Button>
        </ExternalLink>
      </Hero>

      <Contact offset={1}>
        <Inner>
          <Title>Contact Us</Title>
          <ContactText>
            Say <a href="mailto:plizNoSp4m@domain.tld">Hi</a> or find me on other platforms:{" "}
            <a href="https://dribbble.com/LekoArts">Dribbble</a> &{" "}
            <a href="https://www.instagram.com/lekoarts.de/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>&copy; 2019 UTD Blockchain - Emerging Tech Hackathon</Footer>
      </Contact>
    </Parallax>
  </>
);

const styles = {
  whiteLink: {
    color: "white",
    textDecoration: "underline",
    cursor: "pointer"
  }
};

export default Index;

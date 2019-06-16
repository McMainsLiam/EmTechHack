import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Parallax } from "react-spring/renderprops-addons.cjs";

// Components
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

// Elements
import Inner from "../elements/Inner";
import { Title, BigTitle, Subtitle, IntroTitle } from "../elements/Titles";

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

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

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
  ${tw`text-2xl lg:text-4xl font-sans text-white mt-8 xxl:w-3/4`};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;

const ExternalLink = styled.a``;

const Index = () => (
  <>
    <Layout />

    <Parallax pages={5}>
      <Navbar></Navbar>
      <Hero offset={0}>
        <IntroTitle>UTD Blockchain Presents</IntroTitle>
        <BigTitle>Emerging Tech Hackathon</BigTitle>
        <Subtitle>October 19th - 20th, 2019</Subtitle>
        <Link to="/">
          <Button dark>Learn More</Button>
        </Link>
        <ExternalLink href={config.signUpFormURL} target="_blank">
          <Button>Apply Now</Button>
        </ExternalLink>
      </Hero>

      <Projects offset={1}>
        <Title>FAQ</Title>
        <ProjectsWrapper>
          {FAQ.map((faq, index) => (
            <ProjectCard
              bg={`linear-gradient(to right, ${getGradientColorFromIndex(index, true)} 0%, ${getGradientColorFromIndex(
                index,
                false
              )} 100%)`}
            >
              <CardTitle>{faq.title}</CardTitle>
              {faq.content}
            </ProjectCard>
          ))}
        </ProjectsWrapper>
      </Projects>

      <About offset={3}>
        <Title>Sponsors</Title>
      </About>

      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:plizNoSp4m@domain.tld">Hi</a> or find me on other platforms:{" "}
            <a href="https://dribbble.com/LekoArts">Dribbble</a> &{" "}
            <a href="https://www.instagram.com/lekoarts.de/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>&copy; 2019 UTD Blockchain. </Footer>
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

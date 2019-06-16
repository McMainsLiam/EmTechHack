import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Parallax } from "react-spring/renderprops-addons.cjs";

// Components
import Layout from "../components/Layout";

// Elements
import { Title, SponsorTitle, SponsorSubtitle } from "../elements/Titles";

import Navbar from "../components/Navbar";
import About from "../views/About";

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

const SponsorCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SponsorImage = styled.img`
  ${tw`max-w-full`};
`;

const FAQPage = () => (
  <>
    <Layout />

    <Parallax pages={1.1}>
      <Navbar offset={0}></Navbar>
      <About offset={0.1}>
        <Title padTop>Sponsors</Title>
        <ProjectsWrapper>
          <SponsorCard>
            <SponsorImage src={require("../resources/sponsor-logos/CodeAuthority.png")}></SponsorImage>
            <SponsorTitle>Nintendo Switch</SponsorTitle>
            <SponsorSubtitle>1st Place</SponsorSubtitle>
          </SponsorCard>

          <SponsorCard>
            <SponsorImage src={require("../resources/sponsor-logos/amazon.png")}></SponsorImage>
            <SponsorTitle>Amazon Echo Dot</SponsorTitle>
            <SponsorSubtitle>2nd Place</SponsorSubtitle>
          </SponsorCard>

          <SponsorCard>
            <SponsorImage src={require("../resources/sponsor-logos/facebook.png")}></SponsorImage>
            <SponsorTitle>100$ Amazon Gift Card</SponsorTitle>
            <SponsorSubtitle>3rd Place</SponsorSubtitle>
          </SponsorCard>
        </ProjectsWrapper>
      </About>
    </Parallax>
  </>
);

export default FAQPage;

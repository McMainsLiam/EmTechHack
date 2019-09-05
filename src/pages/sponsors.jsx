import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Parallax } from 'react-spring/renderprops-addons.cjs';

// Components
import Layout from '../components/Layout';

// Elements
import { Title, SponsorTitle, SponsorSubtitle, BigTitle } from '../elements/Titles';

import Navbar from '../components/Navbar';
import About from '../views/About';

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
`

const SponsorCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const SponsorImage = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
`

const FAQPage = () => (
  <>
    <Layout />

    <Parallax pages={1}>
      <Navbar offset={0}></Navbar>
      <About offset={0}>
        <BigTitle>Sponsors</BigTitle>
        <ProjectsWrapper>
          <SponsorCard>
            <SponsorImage src={require('../resources/sponsor-logos/CodeAuthority.png')}></SponsorImage>
          </SponsorCard>

          <SponsorCard>
            <SponsorImage src={require('../resources/sponsor-logos/github.png')}></SponsorImage>
          </SponsorCard>

          <SponsorCard>
            <SponsorImage src={require('../resources/sponsor-logos/sahrduwhite.png')}></SponsorImage>
          </SponsorCard>

          <SponsorCard>
            <SponsorImage src={require('../resources/sponsor-logos/loogoaooswhite.png')}></SponsorImage>
          </SponsorCard>
        </ProjectsWrapper>
      </About>
    </Parallax>
  </>
)

export default FAQPage

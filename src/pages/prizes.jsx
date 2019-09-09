/* eslint-disable global-require */
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'

// Elements
import { BigTitle, Subtitle, Title, PrizeTitle, PrizeSubtitle } from '../elements/Titles'

import Navbar from '../components/Navbar'
import About from '../views/About'

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
    grid-gap: 1rem;
    margin-top: 1vw;
    margin-bottom: 1vw;
  }
  margin-top: 5vw;
  margin-bottom: 5vw;
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

  @media (max-width: 900px) {
    max-width: 100px;
  }
`

const FAQPage = () => (
  <>
    <Layout />

    <Parallax pages={1}>
      <Navbar offset={0}></Navbar>
      <About offset={0}>
        <BigTitle>Prizes</BigTitle>
        <ProjectsWrapper>
          <SponsorCard>
            <SponsorImage src={require('../resources/oculus.webp')}></SponsorImage>
            <PrizeTitle>First Place</PrizeTitle>
            <PrizeSubtitle>Oculus Quest VR Headset (Each Hacker)</PrizeSubtitle>
          </SponsorCard>

          <SponsorCard>
            <SponsorImage src={require('../resources/switch.png')}></SponsorImage>
            <PrizeTitle>Second Place</PrizeTitle>
            <PrizeSubtitle>Nintendo Switch Lite (Each Hacker)</PrizeSubtitle>
          </SponsorCard>

          <SponsorCard>
            <SponsorImage src={require('../resources/tello.png')}></SponsorImage>
            <PrizeTitle>Third Place</PrizeTitle>
            <PrizeSubtitle>DJI Tello Programmable Drones (Each Hacker)</PrizeSubtitle>
          </SponsorCard>
        </ProjectsWrapper>
      </About>
    </Parallax>
  </>
)

export default FAQPage

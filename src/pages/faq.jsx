import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import { Title } from '../elements/Titles'

import FAQContainer from '../views/FAQ'

import Navbar from '../components/Navbar'
import FAQ, { getGradientColorFromIndex } from '../model/FAQ'
import Inner from '../elements/Inner'

const FAQWrapper = styled.div`
  ${tw`mt-8`};
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
    margin-top: 0px !important;
  }

  @media (max-width: 376px) {
    grid-gap: 0.5rem;
    margin-top: 0px !important;
  }
`

const TitleText = styled.p`
  ${tw`text-grey-light font-sans font-bold`};

  font-size: 2.2vw;

  @media (max-width: 1200px) {
    font-size: 2.6vw;

    margin-bottom: 0px !important;
  }

  @media (max-width: 900px) {
    font-size: 2.2vw;
  }

  @media (max-width: 700px) {
    font-size: 2.5vw;
    margin-bottom: 0px !important;
  }

  @media (max-width: 550px) {
    font-size: 3.4vw;
    margin-bottom: 0px !important;
  }

  @media (max-width: 400px) {
    font-size: 5vw;
    margin-bottom: 0px !important;
  }

  @media (max-width: 376px) {
    font-size: 3vw;
    margin-bottom: 0px !important;
  }
`

const ContentText = styled.p`
  ${tw`text-grey-light font-sans`};
  text-shadow: 0 2px 4px rgba(255, 255, 255, 0.2);
  font-size: 1.2vw;
  
  @media (max-width: 1200px) {
    font-size: 1.25vw;
  }

  @media (max-width: 900px) {
    font-size: 1.65vw;
    margin-bottom: 0px !important;
  }

  @media (max-width: 700px) {
    font-size: 2vw;
    margin-bottom: 0px !important;
  }

  @media (max-width: 550px) {
    font-size: 2.4vw;
    margin-bottom: 0px !important;
  }

  @media (max-width: 400px) {
    font-size: 3vw;
    margin-bottom: 0px !important;
  }

  @media (max-width: 376px) {
    font-size: 3.2vw;
    margin-bottom: 0px !important;
  }
`

const FAQPage = () => (
  <>
    <Layout />
    <Parallax pages={2}>
      <Navbar />

      <FAQContainer offset={0}>
        <Title>FAQ</Title>
        <FAQWrapper>
          {FAQ.map(faq => (
            <div>
              <TitleText>{faq.title}</TitleText>
              <ContentText>{faq.content}</ContentText>
            </div>
          ))}
        </FAQWrapper>
      </FAQContainer>
    </Parallax>
  </>
)

export default FAQPage

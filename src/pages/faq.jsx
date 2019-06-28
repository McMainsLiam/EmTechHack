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
import useWindowDimensions from '../helpers/useWindowDimension'

const FAQWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

const TitleText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl font-bold`};
`

const ContentText = styled.p`
  ${tw`text-grey-light font-sans text-md md:text-lg lg:text-xl`};
  text-shadow: 0 2px 4px rgba(255, 255, 255, 0.2);
`

const FAQPage = () => {
  const { height, width } = useWindowDimensions()

  const mapWidthToHeight = () => {
    if (width > 1440) return 2
    if (width > 1300) return 2.1
    if (width > 1200) return 2.3
    if (width > 800) return 2.4
    if (width > 700) return 2.65
    if (width > 600) return 2.7
    if (width > 500) return 2.9
    if (width > 450) return 2.9
    if (width > 400) return 3.2
    if (width > 374) return 3.7
    if (width > 310) return 4.7
  }

  return (
    <>
      <Layout />
      <Parallax pages={mapWidthToHeight()}>
        <Navbar offset={0}></Navbar>

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
}

export default FAQPage

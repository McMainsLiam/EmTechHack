import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle, IntroTitle, SponsorTitle, SponsorSubtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import Navbar from '../components/Navbar'

const Index = () => (
  <>
    <Layout />
    <Parallax pages={1}>
      {/* <Navbar></Navbar> */}
      <Hero offset={0}>
        <IntroTitle>UTD Blockchain Presents</IntroTitle>
        <BigTitle>Emerging Tech Hackathon</BigTitle>
        <Subtitle>October 19th - 20th, 2019</Subtitle>
        <IntroTitle>• Free For All Students</IntroTitle>
        <IntroTitle>• Compete For Over $2,000 In Prizes</IntroTitle>
        <IntroTitle>• Participate In Development Workshops</IntroTitle>
        <IntroTitle>• No Experience Required</IntroTitle>
        <img style={{ position: 'fixed', bottom: 35, right: 35, height: 200, width: 'auto' }} src={require('../resources/qr2.png')}></img>
        {/* <p style={{ position: 'fixed', bottom: 35, left: 375, color: 'white', fontFamily:  }}>emtechhack.com</p> */}

        {/* <Link to="/about">
          <Button dark>Learn More</Button>
        </Link>
        <ExternalLink href={config.signUpFormURL} target="_blank">
          <Button>Apply Now</Button>
        </ExternalLink> */}
      </Hero>
    </Parallax>
  </>
)

const styles = {
  whiteLink: {
    color: 'white',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
}

export default Index

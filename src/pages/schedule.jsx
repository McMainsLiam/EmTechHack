import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import { Title, PrizeTitle } from '../elements/Titles'
import Navbar from '../components/Navbar'
import HeroWide from '../views/HeroWide'
import { Button } from '../elements/Buttons'
import config from '../model/config'
import CustomHeroWide from '../views/CustomHeroWide'

const CustomTitle = styled.p`
  padding-top: 20px;
  ${tw`text-grey-light font-extrabold font-sans text-sm md:text-lg lg:text-xl`};
`

const CustomSubtitle = styled.p`
  margin-top: -14px;
  ${tw`text-grey-light font-sans text-sm md:text-lg lg:text-xl`};
`

const Schedule = () => (
  <>
    <Layout />
    <Parallax pages={1}>
      <Navbar></Navbar>

      <CustomHeroWide offset={0}>
        <Title>Schedule</Title>

        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ width: '65%' }}>
            <CustomTitle>9:00 am - ECSS 2.412</CustomTitle>
            <CustomSubtitle>Hacker Sign In</CustomSubtitle>

            <CustomTitle>10:30 am - ECSS 2.412</CustomTitle>
            <CustomSubtitle>Opening Ceremonies</CustomSubtitle>

            <CustomTitle>11:00 am - ECSW 3.210/3.250</CustomTitle>
            <CustomSubtitle>Begin Hacking</CustomSubtitle>

            <CustomTitle>1:00 pm - ECSW Lobby</CustomTitle>
            <CustomSubtitle>Lunch</CustomSubtitle>

            <CustomTitle>1:00 pm - ECSS 2.412</CustomTitle>
            <CustomSubtitle>Shardus Workshop/Networking</CustomSubtitle>
          </div>
          <div style={{ width: '65%' }}>
            <CustomTitle>6:00 pm - ECSW 2.325</CustomTitle>
            <CustomSubtitle>Intro to Git Workshop</CustomSubtitle>

            <CustomTitle>6:30 pm - ECSW Lobby</CustomTitle>
            <CustomSubtitle>Dinner</CustomSubtitle>

            <CustomTitle>9:30 pm - ECSW 2.325</CustomTitle>
            <CustomSubtitle>Intro to Amazon Web Services</CustomSubtitle>

            <CustomTitle>8:00 am - ECSW Lobby</CustomTitle>
            <CustomSubtitle>Breakfast</CustomSubtitle>

            <CustomTitle>8:30 am - ECSW 2.325</CustomTitle>
            <CustomSubtitle>Zabo Workshop</CustomSubtitle>
          </div>
          <div style={{ width: '50%' }}>
            <CustomTitle>10:00 am - ECSW 2.325</CustomTitle>
            <CustomSubtitle>AI Workshop</CustomSubtitle>

            <CustomTitle>11:00 am</CustomTitle>
            <CustomSubtitle>Hacking Ends</CustomSubtitle>

            <CustomTitle>12:00 pm - ECSW Lobby</CustomTitle>
            <CustomSubtitle>Lunch</CustomSubtitle>

            <CustomTitle>1:00 pm - ECSW 3.210/3.250</CustomTitle>
            <CustomSubtitle>Judging</CustomSubtitle>

            <CustomTitle>3:00 pm - ECSW 1.315</CustomTitle>
            <CustomSubtitle>Awards & Prizes</CustomSubtitle>
          </div>
        </div>
      </CustomHeroWide>
    </Parallax>
  </>
)

export default Schedule

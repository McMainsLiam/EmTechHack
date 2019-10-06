import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Parallax } from 'react-spring/renderprops-addons.cjs';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import { Title, PrizeTitle } from '../elements/Titles';
import Navbar from '../components/Navbar';
import HeroWide from '../views/HeroWide';
import { Button } from '../elements/Buttons';
import config from '../model/config';
import CustomHeroWide from '../views/CustomHeroWide';

const CustomTitle = styled.p`
  ${tw`text-grey-light font-extrabold font-sans text-lg md:text-xl lg:text-2xl`};
`

const CustomSubtitle = styled.p`
  ${tw`text-grey-light font-semibold font-sans text-md md:text-lg lg:text-xl`};
`

const Schedule = () => (
  <>
    <Layout />
    <Parallax pages={1}>
      <Navbar></Navbar>

      <CustomHeroWide offset={0}>
        <Title>Schedule</Title>

        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ width: '40%' }}>
            <CustomTitle>- 9:00 am</CustomTitle>
            <CustomSubtitle>Hacker Sign In</CustomSubtitle>

            <CustomTitle>- 10:00 am</CustomTitle>
            <CustomSubtitle>Walk-In Registration</CustomSubtitle>

            <CustomTitle>- 10:30 am</CustomTitle>
            <CustomSubtitle>Opening Ceremonies</CustomSubtitle>

            <CustomTitle>- 11:00 am</CustomTitle>
            <CustomSubtitle>Begin Hacking</CustomSubtitle>

            <CustomTitle>- 1:00 pm</CustomTitle>
            <CustomSubtitle>Lunch</CustomSubtitle>
          </div>
          <div style={{ width: '40%' }}>
            <CustomTitle>- 1:00 pm</CustomTitle>
            <CustomSubtitle>Shardus Networking Session</CustomSubtitle>

            <CustomTitle>- 2:00 pm</CustomTitle>
            <CustomSubtitle>Shardus Event Presentation</CustomSubtitle>

            <CustomTitle>- 5:30 pm</CustomTitle>
            <CustomSubtitle>Dinner</CustomSubtitle>

            <CustomTitle>- 6:00 pm</CustomTitle>
            <CustomSubtitle>Intro to Git Workshop</CustomSubtitle>

            <CustomTitle>- 9:30 pm</CustomTitle>
            <CustomSubtitle>Intro to Amazon Web Services</CustomSubtitle>
          </div>
          <div style={{ width: '40%' }}>
            <CustomTitle>- 8:00 am</CustomTitle>
            <CustomSubtitle>Breakfast</CustomSubtitle>

            <CustomTitle>- 11:00 am</CustomTitle>
            <CustomSubtitle>Hacking Ends</CustomSubtitle>

            <CustomTitle>- 12:00 pm</CustomTitle>
            <CustomSubtitle>Lunch</CustomSubtitle>

            <CustomTitle>- 1:00 pm</CustomTitle>
            <CustomSubtitle>Judging</CustomSubtitle>

            <CustomTitle>- 3:00 pm</CustomTitle>
            <CustomSubtitle>Awards & Prizes</CustomSubtitle>
          </div>
        </div>
      </CustomHeroWide>
    </Parallax>
  </>
)

export default Schedule

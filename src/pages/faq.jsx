import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Parallax } from "react-spring/renderprops-addons.cjs";

// Components
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

// Elements
import { Title } from "../elements/Titles";

import FAQContainer from "../views/FAQ";

import Navbar from "../components/Navbar";
import FAQ, { getGradientColorFromIndex } from "../model/FAQ";

const FAQWrapper = styled.div`
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

const CardTitle = styled.p`
  ${tw`text-xl lg:text-2xl font-sans text-white mt-8 xxl:w-3/4`};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;

const FAQPage = () => (
  <>
    <Layout />

    <Parallax pages={2}>
      <Navbar offset={0}></Navbar>
      <FAQContainer offset={0}>
        <Title>FAQ</Title>
        <FAQWrapper>
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
        </FAQWrapper>
      </FAQContainer>
    </Parallax>
  </>
);

export default FAQPage;

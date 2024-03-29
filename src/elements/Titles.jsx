import styled from "styled-components";
import tw from "tailwind.macro";
import { rotateAnimation } from "../styles/animations";
import triangle from "../images/triangle.svg";

export const Title = styled.h1`
  ${tw`text-4xl lg:text-4xl font-serif text-white mb-8 tracking-wide relative inline-block`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  &:before {
    content: "";
    width: 40px;
    height: 40px;
    background: url(${triangle});
    position: absolute;
    background-size: 40px;
    ${rotateAnimation("4s")};
    left: -60px;
    top: 5px;
  }
`;

export const BigTitle = styled.h1`
  ${tw`text-5xl lg:text-6xl font-serif text-white mb-6 mt-1 tracking-wide`};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`;

export const Subtitle = styled.p`
  ${tw`text-2xl lg:text-4xl font-sans text-white mt-8 xxl:w-3/4`};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;

export const IntroTitle = styled.p`
  ${tw`text-xl lg:text-2xl font-sans text-white mb-2 xxl:w-3/4`};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;

export const SponsorTitle = styled.p`
  ${tw`text-2xl lg:text-4xl font-sans text-white lg:mt-8 mt-0 mb-0`};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  display: inline;
`;

export const SponsorSubtitle = styled.p`
  ${tw`text-xl lg:text-2xl font-sans text-white mt-0`};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  display: inline;
`;

export const PrizeTitle = styled.p`
  ${tw`text-2xl lg:text-4xl font-sans text-white lg:mt-8 mt-0 mb-0`};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  display: inline;
  font-weight: bold;
`;

export const PrizeSubtitle = styled.p`
  ${tw`text-xl lg:text-2xl font-sans text-white mt-0`};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  display: inline;
  text-align: center;
`;
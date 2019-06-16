import styled from "styled-components";
import tw from "tailwind.macro";

export const Button = styled.a`
  ${tw`text-lg font-sans text-white`};
  padding: 15px 20px;
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  background-color: ${props => (props.dark ? "#111" : "white")};
  display: inline-block;
  color: ${props => (props.dark ? "white" : "#111")} !important;
  margin-right: 20px;
  box-shadow: 1px;
`;

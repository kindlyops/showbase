import React from 'react';
import styled, { css } from 'styled-components';

import tw from 'twin.macro'; // eslint-disable-line import/no-extraneous-dependencies
import {
  GatsbyIcon,
  TailwindIcon,
  StyledComponentsIcon,
  TypescriptIcon,
  GithubIcon,
  TwinIcon
} from '../components';
import Theme from '../components/theme';
import Button from '../components/Button';
import logo from "./logo.png";

const Wrapper = styled.div`
  ${tw`flex flex-col items-center justify-center h-screen`}
`;

const Main = tw.div`
  p-6 bg-gray-100
`;

const Heading = tw.h1`
  text-2xl text-gray-500 uppercase mt-5
`;

const Text = tw.p`
  text-xl text-gray-700 my-4
`;

const Logos = styled.div`
  ${tw`flex items-center justify-around`}
  svg,
  img {
    width: 64px;
  }
`;

const Footer = styled.footer`
  ${tw`flex justify-center`}
  svg {
    width: 30px;
    path {
      &:hover {
        fill: palevioletred;
      }
    }
  }
`;

const Index = () => (
  <Theme>
    <div
      css={[
        tw`flex flex-col items-center justify-center h-screen`,
        // Combine regular css and Tailwind styles within backticks
        css`
          background: #f5f5f5;
        `
      ]}
    >
      <Wrapper>
        <Main>
          <img src={logo} alt="Logo" />
          <Heading>ShowBase</Heading>
          <Text>
            Welcome to ShowBase!
          </Text>
          <Footer>
            <a
              href="https://github.com/kindlyops/showbase"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </a>
          </Footer>
        </Main>
      </Wrapper>
    </div>
  </Theme>
);

export default Index;

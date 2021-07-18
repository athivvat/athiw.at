import React from 'react';
import styled from 'styled-components';
import { Experience, Education, Certificates } from '../../components';

const Content = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: 100px;
`;

const Quote = styled.div`
  font-family: 'Source Serif Pro', serif;
  font-size: 2.4rem;
  color: #fff;
  quotes: '\\201C''\\201D''\\2018''\\2019';
  &:before {
    content: open-quote;
    display: inline;
    height: 0;
    line-height: 0;
    left: -10px;
    position: relative;
    top: 30px;
    color: #fff;
    font-size: 3em;
  }
  &:after {
    content: close-quote;
    display: inline;
    height: 0;
    line-height: 0;
    left: 10px;
    position: relative;
    top: 35px;
    color: #fff;
    font-size: 3em;
  }
`;

const About: React.FC = () => {
  return (
    <div>
      <Content>
        <div>
          <h3>About</h3>
          <p>
            Founder of Humaan.ai—Build intelligent technology tools that
            amplifying human ingenuity.
          </p>
          <p>
            I'm a Data Engineer who is really passionate to become entrepreneur,
            investor, and AI engineer. Was found Humaan.ai to bringing the AI to
            everyone to do incredible ways.
          </p>
          <p>
            Currently, I'm studying for a master's degree in Business Analytics
            and Data Sciences, where majoring in Artificial Intelligence and
            Machine Learning at National Institute of Development Administration
            (NIDA), Thailand.
          </p>
        </div>
        <div>
          <Experience />
          <Education />
          <Certificates />
        </div>
      </Content>
    </div>
  );
};

export default About;

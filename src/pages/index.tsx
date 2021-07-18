import styled from 'styled-components';
import { Certificates } from '../components/certificates';
import { Education } from '../components/education';
import { Experience } from '../components/experience';
import { Footer } from '../components/footer';

const Content = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: 100px;
`;


function HomePage() {
  return (
    <>
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
      <Footer />
    </>
  );
}

export default HomePage;

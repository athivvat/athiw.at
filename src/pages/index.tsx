import styled from 'styled-components';

const Content = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: 100px;
`;

const Container = styled.div`
  margin-bottom: 25px;
`;

const JobTitle = styled.p`
  margin: 0;
  padding: 0;
  font-weight: bold;
`;

const Company = styled.a`
  margin: 0;
  padding: 0;
`;

const Period = styled.p`
  margin: 0;
  padding: 0;
  color: #757575;
  font-size: 14px;
`;

const Degree = styled.p`
  margin: 0;
  padding: 0;
  font-weight: bold;
`;

const Major = styled.p`
  margin: 0;
  padding: 0;
`;

const University = styled.a``;

const Items = styled.ul`
  margin: 0;
  padding: 0;
`;

// const Item = styled.li`
//   &:before {
//     content: '\\29BF';
//     color: #fff;
//     padding-right: 8px;
//   }
// `;

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
              I'm a Data Engineer who is really passionate to become
              entrepreneur, investor, and AI engineer. Was found Humaan.ai to
              bringing the AI to everyone to do incredible ways.
            </p>
            <p>
              Currently, I'm studying for a master's degree in Business
              Analytics and Data Sciences, where majoring in Artificial
              Intelligence and Machine Learning at National Institute of
              Development Administration (NIDA), Thailand.
            </p>
          </div>
          <div>
            <h3>Experience</h3>
            <Container>
              <JobTitle>Data Engineer</JobTitle>
              <Company
                href="http://kingpowerclick.com/"
                target="_blank"
                rel="noreferrer"
              >
                King Power Click
              </Company>
              <Period>January 2020 - Present</Period>
            </Container>
            <Container>
              <JobTitle>Software Engineer</JobTitle>
              <Company
                href="http://kingpowerclick.com/"
                target="_blank"
                rel="noreferrer"
              >
                King Power Click
              </Company>
              <Period>May 2018 - January 2020</Period>
            </Container>
            <h3>Education</h3>
            <div>
              <Degree>M.S. Business Analytics and Data Science</Degree>
              <Major>
                Major in Artificial Intelligence and Machine Learning
              </Major>
              <University
                href="http://www.nida.ac.th/en/"
                target="_blank"
                rel="noreferrer"
              >
                National Institute of Development Administration (NIDA)
              </University>
              <Period>2020-Present</Period>
            </div>
            <div>
              <Degree>B.Eng. Computer Engineering</Degree>
              <University
                href="https://www.tni.ac.th/"
                target="_blank"
                rel="noreferrer"
              >
                Thai-Nichi Institute of Technology
              </University>
              <Period>2008-2011</Period>
            </div>
            <h3>Certificates</h3>
            <div>
              <a
                href="https://verify.openedg.org/?id=rDPA.xKsx.fFK4"
                target="_blank"
                rel="noreferrer"
              >
                PCAP – Certified Associate in Python Programming
              </a>
              <div>Date Certified: July 28, 2020</div>
              <div>Certification Code: rDPA.xKsx.fFK4</div>
            </div>
          </div>
        </Content>
      </div>
    </>
  );
}

export default HomePage;

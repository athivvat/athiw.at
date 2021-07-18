import styled from 'styled-components';

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

const Experience = () => {
  return (
    <>
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
    </>
  );
};

export default Experience;

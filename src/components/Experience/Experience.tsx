import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 25px;
`;

const JobTitle = styled.p`
  margin: 0;
  padding: 0;
  font-weight: bold;
`;

const Company = styled.p`
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
      <h2>Experience</h2>
      <Container>
        <JobTitle>Data Engineer</JobTitle>
        <Period>(January 2020 - Present)</Period>
        <Company>King Power Click</Company>
      </Container>
      <Container>
        <JobTitle>Software Engineer</JobTitle>
        <Period>(May 2018 - January 2020)</Period>
        <Company>King Power Click</Company>
      </Container>
      <hr />
    </>
  );
};

export { Experience };

import styled from 'styled-components';

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

const Period = styled.div`
  margin: 0;
  padding: 0;
  color: #757575;
  font-size: 14px;
`;

const Item = styled.div`
  margin-bottom: 20px;
`;

const Education = () => {
  return (
    <>
      <h2>Education</h2>
      <Item>
        <Degree>M.S. Business Analytics and Data Science</Degree>
        <Major>Major in Artificial Intelligence and Machine Learning</Major>
        <University href="http://www.nida.ac.th/en/" target="_blank">
          National Institute of Development Administration (NIDA)
        </University>
        <Period>2019-Present</Period>
      </Item>
      <Item>
        <Degree>B.Eng. Computer Engineering</Degree>
        <University href="https://www.tni.ac.th/" target="_blank">
          Thai-Nichi Institute of Technology
        </University>
        <Period>2008-2011</Period>
      </Item>
      <hr />
    </>
  );
};

export { Education };

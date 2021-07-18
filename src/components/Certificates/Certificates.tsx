import styled from 'styled-components';

const Items = styled.ul`
  margin: 0;
  padding: 0;
`

const Item = styled.li`
  &:before {
    content: "\\29BF";
    color: #fff;
    padding-right: 8px;
  }
`

const Certificates = () => {
  return (
    <>
      <h3>Certificates</h3>
      <Items>
        <Item>
          <a
            href="https://verify.openedg.org/?id=rDPA.xKsx.fFK4"
            target="_blank"
            rel="noreferrer"
          >
            PCAP – Certified Associate in Python Programming
          </a>
          <div>Date Certified: July 28, 2020</div>
          <div>Certification Code: rDPA.xKsx.fFK4</div>
        </Item>
      </Items>
    </>
  );
};

export default Certificates;

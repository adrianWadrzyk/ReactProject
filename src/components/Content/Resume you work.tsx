import styled from "styled-components";

const Wrapper = styled.div``;

const Header = styled.h2`
    padding: 10px 0;
`;

const WorkPanel = styled.div`
  border-bottom: 2px solid black;
  padding: 10px;
  margin-top: 5px;
  background-color: white;
`;

const PanelDescription = styled.div`
  margin-top: 10px;
`;

const Title = styled.h3``;

const Footer = styled.footer`
  display: flex;
  margin-top: 10px;
`;

const FooterName = styled.p``;

const FooterContractType = styled.p`
  padding: 0 20px;
`;

const Date = styled.p``;

const ResumeYouWork = () => {
  return (
    <Wrapper>
      <Header>Resume you work</Header>
      <WorkPanel>
        <Title>
          World Company SAS
        </Title>
        <PanelDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iste
          neque blanditiis adipisci illum, porro suscipit quisquam a fuga
          reiciendis minima eius vero vel atque officiis temporibus in non
          praesentium?
        </PanelDescription>
        <Footer>
          <FooterName>Subsid.corp</FooterName>
          <FooterContractType>Corporate</FooterContractType>
          <Date> Updated 3 days ago by John Doe</Date>
        </Footer>
      </WorkPanel>
      <WorkPanel>
        <Title>
          World Company SAS
        </Title>
        <PanelDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iste
          neque blanditiis adipisci illum, porro suscipit quisquam a fuga
          reiciendis minima eius vero vel atque officiis temporibus in non
          praesentium?
        </PanelDescription>
        <Footer>
          <FooterName>Subsid.corp</FooterName>
          <FooterContractType>Corporate</FooterContractType>
          <Date> Updated 3 days ago by John Doe</Date>
        </Footer>
      </WorkPanel>
    </Wrapper>
  );
};
export default ResumeYouWork;

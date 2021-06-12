import styled from 'styled-components';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useHistory } from 'react-router-dom';
import { Colors } from '../../styledHelpers/colorsUtils';
import { fontSize } from '../../styledHelpers/fontUtils';

import 'swiper/swiper.scss';


const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Header = styled.h2`
    width: 100%;
    height: 30px;
    line-height: 30px;
    margin: 10px 0px 0;
    font-size: ${fontSize.sectionTitle};
`;

const SingleContainer = styled.div`
    height:250px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 10px 0px;
    padding: 5px;
    background-color: white;

    &:hover { 
        cursor: pointer;
    }
`;

const Photo = styled.div`
    height: 65%;
    background: url('./media/contract.png');
    background-position: center;
    background-size: cover;
`;

const ContractName = styled.h3``;

const ContractNumberOfUsers = styled.p`
    padding-left: 10px;
`;

const InsideWrapper = styled.div`
    display: flex;
    width: 70%;
    margin: 10px auto;
    justify-content: space-around;
    color: ${Colors.textBlack};
    align-items: center;
`;

const ContractIcon = styled.img`
    height: 40px;
`;

const Fotter = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 10px;
`;

const LatestUpdate = styled.p`
    width: 100%;
    text-align:left;
    padding-top:5px;
`;

const Workspaces = () => { 
    let history  = useHistory();
    const redirect = () => { 
        history.push('/corporation')
    }
    return (
        <Wrapper>
            <Header>Workspaces</Header>

            <Swiper 
             spaceBetween={50}
             slidesPerView={3}
            >
                  <SwiperSlide>
                  <SingleContainer onClick={redirect}>
                    <Photo></Photo>
                    <InsideWrapper>
                        <ContractIcon src="./media/administration.png"></ContractIcon>
                        <ContractName>Client contract</ContractName>
                    </InsideWrapper>
                    <Fotter>
                        <ContractName>Contract</ContractName>
                        <ContractNumberOfUsers>150 users</ContractNumberOfUsers>
                        <LatestUpdate>Latest update 2 day ago</LatestUpdate>
                    </Fotter>
                 </SingleContainer >
                  </SwiperSlide>
                  <SwiperSlide>
                  <SingleContainer onClick={redirect}>
                    <Photo></Photo>
                    <InsideWrapper>
                        <ContractIcon src="./media/administration.png"></ContractIcon>
                        <ContractName>Client contract</ContractName>
                    </InsideWrapper>
                    <Fotter>
                        <ContractName>Contract</ContractName>
                        <ContractNumberOfUsers>150 users</ContractNumberOfUsers>
                        <LatestUpdate>Latest update 2 day ago</LatestUpdate>
                    </Fotter>
                 </SingleContainer>
                  </SwiperSlide>
                <SwiperSlide>
                  <SingleContainer onClick={redirect}>
                    <Photo></Photo>
                    <InsideWrapper>
                        <ContractIcon src="./media/administration.png"></ContractIcon>
                        <ContractName>Client contract</ContractName>
                    </InsideWrapper>
                    <Fotter>
                        <ContractName>Contract</ContractName>
                        <ContractNumberOfUsers>150 users</ContractNumberOfUsers>
                        <LatestUpdate>Latest update 2 day ago</LatestUpdate>
                    </Fotter>
                 </SingleContainer>
                  </SwiperSlide>
                  <SwiperSlide>
                  <SingleContainer onClick={redirect}>
                    <Photo></Photo>
                    <InsideWrapper>
                        <ContractIcon src="./media/administration.png"></ContractIcon>
                        <ContractName>Client contract</ContractName>
                    </InsideWrapper>
                    <Fotter>
                        <ContractName>Contract</ContractName>
                        <ContractNumberOfUsers>150 users</ContractNumberOfUsers>
                        <LatestUpdate>Latest update 2 day ago</LatestUpdate>
                    </Fotter>
                 </SingleContainer>
                  </SwiperSlide>
                  <SwiperSlide>
                  <SingleContainer onClick={redirect}>
                    <Photo></Photo>
                    <InsideWrapper>
                        <ContractIcon src="./media/administration.png"></ContractIcon>
                        <ContractName>Client contract</ContractName>
                    </InsideWrapper>
                    <Fotter>
                        <ContractName>Contract</ContractName>
                        <ContractNumberOfUsers>150 users</ContractNumberOfUsers>
                        <LatestUpdate>Latest update 2 day ago</LatestUpdate>
                    </Fotter>
                 </SingleContainer>
                  </SwiperSlide>
                  <SwiperSlide>
                  <SingleContainer onClick={redirect}>
                    <Photo></Photo>
                    <InsideWrapper>
                        <ContractIcon src="./media/administration.png"></ContractIcon>
                        <ContractName>Client contract</ContractName>
                    </InsideWrapper>
                    <Fotter>
                        <ContractName>Contract</ContractName>
                        <ContractNumberOfUsers>150 users</ContractNumberOfUsers>
                        <LatestUpdate>Latest update 2 day ago</LatestUpdate>
                    </Fotter>
                 </SingleContainer>
                  </SwiperSlide>
            </Swiper>
        </Wrapper>
    );
};

export default Workspaces;
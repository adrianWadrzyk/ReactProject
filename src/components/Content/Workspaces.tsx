import styled from 'styled-components';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';


const Wrapper = styled.div`
    background-color: red;
    display: flex;
    flex-wrap: wrap;
`;

const Header = styled.h2`
    width: 100%;
`;

const SingleContainer = styled.div`
    height:250px;
    background-color: yellow;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 10px;
`;

const Photo = styled.div`
    height: 40%;
    background-color: black;
`;

const ContractName = styled.h3``;

const ContractIcon = styled.img`
    width: 20%;
`;

const InsideWrapper = styled.div`
    margin: 0 auto;
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Fotter = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const LatestUpdate = styled.p`
    width: 100%;
    text-align:left;
    padding-top:15px;
    padding-left: 20px;
`

const Workspaces = () => { 
    return (
        <Wrapper>
            <Header>Workspaces</Header>

            <Swiper 
             spaceBetween={50}
             slidesPerView={3}
            >
                  <SwiperSlide>
                  <SingleContainer>
                    <Photo> Zdjęcie</Photo>
                    <InsideWrapper>
                        <ContractIcon src="./media/administration.png"></ContractIcon>
                        <ContractName>Client contract</ContractName>
                    </InsideWrapper>
                    <Fotter>
                        <p>Contract</p>
                        <p>150 users</p>
                        <LatestUpdate>Latest update 2 day ago</LatestUpdate>
                    </Fotter>
                 </SingleContainer>
                  </SwiperSlide>
                  <SwiperSlide>
                  <SingleContainer>
                    <Photo> Zdjęcie</Photo>
                    <InsideWrapper>
                        <ContractIcon src="./media/administration.png"></ContractIcon>
                        <ContractName>Client contract</ContractName>
                    </InsideWrapper>
                    <Fotter>
                        <p>Contract</p>
                        <p>150 users</p>
                        <LatestUpdate>Latest update 2 day ago</LatestUpdate>
                    </Fotter>
                 </SingleContainer>
                  </SwiperSlide>
                <SwiperSlide>
                  <SingleContainer>
                    <Photo> Zdjęcie</Photo>
                    <InsideWrapper>
                        <ContractIcon src="./media/administration.png"></ContractIcon>
                        <ContractName>Client contract</ContractName>
                    </InsideWrapper>
                    <Fotter>
                        <p>Contract</p>
                        <p>150 users</p>
                        <LatestUpdate>Latest update 2 day ago</LatestUpdate>
                    </Fotter>
                 </SingleContainer>
                  </SwiperSlide>
                  <SwiperSlide>
                  <SingleContainer>
                    <Photo> Zdjęcie</Photo>
                    <InsideWrapper>
                        <ContractIcon src="./media/administration.png"></ContractIcon>
                        <ContractName>Client contract</ContractName>
                    </InsideWrapper>
                    <Fotter>
                        <p>Contract</p>
                        <p>150 users</p>
                        <LatestUpdate>Latest update 2 day ago</LatestUpdate>
                    </Fotter>
                 </SingleContainer>
                  </SwiperSlide>
                  <SwiperSlide>
                  <SingleContainer>
                    <Photo> Zdjęcie</Photo>
                    <InsideWrapper>
                        <ContractIcon src="./media/administration.png"></ContractIcon>
                        <ContractName>Client contract</ContractName>
                    </InsideWrapper>
                    <Fotter>
                        <p>Contract</p>
                        <p>150 users</p>
                        <LatestUpdate>Latest update 2 day ago</LatestUpdate>
                    </Fotter>
                 </SingleContainer>
                  </SwiperSlide>
                  <SwiperSlide>
                  <SingleContainer>
                    <Photo> Zdjęcie</Photo>
                    <InsideWrapper>
                        <ContractIcon src="./media/administration.png"></ContractIcon>
                        <ContractName>Client contract</ContractName>
                    </InsideWrapper>
                    <Fotter>
                        <p>Contract</p>
                        <p>150 users</p>
                        <LatestUpdate>Latest update 2 day ago</LatestUpdate>
                    </Fotter>
                 </SingleContainer>
                  </SwiperSlide>
            </Swiper>
        </Wrapper>
    );
};

export default Workspaces;
import React, { useState } from 'react';
import styled from 'styled-components';
import ResumeYouWork from '../Content/Resume you work'
const Wrapper = styled.div``;

const Tiles = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 250px;
    text-align: left;
    padding: 0 10px;
    justify-content: center;
`;

const CorporateWorkingHeader = styled.h3``;

const Hide = styled.p``;

const TilesHeader = styled.p`
    font-size: 1.2em;
    margin: 10px 0;
`;

const TilesDescription = styled.p`
    line-height: 1.2em;
    padding-right: 10px;
`;

const TilesIcon = styled.img`
    height: 20%;
    width: 15%;
`;

const InsideFlexWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const FirstLine = styled.div`
    display: flex;
    justify-content: space-between;
    height: 30px;
    align-items: center;
    margin: 10px 0;
`;

const Bold = styled.span`
    font-weight: bold;
`


const  CorporateWorking = () => { 
        
    const [show, setFilters] = useState<boolean>(true);

    const showSection = () => { 
        setFilters(!show);
    }

        return (
            <Wrapper>
                <FirstLine>
                    <CorporateWorkingHeader>Start working on corporate matters</CorporateWorkingHeader>
                    <Hide onClick={showSection}>Hide</Hide>
                </FirstLine>
                {show &&
                <InsideFlexWrapper>
                    <Tiles>
                        
                            <TilesIcon src="./media/entities.png"></TilesIcon>
                            <TilesHeader> Explore your <Bold>entities</Bold></TilesHeader>
                            <TilesDescription>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur praesentium 
                                vitae quae doloremque nam sapiente? Quisquam ratione vero, nulla error amet ipsam facere incidunt culpa, tempore, d
                                olorem unde quis autem.
                            </TilesDescription>
                    </Tiles>
                    <Tiles>
                            <TilesIcon src="./media/entities.png"></TilesIcon>
                            <TilesHeader> Explore your <Bold>entities</Bold></TilesHeader>
                            <TilesDescription>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur praesentium 
                                vitae quae doloremque nam sapiente? Quisquam ratione vero, nulla error amet ipsam facere incidunt culpa, tempore, d
                                olorem unde quis autem.
                            </TilesDescription>
                    </Tiles>
                    <Tiles>
                            <TilesIcon src="./media/entities.png"></TilesIcon>
                            <TilesHeader> Explore your <Bold>entities</Bold></TilesHeader>
                            <TilesDescription>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur praesentium 
                                vitae quae doloremque nam sapiente? Quisquam ratione vero, nulla error amet ipsam facere incidunt culpa, tempore, d
                                olorem unde quis autem.
                            </TilesDescription>
                    </Tiles>
                    </InsideFlexWrapper>
                }
            </Wrapper>
        )
    }

export default CorporateWorking;
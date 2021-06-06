
import React from 'react';
import styled from 'styled-components';


const CorporateHodlings = styled.div`
    background-image: url("./media/office.jpg");
    background-size: cover;
    background-position-y: bottom;
    height: 300px;
`;

const CorporateHodlingInsideWrapper = styled.div`
    background-color: white;
    position: relative;;
    height: 100px;
    top: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h2`
    font-size: 1.5em;
`;

const FirtsColumn = styled.div`
    padding: 10px;
    text-align: right;
    height: 90%;
`;

const SecondColumn = styled.div`
    padding: 10px;
    width: 80%;
    height: 90%;
`;

const CorporateHodlingsDesc = styled.p`
    margin-top: 20px;
`;

const CorporateHodlingsIcon = styled.img`
    height: 100%;
`;


class CorporateHodlins extends React.Component { 
    render() { 
        return (
                <CorporateHodlings>
                    <CorporateHodlingInsideWrapper>
                    <FirtsColumn>
                        <CorporateHodlingsIcon src="./media/entities.png"></CorporateHodlingsIcon>
                    </FirtsColumn>
                    <SecondColumn>
                        <Title>Corporate holdings</Title>
                        <CorporateHodlingsDesc> 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptate? Aspernatur blanditiis, 
                            delectus natus cum dolores eos est voluptate inventore. 
                            Impedit inventore placeat praesentium nemo deserunt aspernatur? Minus, quia rem.
                        </CorporateHodlingsDesc>
                        </SecondColumn>
                    </CorporateHodlingInsideWrapper>
                </CorporateHodlings>
        )
    }
}

export default CorporateHodlins;
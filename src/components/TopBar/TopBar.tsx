import styled from 'styled-components';

import SearchInput from './SearchInput';
import ExtendMenu from './ExtendMenu';

import {Wrapper} from '../../styledHelpers/Components';

const InnerWrapper = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.3);
    width: 30%;
    padding: 3px 0;
`;

const LeftContainer = styled.div`
    display: flex;
    min-width: 15%;
    align-items: center;
    justify-content: space-around;
`;

const RightIconsContainer = styled.div`
`;

const Logo = styled.img`
    width: 50px;
    height: 50px;
    padding: 5px 0px;
`;

const CustomImg = styled.img`
    padding: 0 10px;
    height: 20px;
    width: 20px;
`;

const TopBar = () => { 
    return(
        <Wrapper>
            <InnerWrapper>
                <LeftContainer>
                    <Logo src='./media/logo.png' alt="logo"/>
                    <CustomImg src='./media/house2.png' alt="bell"/>
                    <ExtendMenu />
                </LeftContainer>
                <InputWrapper>
                    <SearchInput />
                    <CustomImg src='./media/search.png' />
                </InputWrapper>
                <RightIconsContainer>
                    <CustomImg src='./media/house.png' />
                    <CustomImg src='./media/comments.png' />
                    <CustomImg src='./media/bell.png' />
                </RightIconsContainer>
            </InnerWrapper>
        </Wrapper>
    );
};

export default TopBar;
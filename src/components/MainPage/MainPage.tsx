import styled from 'styled-components';

import TopBar from '../TopBar/TopBar';
import LeftNav from '../LeftNav/LeftNav';
import ContentWrapper from '../Content/ContentWrapper';

const Wrapper = styled.div`
    background-color: #dfd5d5;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
`;

const Content = styled.div`
    margin: 20px 10px;
    width: 100%;
    display: flex;
`;

const MainPage = () => { 
    return (
        <Wrapper>
            <TopBar />
            <Content>
                <LeftNav />
                 <ContentWrapper></ContentWrapper>
            </Content>
        </Wrapper>
    );
};

export default MainPage;
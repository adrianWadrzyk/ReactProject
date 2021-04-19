import styled from 'styled-components';

import TopBar from '../TopBar/TopBar';
import LeftNav from '../LeftNav/LeftNav';

const Wrapper = styled.div`
    background-color: #dfd5d5;
`;

const Content = styled.div`
    width: 1200px;
    align-items: center;
    display:flex;
    margin-top: 20px;
`;

const MainPage = () => { 
    return (
        <Wrapper>
            <TopBar />
            <Content>
                 <LeftNav />
            </Content>
        </Wrapper>
    );
};

export default MainPage;
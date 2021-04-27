import {BrowserRouter as Router, Route, Link } from 'react-router-dom'; 


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
    display: grid;
    grid-template-columns: 20% 80%;
`;

const MainPage = () => { 
    return (
        <Router>
            <Wrapper>
                <TopBar />
                <Content>
                    <LeftNav />
                    <Route exact path="/" component={ContentWrapper} />
                </Content>
            </Wrapper>
        </Router>
    );
};

export default MainPage;
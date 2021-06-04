import {BrowserRouter as Router, Route } from 'react-router-dom'; 


import styled from 'styled-components';
import TopBar from '../TopBar/TopBar';
import LeftNav from '../LeftNav/LeftNav';
import ContentWrapper from '../Content/ContentWrapper';
import Entities from '../Entities/Entities';

import {store} from '../../store';
import {Provider} from 'react-redux';

const Wrapper = styled.div`
    background-color: #dfd5d5;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
`;

const Content = styled.div`
    padding: 20px 10px;
    display: grid;
    grid-template-columns: 20% 80%;
`;

const MainPage = () => { 
    return (
        <Provider store={store}>
        <Router>
            <Wrapper>
                <TopBar />
                <Content>
                    <LeftNav />
                    <Route exact path="/" component={ContentWrapper} />
                    <Route path="/entities" component={Entities} />
                </Content>
            </Wrapper>
        </Router>
        </Provider>
    );
};

export default MainPage;
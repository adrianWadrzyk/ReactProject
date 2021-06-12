import {BrowserRouter as Router, Route } from 'react-router-dom'; 
import styled from 'styled-components';
import TopBar from '../TopBar/TopBar';
import LeftNav from '../LeftNav/LeftNav';
import ContentWrapper from '../Content/ContentWrapper';
import Entities from '../Entities/Entities';
import WorkSpacesFullPage from '../WorkSpacesFullPage/WorkSpacesFullPage'
import {store} from '../../store';
import {Provider} from 'react-redux';
import {Colors} from '../../styledHelpers/colorsUtils';

const Wrapper = styled.div`
    background-color: ${Colors.mainBackgroundColor}; ;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    min-height: 100vh;
`;

const Content = styled.div`
    padding: 20px 10px;
    display: grid;
    grid-template-columns: 20% 75%;
    justify-content: center;
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
                    <Route path="/corporation" component={WorkSpacesFullPage}></Route>
                </Content>
            </Wrapper>
        </Router>
        </Provider>
    );
};

export default MainPage;
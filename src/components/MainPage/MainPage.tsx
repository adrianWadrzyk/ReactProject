import {BrowserRouter as Router, Route } from 'react-router-dom'; 
import styled from 'styled-components';
import TopBar from '../TopBar/TopBar';
import LeftNav from '../LeftNav/LeftNav';
import ContentWrapper from '../Content/ContentWrapper';
import Entities from '../Entities/Entities';
import WorkSpacesFullPage from '../WorkSpacesFullPage/WorkSpacesFullPage'
import {Colors} from '../../styledHelpers/colorsUtils';
import Profile from '../Profile/Profile';
import Message from '../Mockup/PageNotFound'; 
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
        <Router>
            <Wrapper>
                <TopBar />
                <Content>
                    <LeftNav />
                    <Route exact path="/" component={ContentWrapper} />
                    <Route path="/entities" component={Entities} />
                    <Route path="/corporation" component={WorkSpacesFullPage} />    
                    <Route path="/profile" component={Profile} />
                    <Route path="/moc" component={Message} />
                </Content>
            </Wrapper>
        </Router>
    );
};

export default MainPage;
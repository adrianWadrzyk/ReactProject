import styled from 'styled-components';
import LatestPublications from './LatestPublications';

const Wrapper = styled.div``;

const ContentWrapper = styled.div`
    height: 40vh;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
`

const Content = () => { 
    return(
        <Wrapper>
            <ContentWrapper>
                <LatestPublications></LatestPublications>
            </ContentWrapper>
            <ContentWrapper>sdsd</ContentWrapper>
        </Wrapper>
        )
}
export default Content;
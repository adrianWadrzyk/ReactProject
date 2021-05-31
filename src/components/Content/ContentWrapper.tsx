import styled from 'styled-components';
import LatestPublications from './LatestPublications';
import ResumeYouWork from './Resume you work';
const Wrapper = styled.div``;

const ContentWrapper = styled.div`
    height: 40vh;
    width: 100%;
    margin: 0 auto;
`

const Content = () => { 
    return(
        <Wrapper>
            <ContentWrapper>
                <LatestPublications></LatestPublications>
            </ContentWrapper>
            <ContentWrapper>
                <ResumeYouWork></ResumeYouWork>
            </ContentWrapper>
        </Wrapper>
        )
}
export default Content;
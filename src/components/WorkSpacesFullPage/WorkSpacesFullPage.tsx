import React from 'react';
import styled from 'styled-components';

import CorporateHodlings from './CorporateHodlings';
import CorporateWorking from './CorporateWorking';
import NavbarWorkspaces from './NavbarWorkspaces';
import ResumeYouWork from '../Content//Resume you work';

const MainWrapper = styled.section`
`;


class WorkSpacesFullPage extends React.Component { 
    render() { 
        return (
            <MainWrapper>
                <CorporateHodlings></CorporateHodlings>
                <CorporateWorking></CorporateWorking>
                <NavbarWorkspaces></NavbarWorkspaces>
                <ResumeYouWork></ResumeYouWork>
            </MainWrapper>
        )
    }
}

export default WorkSpacesFullPage;
import React from 'react';
import styled from 'styled-components';

import CorporateHodlings from './CorporateHodlings';
import CorporateWorking from './CorporateWorking';

const MainWrapper = styled.section`
`;


class WorkSpacesFullPage extends React.Component { 
    render() { 
        return (
            <MainWrapper>
                <CorporateHodlings></CorporateHodlings>
                <CorporateWorking></CorporateWorking>
            </MainWrapper>
        )
    }
}

export default WorkSpacesFullPage;
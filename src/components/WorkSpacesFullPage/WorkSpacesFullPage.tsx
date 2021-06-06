import React from 'react';
import styled from 'styled-components';

import CorporateHodlings from './CorporateHodlings';

const MainWrapper = styled.section`
`;


class WorkSpacesFullPage extends React.Component { 
    render() { 
        return (
            <MainWrapper>
                <CorporateHodlings></CorporateHodlings>
            </MainWrapper>
        )
    }
}

export default WorkSpacesFullPage;
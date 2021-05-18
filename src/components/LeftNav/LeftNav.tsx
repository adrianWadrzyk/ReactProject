import styled from 'styled-components';

import Profile from './Profile';
import ProfileMenu from './ProfileMenu';

const Wrapper = styled.div` 
    width: 250px;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
`
const LeftNav = () => { 
    return(
        <Wrapper>
            <Profile></Profile>
            <ProfileMenu></ProfileMenu>
        </Wrapper>
    )
}

export default LeftNav;
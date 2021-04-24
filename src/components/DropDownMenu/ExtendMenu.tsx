import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';

import Option from './MenuOption'
import Filter  from './Filter';


const Wrapper = styled.div`
    position: relative;
    display: inline-block;
    width: 80%;
    height: 31px;
`;

const ShowMenuButton = styled.button`
    width: 100%;
    border: 1px solid black;
    height: 100%;
    background: none;
`;

const MenuWrapper = styled.div`
    position: absolute;
    width: 100%;
`;

const ExtendMenu = () => { 
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
    return (
        <Wrapper ref={wrapperRef}>
           <ShowMenuButton onClick={toggleDropdown}>
               Show menu
           </ShowMenuButton>

           {dropdownOpen &&
             <MenuWrapper>
                 <Filter></Filter>
                 <Option></Option>
            </MenuWrapper>
             }
        </Wrapper>   
        )
}


export default ExtendMenu;
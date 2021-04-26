import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';

import Option from './MenuOption'


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

const FilterInput = styled.input`
    padding-left: 20px;
    width: 80%;
    height: 30px;
    border: 1px solid black;
    display: flex;
    color: grey;
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
                 <FilterInput value="Filter..."></FilterInput>
                 <Option></Option>
            </MenuWrapper>
             }
        </Wrapper>   
        )
}


export default ExtendMenu;
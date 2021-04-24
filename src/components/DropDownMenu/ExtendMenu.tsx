import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';

import Option from './MenuOption'
import Filter  from './Filter';


const Wrapper = styled.div`
    position: relative;
    display: inline-block;
    width: 50%;
    height: 31px;
`;

const ShowMenu = styled.div`
    width: 100%;
    border: none;
    height: 100%;
    background: none;
    display: flex;    
    justify-content: space-between;
    align-items: center;
`;

const MenuWrapper = styled.div`
    position: absolute;
    width: 100%;
`;

const Icon = styled.img`
    width: 5px;
    height: 5px;
`;


const ExtendMenu = () => { 
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
    return (
        <Wrapper ref={wrapperRef}>
           <ShowMenu onClick={toggleDropdown} >
               Show menu
               <Icon src="./media/arrow-down.png" alt="arrow-down"/>
           </ShowMenu>
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
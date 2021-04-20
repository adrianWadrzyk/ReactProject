import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';

const Wrapper = styled.div`
    background-color: black;
`
const ShowMenuButton = styled.button``;

const MenuWrapper = styled.div``;

const MenuOption = styled.button``

const ExtendMenu= () => { 
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
    return (
        <Wrapper ref={wrapperRef}>
           <ShowMenuButton onClick={toggleDropdown}>
               Show menu
           </ShowMenuButton>

           {dropdownOpen &&
             <MenuWrapper>
                        <MenuOption> Item 1</MenuOption>
                        <MenuOption> Item 2</MenuOption>
                        <MenuOption> Item 3</MenuOption>
            </MenuWrapper>
             }
        </Wrapper>   
        )
}


export default ExtendMenu;
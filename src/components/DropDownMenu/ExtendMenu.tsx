import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';

import Option from './MenuOption'
import { ChangeEvent, useState } from 'react';


const Wrapper = styled.div`
    position: relative;
    display: inline-block;
    min-width: 70%;
    height: 31px;
`;

const ShowMenuButton = styled.button`
    width: 100%;
    border: none;
    height: 100%;
    background: none;
    display: flex;    
    justify-content: space-between;
    padding: 0 5px;
    align-items: center;
`;

const MenuWrapper = styled.div`
    position: absolute;
    width: 100%;
`;

const FilterInput = styled.input`
    padding-left: 20px;
    width: 100%;
    height: 30px;
    border: 1px solid black;
    display: flex;
`;

const Icon = styled.img`
    width: 5px;
    height: 5px;
`;

const ExtendMenu = () => { 
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    const [inputText, setInputText] = useState<string>('');
    const inputHandler = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputText(text);
    }

    return (
        <Wrapper ref={wrapperRef}>
           <ShowMenuButton onClick={toggleDropdown}>
               Show menu
               <Icon src="./media/arrow-down.png" alt="arrow-down"/>
           </ShowMenuButton>

           {dropdownOpen &&
             <MenuWrapper>
                 <FilterInput value={inputText} onChange={inputHandler}></FilterInput>
                 <Option inputText={inputText}></Option>
            </MenuWrapper>
             }
        </Wrapper>   
        )
}


export default ExtendMenu;
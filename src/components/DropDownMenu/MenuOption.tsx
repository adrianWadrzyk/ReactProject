import styled from 'styled-components';


const Wrapper = styled.div`
    width: 100%;
`;

const Option = styled.button`
    width: inherit;
    position:relative;
    display: block;
    height: 40px;
    border: none;
    border-bottom: 1px solid black;
`;

const MenuOption = () => { 
    return (
        <Wrapper>
                        <Option> Item 1</Option>
                        <Option> Item 2</Option>
                        <Option> Item 3</Option>
        </Wrapper>
        )
}


export default MenuOption;
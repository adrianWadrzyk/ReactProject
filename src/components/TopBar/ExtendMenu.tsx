import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: black;
`
const MenuOptions = styled.select``;

const ExtendMenu = () => { 
    return (
        <Wrapper>
            <MenuOptions>
                <option value="home">Home</option>
                <option value="home">Home</option>
                <option value="home">Home</option>
                <option value="home">Home</option>
                <option value="home">Home</option>
            </MenuOptions>
        </Wrapper>   
        )
}


export default ExtendMenu;
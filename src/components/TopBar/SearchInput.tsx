import styled from 'styled-components';

const CustomInput = styled.input`
    width: 100%;
    border: 0;
    text-align: center;
    padding: 5px 0;

    &:focus { 
        outline: none;
    }
`

const SearchInput = () => { 
    return (
        <CustomInput type="text" value="Jakiś tam tekst" />
    )
}

export default SearchInput;
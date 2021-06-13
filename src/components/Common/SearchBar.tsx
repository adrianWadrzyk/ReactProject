import styled from "styled-components";

const CustomInput = styled.input`
    height: 25px;
    border: none;
    padding: 0 10px;
    
    &:focus { 
        outline: none;
    }
`;

const SearchIcon = styled.img`
    padding-right: 15px;
`;

const Wrapper = styled.div`
    background-color: white;
    display: flex;
    align-items: center;
    margin: 0 10px;
`;

const SearchBar = (props : any) => { 
    return (
        <Wrapper>
        <CustomInput  type="text" onChange={props.onChange} value={props.value}/>
        <SearchIcon src='./media/search.png' />
        </Wrapper>
    )
}

export default SearchBar;
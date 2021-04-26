import styled from 'styled-components';

const Wrapper  = styled.div`
    width: 100%;
    background-color: red;
    display: flex;
    justify-content: center;
    padding: 5px 0;
`;

const FilterInput = styled.input`
    padding-left: 20px;
    width: 80%;
    height: 30px;
    border: 1px solid black;
    display: flex;
    color: grey;
`;

const Filter = () => { 
    return(
     <Wrapper>
         <FilterInput value="Filter..."></FilterInput>
     </Wrapper>
    )
}


export default Filter;
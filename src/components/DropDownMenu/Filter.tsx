import styled from 'styled-components';

const Wrapper  = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    padding: 5px 0;
`;

const FilterInput = styled.input`
    padding-left: 20px;
    width: 80%;
    height: 25px;
    border: 1px solid black;
    display: flex;
    color: grey;
    font-size: 12px;
`;

const Filter = () => { 
    return(
     <Wrapper>
         <FilterInput type="text"></FilterInput>
     </Wrapper>
    )
}


export default Filter;
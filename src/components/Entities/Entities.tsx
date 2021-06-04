import styled from 'styled-components';
import EnitiesTale from './EntitiesTale';


const Wrapper = styled.div`
    background-color: #dfd5d5;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
`;

const Entities = () => { 
    return(
        <Wrapper>
            <EnitiesTale></EnitiesTale>
        </Wrapper>
    )
}

export default Entities;



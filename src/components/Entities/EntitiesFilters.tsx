import styled from 'styled-components';

const Wrapper = styled.div`
    border-top: 1px solid black;
`;

const Line = styled.div`
    display: flex;
    align-items: center;
`;

const Cross = styled.p`
margin: 10px;`;

const CustomInput = styled.input`
padding: 3px;
background-color: gray;
border: none;

    &::placeholder{ 
        color: white;
    }
`;

const CustomSelect = styled.select`
background-color: none;
border: 0;
padding: 3px;
margin: 8px;`;

const FilterName = styled.p`
margin: 10px;`;

const EntitiesFilters = () => { 
    return (
        <Wrapper>
            <Line>
                <Cross>X</Cross>
                <FilterName>Where</FilterName>
                <CustomSelect>
                    <option>
                        Comapany
                    </option>
                    <option>
                        Lorem ipsum
                    </option>
                </CustomSelect>
                <CustomInput type="text" placeholder="Type"></CustomInput>
                <CustomSelect>
                    <option>
                        Contains
                    </option>
                    <option>
                        Lorem ipsum
                    </option>
                </CustomSelect>
            </Line>    
            <Line>
                <Cross>X</Cross>
                <FilterName>Where</FilterName>
                <CustomSelect>
                    <option>
                        Status
                    </option>
                    <option>
                        Lorem ipsum
                    </option>
                </CustomSelect>
                <CustomSelect>
                    <option>
                        Is
                    </option>
                    <option>
                        Lorem ipsum
                    </option>
                </CustomSelect>
                <CustomInput type="text" placeholder="Type"></CustomInput>
                <CustomSelect>
                    <option>
                        In
                    </option>
                    <option>
                        Lorem ipsum
                    </option>
                </CustomSelect>
                <CustomInput type="text" placeholder="Entity"></CustomInput>
            </Line>  
            <Line>
                <Cross>X</Cross>
                <FilterName>Where</FilterName>
                <CustomSelect>
                    <option>
                        Status
                    </option>
                    <option>
                        Lorem ipsum
                    </option>
                </CustomSelect>
                <CustomSelect>
                    <option>
                        Ends before
                    </option>
                    <option>
                        Lorem ipsum
                    </option>
                </CustomSelect>
                <CustomInput type="text" placeholder="Date"></CustomInput>
                <CustomSelect>
                    <option>
                        In
                    </option>
                    <option>
                        Lorem ipsum
                    </option>
                </CustomSelect>
                <CustomInput type="text" placeholder="Entity"></CustomInput>
            </Line>  
            <Line>
                <Cross>X</Cross>
                <FilterName>Add filter</FilterName>
                <CustomSelect>
                    <option>
                        choose property
                    </option>
                    <option>
                        Lorem ipsum
                    </option>
                </CustomSelect>
            </Line>
         </Wrapper>          
    )
}


export default EntitiesFilters;
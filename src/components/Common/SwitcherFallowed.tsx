import styled from "styled-components";

const CustomSelect = styled.select` 
    height: 25px;
    border: none;
    background-color: none;
`;

const SwitcherFallowed = (props : any) => { 
    return (
        <CustomSelect onChange={props.onChange} value={props.value}>
            <option value="All">All</option>
            <option value="Fallowed">Fallowed</option>
        </CustomSelect>
    )
}

export default SwitcherFallowed;
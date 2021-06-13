import styled from 'styled-components';



const Wrapper = styled.div`
    display: flex;
    width: 60%;
    justify-content: space-between;
    margin-left: 10px;
    background-color: white;
    padding: 0 10px;
`;

const Option = styled.p`
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const NavbarWorkspaces = () => { 
    return (
        <Wrapper>
            <Option>ALL</Option>
            <Option>SAS</Option>
            <Option>SARL</Option>
            <Option>Secondary business</Option>
            <Option>Communities</Option>
            <Option>POA</Option>
            <Option>Survey</Option>
            <Option>...</Option>
        </Wrapper>
    )
}


export default NavbarWorkspaces;
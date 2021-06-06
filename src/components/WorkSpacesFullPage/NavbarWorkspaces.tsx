import styled from 'styled-components';



const Wrapper = styled.div`
    display: flex;
    width: 70%;
    margin: 0 auto;
    justify-content: space-between;
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
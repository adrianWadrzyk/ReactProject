import styled from 'styled-components';


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;

const OptionWrapper = styled.div`
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
`;

const Option = styled.div`
    display: inherit;
    width: 90%;
    align-items: center;
`;

const Icon = styled.img`
   height: 20px;
   width: 20px;
   margin-right: 20px;
`;

const Title = styled.h3`
    min-width: 60%;
`

const ProfileMenu = () => { 
    return (
        <Wrapper> 
            <OptionWrapper>
                <Option>
                    <Icon alt="network" src="./media/network.png"></Icon>
                    <Title> Your Network</Title>
                    <Icon alt="user-plus" src="./media/user-plus.png"></Icon>
                </Option>
            </OptionWrapper>
            <OptionWrapper>
                <Option>
                    <Icon alt="icon" src="./media/publications.png"></Icon>
                    <Title> Your Network</Title>
                    <Icon alt="plus" src="./media/plus.png"></Icon>
                </Option>
            </OptionWrapper>
            <OptionWrapper>
                <Option>
                    <Icon alt="publications" src="./media/publications.png"></Icon>
                    <Title> Publications</Title>
                </Option>
            </OptionWrapper>
            <OptionWrapper>
                <Option>
                    <Icon alt="ecosystem" src="./media/ecosystem.png"></Icon>
                    <Title> Ecosystem</Title>
                </Option>
            </OptionWrapper>
            <OptionWrapper>
                <Option>
                    <Icon alt="entities" src="./media/entities.png"></Icon>
                    <Title> Entities</Title>
                </Option>
            </OptionWrapper>
        </Wrapper>        
    );
}

export default ProfileMenu;
import styled from 'styled-components';


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const OptionWrapper = styled.div`
    height: 40px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Option = styled.div`
    display: inherit;
    width: 90%;
`;

const Icon = styled.img`
   height: 20px;
   width: 20px;
   padding: 0px 15px;
`;

const ProfileMenu = () => { 
    return (
        <Wrapper> 
            <OptionWrapper>
                <Option>
                    <Icon alt="network" src="./media/network.png"></Icon>
                    <h3> Your Network</h3>
                    <Icon alt="user-plus" src="./media/user-plus.png"></Icon>
                </Option>
            </OptionWrapper>
            <OptionWrapper>
                <Option>
                    <Icon alt="icon" src="./media/publications.png"></Icon>
                    <h3> Your Network</h3>
                    <Icon alt="plus" src="./media/plus.png"></Icon>
                </Option>
            </OptionWrapper>
            <OptionWrapper>
                <Option>
                    <Icon alt="publications" src="./media/publications.png"></Icon>
                    <h3> Publications</h3>
                </Option>
            </OptionWrapper>
            <OptionWrapper>
                <Option>
                    <Icon alt="ecosystem" src="./media/ecosystem.png"></Icon>
                    <h3> Ecosystem</h3>
                </Option>
            </OptionWrapper>
            <OptionWrapper>
                <Option>
                    <Icon alt="entities" src="./media/entities.png"></Icon>
                    <h3> Entities</h3>
                </Option>
            </OptionWrapper>
        </Wrapper>        
    );
}

export default ProfileMenu;
import styled from 'styled-components';


const Wrapper = styled.div`
    width: 100%;
`;

const Option = styled.button`
    width: inherit;
    position:relative;
    display: block;
    height: 30px;
    border: none;
    display: flex;
    align-items: center;
`;

const Group = styled.div`
    width: inherit;
`;

const GroupName = styled.h4`
    background-color: white;
    padding: 5px 10px;
    font-size: 12px;
    color: grey;
`
const OptionName = styled.p``;

const Icon = styled.img`
    padding: 0 10px;
`;

const MenuOption = () => { 
    return (
        <Wrapper>
            <Group>
                <GroupName>Platform</GroupName>
                        <Option>
                            <Icon src="./media/house.png"></Icon> 
                            <OptionName>Item 1</OptionName>
                        </Option>
                        <Option>
                            <Icon src="./media/house.png"></Icon> 
                            <OptionName>Item 1</OptionName>
                        </Option>
                        <Option>
                            <Icon src="./media/house.png"></Icon> 
                            <OptionName>Item 1</OptionName>
                        </Option>
                </Group>
                <Group>
                    <GroupName>Workspaces</GroupName>
                        <Option>
                            <Icon src="./media/house.png"></Icon> 
                            <OptionName>Item 1</OptionName>
                        </Option>
                        <Option>
                            <Icon src="./media/house.png"></Icon> 
                            <OptionName>Item 1</OptionName>
                        </Option>
                        <Option>
                            <Icon src="./media/house.png"></Icon> 
                            <OptionName>Item 1</OptionName>
                        </Option>
                </Group>
        </Wrapper>
        )
}


export default MenuOption;
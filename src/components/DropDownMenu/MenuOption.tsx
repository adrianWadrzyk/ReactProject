import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;

const Option = styled.button`
  width: inherit;
  position: relative;
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
`;
const OptionName = styled.p``;

const Icon = styled.img`
  padding: 0 10px;
`;

const MenuOption = (props: any) => {
  return (
    <Wrapper>
      <Group>
        <GroupName>Platform</GroupName>
        {"Home".toLowerCase().includes(props.inputText.toLowerCase()) && (
          <Option>
            <Icon src="./media/house.png"></Icon>
            <OptionName>Home</OptionName>
          </Option>
        )}
        {"Publication"
          .toLowerCase()
          .includes(props.inputText.toLowerCase()) && (
          <Option>
            <Icon src="./media/publications.png"></Icon>
            <OptionName>Publication</OptionName>
          </Option>
        )}
        {"People".toLowerCase().includes(props.inputText.toLowerCase()) && (
          <Option>
            <Icon src="./media/people.png"></Icon>
            <OptionName>People</OptionName>
          </Option>
        )}
        {"Entities".toLowerCase().includes(props.inputText.toLowerCase()) && (
          <Option>
            <Icon src="./media/entities.png"></Icon>
            <OptionName>Entities</OptionName>
          </Option>
        )}
        {"Administration"
          .toLowerCase()
          .includes(props.inputText.toLowerCase()) && (
          <Option>
            <Icon src="./media/people.png"></Icon>
            <OptionName>Administration</OptionName>
          </Option>
        )}
      </Group>
      <Group>
        <GroupName>Workspaces</GroupName>
        {"Client contract"
          .toLowerCase()
          .includes(props.inputText.toLowerCase()) && (
          <Option>
            <Icon src="./media/people.png"></Icon>
            <OptionName>Client contract</OptionName>
          </Option>
        )}
        {"Supplier contract"
          .toLowerCase()
          .includes(props.inputText.toLowerCase()) && (
          <Option>
            <Icon src="./media/people.png"></Icon>
            <OptionName>Suplier contract</OptionName>
          </Option>
        )}
        {"Corporate"
          .toLowerCase()
          .includes(props.inputText.toLowerCase()) && (
          <Option>
            <Icon src="./media/people.png"></Icon>
            <OptionName>Corporate</OptionName>
          </Option>
        )}
        {"Group Norms"
          .toLowerCase()
          .includes(props.inputText.toLowerCase()) && (
          <Option>
            <Icon src="./media/people.png"></Icon>
            <OptionName>Group Norms</OptionName>
          </Option>
        )}
        {"Real estate contracts"
          .toLowerCase()
          .includes(props.inputText.toLowerCase()) && (
          <Option>
            <Icon src="./media/people.png"></Icon>
            <OptionName>Real estate contracts</OptionName>
          </Option>
        )}
      </Group>
    </Wrapper>
  );
};

export default MenuOption;

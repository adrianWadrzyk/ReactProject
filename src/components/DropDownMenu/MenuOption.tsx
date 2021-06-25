import styled from "styled-components";
import StyledLink from "../Common/Link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhoto } from "../../actions/photosAction";
import { getUser } from "../../actions/userActions";
import { IState } from "../../reducers";
import { IPhotoReducer } from "../../reducers/photosReducers";
import { IUserReducer } from "../../reducers/userReducers";
import { loggedUserID } from "../../utils/loggedUser";
const Wrapper = styled.div`
  width: 100%;
  border: 1px solid black;
  background-color: white;

`;

const Option = styled.button`
  width: inherit;
  position: relative;
  display: block;
  height: 30px;
  border: none;
  display: flex;
  align-items: center;
  margin: 3px 0;
`;

const Group = styled.div`
  width: inherit;
`;

const GroupName = styled.h4`
  padding: 5px 10px;
  font-size: 12px;
  color: grey;
`;

const OptionName = styled.p`

  StyledLink { 
    text-decoration: none;
  }
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin: 10px;
`;

const InnerWrapper = styled.div`
    p { 
      text-align: left;
      margin: 3px 0;
    }
`;

const LogOut = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  ${Icon} { 
    width: 15px;
    height: 15px;
    margin: 0 10px 0 0;
  }
`;

type GetUser = ReturnType<typeof getUser>
type GetPhoto = ReturnType<typeof getPhoto>

const MenuOption = (props: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch<GetUser>(getUser(loggedUserID.toString()));
     }, []);

  useEffect(() => {
      dispatch<GetPhoto>(getPhoto(loggedUserID));
    }, []);

  const rec = useSelector<IState, IUserReducer> (state => ({
      ...state.users
  }));
  const photos = useSelector<IState,IPhotoReducer> (state =>({
      ...state.photos
  }))

  const user = rec.user;
  const photo = photos.photo;

  
  return (
    <Wrapper>
      <Group>
        <GroupName>Platform</GroupName>
        {"Home".toLowerCase().includes(props.inputText.toLowerCase()) && (
          <Option>
            <Icon src="./media/house.png"/>
            <OptionName><StyledLink to="/">Home</StyledLink></OptionName>
          </Option>
        )}
        {"Publication"
          .toLowerCase()
          .includes(props.inputText.toLowerCase()) && (
          <Option>
            <Icon src="./media/publications.png"/>
            <OptionName><StyledLink to="/corporation">Publication</StyledLink></OptionName>
          </Option>
        )}
        {"People".toLowerCase().includes(props.inputText.toLowerCase()) && (
          <Option>
            <Icon src="./media/people.png"/>
            <OptionName><StyledLink to="/profile">Profile</StyledLink></OptionName>
          </Option>
        )}
        {"Entities".toLowerCase().includes(props.inputText.toLowerCase()) && (
          <Option>
            <Icon src="./media/entities.png"/>
            <OptionName><StyledLink to="/entities">Entities</StyledLink></OptionName>
          </Option>
        )}
        {"Administration"
          .toLowerCase()
          .includes(props.inputText.toLowerCase()) && (
          <Option>
            <Icon src="./media/people.png"/>
            <OptionName><StyledLink to="/moc">Administration</StyledLink></OptionName>
          </Option>
        )}
      </Group>
      <Group>
        <GroupName>Workspaces</GroupName>
        {"Client contract"
          .toLowerCase()
          .includes(props.inputText.toLowerCase()) && (
          <Option>
            <Icon src="./media/people.png"/>
            <OptionName><StyledLink to="/moc">Client contrac</StyledLink></OptionName>
          </Option>
        )}
        {"Supplier contract"
          .toLowerCase()
          .includes(props.inputText.toLowerCase()) && (
          <Option>
            <Icon src="./media/people.png"/>
            <OptionName><StyledLink to="/moc">Suplier contract</StyledLink></OptionName>
          </Option>
        )}
        {"Corporate"
          .toLowerCase()
          .includes(props.inputText.toLowerCase()) && (
          <Option>
            <Icon src="./media/people.png"/>
            <OptionName><StyledLink to="/moc">Corporate</StyledLink></OptionName>
          </Option>
        )}
        {"Group Norms"
          .toLowerCase()
          .includes(props.inputText.toLowerCase()) && (
          <Option>
            <Icon src="./media/people.png"/>
            <OptionName><StyledLink to="/moc">Group Norms</StyledLink></OptionName>
          </Option>
        )}
        {"Real estate contracts"
          .toLowerCase()
          .includes(props.inputText.toLowerCase()) && (
          <Option>
            <Icon src="./media/people.png"/>
            <OptionName><StyledLink to="/moc">Real estate co</StyledLink>tracts</OptionName>
          </Option>
        )}
      </Group>
      <Group>
        <GroupName>Account</GroupName>
        <Option>
          <Icon src={`${photo.url}`}/>
          <InnerWrapper>
            <p>{user.name}</p>
            <p><StyledLink to="/profile">See profile</StyledLink></p>
          </InnerWrapper>
        </Option>

        {"Privacy"
          .toLowerCase()
          .includes(props.inputText.toLowerCase()) && (
          <Option>
            <Icon src="./media/people.png"/>
            <OptionName><StyledLink to="moc">Privacy</StyledLink></OptionName>
          </Option>
        )}
         {"Setting"
          .toLowerCase()
          .includes(props.inputText.toLowerCase()) && (
          <Option>
            <Icon src="./media/people.png"/>
            <OptionName><StyledLink to="moc">Settings</StyledLink></OptionName>
          </Option>
        )}
           {"Logout"
          .toLowerCase()
          .includes(props.inputText.toLowerCase()) && (
          <LogOut>
            <Icon src="./media/people.png"/>
            <OptionName><StyledLink to="/moc">Log out</StyledLink></OptionName>
          </LogOut>
        )}
        
      </Group>
    </Wrapper>
  );
};

export default MenuOption;

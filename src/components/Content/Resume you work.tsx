import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from 'react-js-pagination';

import { IState } from '../../reducers';
import { IWorkspaceReducer } from '../../reducers/workSpaceReducers';
import { IUserReducer } from '../../reducers/userReducers';

import styled from "styled-components"; 
import { getPosts } from "../../actions/workSpaceActions";
import { getUser, getUsers } from '../../actions/userActions';
import {loggedUserID}  from '../../utils/loggedUser'

const Wrapper = styled.div``;

const Header = styled.div`
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
`;

const Filters = styled.div``;

const SectionTitle = styled.h2``;


const WorkPanel = styled.div`
  border-bottom: 2px solid black;
  padding: 10px;
  margin-top: 5px;
  background-color: white;
`;

const PanelDescription = styled.div`
  margin-top: 10px;
`;

const Title = styled.h3``;

const Footer = styled.footer`
  display: flex;
  margin-top: 10px;
`;

const FooterName = styled.p``;

const FooterContractType = styled.p`
  padding: 0 20px;
`;

const PaginationConteiner = styled.div`
  margin: 10px 0;

  & ul{ 
    display: flex;
    text-align: center;
    justify-content: center;
  }

  & li {
    padding: 0 10px;
  }

  & a { 
    text-decoration: none;
    color: black;
  }
`

const CustomSelect = styled.select``;


const Date = styled.p``;

type GetPosts = ReturnType<typeof getPosts>
type GetUsers = ReturnType<typeof getUsers>

const ResumeYouWork = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<GetPosts>(getPosts())
  }, []);

 
  const posts = useSelector<IState, IWorkspaceReducer> (state => ({
      ...state.posts
  }))

  const users = useSelector<IState, IUserReducer> (state => ({
      ...state.users
  }))

  const [inputText, setInputText] = useState<string>('');

  const inputHandler = (e : ChangeEvent<HTMLInputElement>) => { 
      const text =  e.target.value;
      setInputText(text);
  }

  let data = posts.postList.filter(e => { 
    return e.name.includes(inputText);
  })

 
  const [followed, setFollowed] = useState<string>("All");

  if(followed != "All") {
    data = data.filter(e => { return e.postId == loggedUserID; })  
  }
  console.log(posts.postList);

  const changeFollowed = (e : any) => { 
      const text = e.target.value;
      setFollowed(text);
  }


  const usersList = users.userList;
  const panelPerPage = 10;
  const [activePage, setCurrentPage] = useState(1);

    // Logic for displaying current todos
    const indexOfLastPost  = activePage * panelPerPage;
    const indexOfFirsPost = indexOfLastPost - panelPerPage;
    const currentPosts = data.slice( indexOfFirsPost, indexOfLastPost );

    const handlePageChange = ( pageNumber : any ) => {
      setCurrentPage( pageNumber )
   };

  console.log(data);
  let renderWorkPanels = currentPosts.map(ele => (
    <WorkPanel>
      <Title>
        {ele.name}
      </Title>
      <PanelDescription>
        {ele.body}
      </PanelDescription>
      <Footer>
        <FooterName>{usersList[1].company.name}</FooterName>
        <FooterContractType>Corporate</FooterContractType>
        <Date> Updated 3 days ago {usersList[(Math.floor(Math.random() * 9 ))].name}</Date>
      </Footer>
    </WorkPanel>
  ))
  
  
  return (
    <Wrapper>
      <Header>
      <SectionTitle>
        Resume you work
      </SectionTitle>
      <Filters>
        <input type="text" value={inputText} onChange={inputHandler}></input>   
        <CustomSelect onChange={changeFollowed} value={followed}>
                        <option value="All">All</option>
                        <option value="Fallowed">Fallowed</option>
                    </CustomSelect>
      </Filters>
       </Header>
       {renderWorkPanels}

      <PaginationConteiner>
            <Pagination
               activePage={ activePage }
               itemsCountPerPage={ 10 }
               totalItemsCount={ data.length }
               pageRangeDisplayed={ 3 }
               onChange={ handlePageChange }
            />
      </PaginationConteiner>
      
    </Wrapper>
  );
};
export default ResumeYouWork;

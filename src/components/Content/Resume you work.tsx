import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from 'react-js-pagination';

import { IState } from '../../reducers';
import { IWorkspaceReducer } from '../../reducers/workSpaceReducers';
import { IUserReducer } from '../../reducers/userReducers';

import styled from "styled-components"; 
import { getPosts } from "../../actions/workSpaceActions";
import { getUser, getUsers } from '../../actions/userActions';


const Wrapper = styled.div``;

const Header = styled.h2`
    padding: 10px 0;
`;

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

  const data = posts.postList;
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

  const renderWorkPanels = currentPosts.map(ele => (
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
        <Date> Updated 3 days ago {usersList[(Math.floor(Math.random() * 10 ))].name}</Date>
      </Footer>
    </WorkPanel>
  ))
  
  return (
    <Wrapper>
      <Header>Resume you work</Header>
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

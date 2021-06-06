import styled from 'styled-components';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PublicationPhoto from './PublicationPhoto';

import { getUser, getUsers } from '../../actions/userActions';
import { getPublications } from '../../actions/latestPublicationsActions';

import { IUserReducer } from '../../reducers/userReducers';
import { ILatestPublicationReducer } from '../../reducers/latestPublicationsReducers';

import { IState } from '../../reducers';


const Conteiner = styled.div`
    font-size: 0.8em;
    display: flex;
    background-color: wheat;
    height: 40vh;
`;

const authorNewest = "authorNewest";

const NewestPublication = styled.div`
    width:40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 10px 20px;
    & .${authorNewest} {
        padding-top: 20px;
    }
    border-right: 1px solid black;
`;

const RightConteinerPublications = styled.div`
    width: 60%;
    padding: 10px 10px;
    display: flex;
    flex-direction:  column;
    justify-content: space-between;
`;

const Header = styled.header`
    color: black;
`;

const Publication = styled.div`
    color: black;
    display: grid;
    grid-template-areas: "photo description" 
                         "photo author";
    grid-template-columns: 20% 70%;
    align-items: center;
    justify-content: center;
    height: 25%;
`;

const PublicationDescription = styled.p`
    color: black;
    line-height: 1.2em;
    grid-area: description;
`;

const PublicationFooter = styled.footer`
    color: black;
`;

const Author = styled.div`
    grid: author;
`;

type GetUsers = ReturnType<typeof getUsers>
type GetPublications = ReturnType<typeof getPublications>

const LatestPublications = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetUsers>(getUsers())
      }, []);
    
      const users = useSelector<IState, IUserReducer> (state => ({
        ...state.users
    }))

    useEffect(() => {
        dispatch<GetPublications>(getPublications())
    }, []);

    const publications = useSelector<IState, ILatestPublicationReducer> (state => ({
        ...state.latesPublications
    }))

    const temp = publications.publicationsList[0];
    const user = users.userList;
    
    return(
      <Conteiner>
          <NewestPublication>
            <PublicationDescription></PublicationDescription>
            <Author className={authorNewest}> January 25 </Author>
          </NewestPublication>
          <RightConteinerPublications>
            <Header>
                Latest publications
            </Header>
            
             <Publication>
                 <PublicationPhoto id={1}></PublicationPhoto>
                 <PublicationDescription></PublicationDescription>
                 <Author> January 25 Janik</Author>
             </Publication>
   
          </RightConteinerPublications>
      </Conteiner>
    )
}

export default LatestPublications;
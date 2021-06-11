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
    height:100%;
    font-size: 0.8em;
    display: flex;
    background-color: #eea111;
`;

const authorNewest = "authorNewest";

const NewestPublication = styled.div`
    width:40%;
    height:inherit;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 10px 20px;
    & .${authorNewest} {
        padding-top: 20px;
    }
`;

const RightConteinerPublications = styled.div`
    width: 60%;
    padding: 10px 10px;
    
`;

const Header = styled.header`
    color: black;
    font-size: 1.2em;
`;

const PublicationsConteiner = styled.div`
    margin-top: 10px;
    background-color: yellow;
    display: flex;
    flex-direction: column;
`;

const Publication = styled.div`
    color: black;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 10px 0;
`;

const InnerWrapper = styled.div`
    padding: 10px;
`;

const PublicationDescription = styled.p`
    color: black;
    line-height: 1.2em;
`;

const Author = styled.div`
    margin-top: 20px;
`;

const SeeMore = styled.p`
    font-size: 1.1em;
    margin-top: 5px;
    text-align: right;
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

            <PublicationsConteiner>
             <Publication>
                 <PublicationPhoto id={1}></PublicationPhoto>
                 <InnerWrapper>
                    <PublicationDescription>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis sint eveniet dolor nobis 
                        modi nemo minus iusto maiores quas eligendi numquam voluptate iste harum
                    </PublicationDescription>
                    <Author> January 25 Janik</Author>
                 </InnerWrapper>
             </Publication>
             <Publication>
                 <PublicationPhoto id={1}></PublicationPhoto>
                 <InnerWrapper>
                    <PublicationDescription>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis sint eveniet dolor nobis 
                        modi nemo minus iusto maiores quas eligendi numquam voluptate iste harum
                    </PublicationDescription>
                    <Author> January 25 Janik</Author>
                 </InnerWrapper>
             </Publication>
             <Publication>
                 <PublicationPhoto id={1}></PublicationPhoto>
                 <InnerWrapper>
                    <PublicationDescription>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis sint eveniet dolor nobis 
                        modi nemo minus iusto maiores quas eligendi numquam voluptate iste harum
                    </PublicationDescription>
                    <Author> January 25 Janik</Author>
                 </InnerWrapper>
             </Publication>
     
     
            </PublicationsConteiner>
            <SeeMore>See more publications...</SeeMore>
          </RightConteinerPublications>
      </Conteiner>
    )
}

export default LatestPublications;
import styled from 'styled-components';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PublicationPhoto from './PublicationPhoto';

import { getUser, getUsers } from '../../actions/userActions';
import { getPublications } from '../../actions/latestPublicationsActions';

import { IUserReducer } from '../../reducers/userReducers';
import { ILatestPublicationReducer } from '../../reducers/latestPublicationsReducers';

import { IState } from '../../reducers';
import { Colors } from '../../styledHelpers/colorsUtils';
import { fontSize } from '../../styledHelpers/fontUtils';


const Conteiner = styled.div`
    height:100%;
    display: flex;
    border-bottom: 1px solid black;
`;

const authorNewest = "authorNewest";
const newestDecription = "newestDescription";

const NewestPublication = styled.div`
    width:40%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 10px 20px;

    & .${authorNewest} {
        font-size: ${fontSize.subTitle};
    }

    & .${newestDecription} {
        font-size: ${fontSize.mediumText};
        line-height: 1.5em;
    }

`;

const RightConteinerPublications = styled.div`
    width: 60%;
    padding: 10px 10px;
`;

const Header = styled.header`
    color: ${Colors.textBlack};
    font-size: ${fontSize.sectionTitle};
`;

const PublicationsConteiner = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
`;

const Publication = styled.div`
    color: ${Colors.textBlack};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 10px 0;
    font-size: ${fontSize.mediumText};
`;

const InnerWrapper = styled.div`
    padding: 10px;
`;

const PublicationDescription = styled.p`
    color: ${Colors.textBlack};
    line-height: 1.2em;
`;

const Author = styled.div`
    margin-top: 20px;
`;

const SeeMore = styled.p`
    font-size: ${fontSize.mediumText};
    color: ${Colors.blue};
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

    return(
      <Conteiner>
          <NewestPublication>
            <PublicationDescription className='newestDescription'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis sint eveniet dolor nobis 
                        modi nemo minus iusto maiores quas eligendi numquam voluptate iste harum
            </PublicationDescription>
            <Author className='authorNewest'> January 25 </Author>
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
                 <PublicationPhoto id={2}></PublicationPhoto>
                 <InnerWrapper>
                    <PublicationDescription>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis sint eveniet dolor nobis 
                        modi nemo minus iusto maiores quas eligendi numquam voluptate iste harum
                    </PublicationDescription>
                    <Author> January 25 Janik</Author>
                 </InnerWrapper>
             </Publication>
             <Publication>
                 <PublicationPhoto id={3}></PublicationPhoto>
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
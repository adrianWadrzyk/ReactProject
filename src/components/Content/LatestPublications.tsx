import styled from 'styled-components';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PublicationPhoto from './PublicationPhoto';

import { getUsers } from '../../actions/userActions';
import { getPublications } from '../../actions/latestPublicationsActions';
import { IUserReducer } from '../../reducers/userReducers';
import { ILatestPublicationReducer } from '../../reducers/latestPublicationsReducers';

import { IState } from '../../reducers';
import { Colors } from '../../styledHelpers/colorsUtils';
import { fontSize } from '../../styledHelpers/fontUtils';
import StyledLink from '../Common/Link';

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
    margin: 10px;
    background-image: url("https://via.placeholder.com/600/92c952");
    background-position: center;
    background-size: cover;

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
    margin-top: 5px;
    text-align: right;
`;

type GetUsers = ReturnType<typeof getUsers>
type GetPublications = ReturnType<typeof getPublications>

const LatestPublications = () => {
    const dispatch = useDispatch();

    useEffect ( () => {
        dispatch<GetUsers>(getUsers())
        dispatch<GetPublications>(getPublications())
      }, [dispatch]);
    

    const users = useSelector<IState, IUserReducer> (state => ({
        ...state.users
    }))

    const publications = useSelector<IState, ILatestPublicationReducer> (state => ({
        ...state.latesPublications
    }))

    const publicationsList = publications.publicationsList;
    const first = publicationsList[0];
    const latest = publicationsList.slice(1,4);
    const firstName = users.userList[first.userId]?.name
    
    return(
      <Conteiner>
          <NewestPublication>
            <PublicationDescription className='newestDescription'>
            {first?.body}
            </PublicationDescription>
            <Author className='authorNewest'> {firstName} January 25 </Author>
          </NewestPublication>
          <RightConteinerPublications>

            <Header>
                Latest publications
            </Header>

            <PublicationsConteiner>
            {latest.map(ele =>  (
                <Publication>
                    <PublicationPhoto id={ele.id}></PublicationPhoto>
                    <InnerWrapper>
                        <PublicationDescription>
                            {ele.body}
                        </PublicationDescription>
                        <Author> January 25 {users?.userList[ele?.userId]?.name}</Author>
                    </InnerWrapper>
                </Publication>     
            ))}
            </PublicationsConteiner>
            <SeeMore><StyledLink to="/corporation">See more publications...</StyledLink></SeeMore>
          </RightConteinerPublications>
      </Conteiner>
    )
}

export default LatestPublications;
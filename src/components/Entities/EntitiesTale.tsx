import styled from 'styled-components';

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IUserReducer } from '../../reducers/userReducers';
import { IFakeCompanyReducer } from '../../reducers/fakeCompaniesReducer';
import { IState } from '../../reducers';
import { IPhotoReducer } from '../../reducers/photosReducers';

import { getPhoto, getPhotos } from '../../actions/photosAction';
import { getFakeCompany } from '../../actions/fakeCompanyActions';

import { getUser, getUsers } from '../../actions/userActions';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
`;

const Tale = styled.div`
    width: 300px;
    height: 150px;
    display: flex;
    color: black;
    margin: 10px;
`;

const Photo = styled.img`
    width:50%;
    height:100%;
`;

const SingleTale = styled.div`
    display: flex;
`;

const Title = styled.h3`

`;

const RightConteiner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
`;

const Description = styled.p`
`;


type GetPhotos = ReturnType<typeof getPhotos>
type GetPhoto = ReturnType<typeof getPhoto>
type GetUsers = ReturnType<typeof getUsers>
type GetFakeCopmanies = ReturnType<typeof getFakeCompany>

const EntitiesTale = (props: any) => { 
    const dispatch = useDispatch();

       useEffect(() => {
        dispatch<GetFakeCopmanies>(getFakeCompany());
       }, []);



    const companies = useSelector<IState, IFakeCompanyReducer> (state => ({
        ...state.fakeCompany
    }))

    const company = companies.fakeCompanyList; 

    const filtered = company.filter( e => {
       return e.name.toLowerCase().includes(props.inputText.toLowerCase());
    })

    console.log(filtered);


    return(
        <Wrapper>
        {filtered.map((ele) => (
            <Tale>
                {ele.name.toLowerCase().includes(props.inputText.toLowerCase()) && (
                <SingleTale>
                    <Photo src={`${ele.photo_url}`}></Photo>
                <RightConteiner>
                    <Title>{ele.name}</Title>
                    <Description>Jakiś tam opis</Description>
                </RightConteiner>
                </SingleTale>
                )}
            </Tale>
            ))
        }
    </Wrapper>
    )
}

export default EntitiesTale;
import styled from 'styled-components';
import React, {FC, useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getUser, getUsers } from '../../actions/userActions';
import { IState } from '../../reducers';
import { IUserReducer } from '../../reducers/userReducers';
import { getPhoto, getPhotos } from '../../actions/photosAction';
import { IPhotoReducer } from '../../reducers/photosReducers';
import { Colors } from '../../styledHelpers/colorsUtils';

const Wrapper = styled.div `
    width: 100%;
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    margin: 0px 0px 20px 0px;
    background-color: white;
`;

const Avatar = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    margin: 0 auto;
`;

const FullName = styled.h2`
    color: ${Colors.blue};
`;

const JobTitle = styled.h4``;

type GetUser = ReturnType<typeof getUser>
type GetUsers = ReturnType<typeof getUsers>
type GetPhoto = ReturnType<typeof getPhoto>

type PostParams = { 
    id: string;
}

const Profile = () => { 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetUser>(getUser("1"));
       }, []);

    useEffect(() => {
        dispatch<GetPhoto>(getPhoto(1))
      }, []);

    const rec = useSelector<IState, IUserReducer> (state => ({
        ...state.users
    }));
    const photos = useSelector<IState,IPhotoReducer> (state =>({
        ...state.photos
    }))

    const data = rec.user;
    const photo = photos.photo;

    return (
        <Wrapper>
                <Avatar alt="avatar" src={`${photo.url}`}></Avatar>
                <FullName>{data.name} {data.username}</FullName>
                <JobTitle>{data.company.name}</JobTitle>
        </Wrapper>        
    );
}

export default Profile;
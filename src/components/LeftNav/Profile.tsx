import styled from 'styled-components';
import React, {FC, useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getUser, getUsers } from '../../actions/userActions';
import { IState } from '../../reducers';
import { IUserReducer } from '../../reducers/userReducers';

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
    color: #4ca1e6;
`;

const JobTitle = styled.h4``;

type GetUser = ReturnType<typeof getUser>
type GetUsers = ReturnType<typeof getUsers>

type PostParams = { 
    id: string;
}

const Profile = () => { 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetUser>(getUser("1"));
       }, []);

    const rec = useSelector<IState, IUserReducer> (state => ({
        ...state.users
    }));

    const data = rec.user;

    return (
        <Wrapper>
                <Avatar alt="avatar" src="./media/profile.png"></Avatar>
                <FullName>{data.name} {data.username}</FullName>
                <JobTitle>{data.company.name}</JobTitle>
        </Wrapper>        
    );
}

export default Profile;
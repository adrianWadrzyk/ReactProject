import styled from 'styled-components';

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IFakeCompanyReducer } from '../../reducers/fakeCompaniesReducer';
import { IState } from '../../reducers';

import { getFakeCompany } from '../../actions/fakeCompanyActions';
import {loggedUserID}  from '../../utils/loggedUser'

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

    let filtered = company.filter( e => {
       return e.name.toLowerCase().includes(props.inputText.toLowerCase());
    })

    if(props.sortedASC)
         filtered.sort((a, b) => (a.name < b.name ? -1 : 1))
    else 
         filtered.sort((a, b) => (a.name > b.name ? -1 : 1))

    if(props.followed == "Fallowed")
    filtered = filtered.filter(e => {
        return e.userID == loggedUserID;
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
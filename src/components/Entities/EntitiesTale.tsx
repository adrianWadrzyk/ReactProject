import styled from 'styled-components';

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { IState } from '../../reducers';
import { IPhotoReducer } from '../../reducers/photosReducers';
import { getPhoto, getPhotos } from '../../actions/photosAction';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 90%;
`;

const Tale = styled.div`
    width: 300px;
    height: 150px;
    display: flex;
    background-color: black;
    color: white;
    margin: 10px;
`;

const Photo = styled.img`
    background-color: red;
    width:50%;
    height:100%;
`;

const Title = styled.h3`
`;

const RightConteiner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
`;

const Description = styled.p`
`;


type GetPhotos = ReturnType<typeof getPhotos>
type GetPhoto = ReturnType<typeof getPhoto>

const EntitiesTale = () => { 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetPhotos>(getPhotos())
      }, []);

      const rec = useSelector<IState, IPhotoReducer> (state => ({
        ...state.photos
    }));

    const data = rec.photosList;
    const slice = data.slice(0,30);

    return(
        <Wrapper>
        {slice.map(ele => (
            <Tale>
                    <Photo src={`${ele.url}`}></Photo>
                <RightConteiner>
                    <Title>tp kest[ urzkładow tekst</Title>
                    <Description>Jakiś tam opis</Description>
                </RightConteiner>
            </Tale>
        ))
        }
    </Wrapper>
    )
}

export default EntitiesTale;
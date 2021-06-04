import styled from 'styled-components';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { IState } from '../../reducers';
import { IPhotoReducer } from '../../reducers/photosReducers';
import { getPhoto, getPhotos } from '../../actions/photosAction';


const Photo = styled.img`
width: 70%;
height:50%;
grid-area: photo;
`;

type GetPhotos = ReturnType<typeof getPhotos>
type GetPhoto = ReturnType<typeof getPhoto>

const PublicationPhoto =  (props :any) => { 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetPhoto>(getPhoto(props.id))
      }, []);

      const rec = useSelector<IState, IPhotoReducer> (state => ({
        ...state.photos
    }));

    const data = rec.photo;
    return (
        <Photo src={`${data.url}`}></Photo>
  
    )
}

export default PublicationPhoto;

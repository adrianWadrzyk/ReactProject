import styled from 'styled-components';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { IState } from '../../reducers';
import { IPhotoReducer } from '../../reducers/photosReducers';
import { getPhoto, getPhotos } from '../../actions/photosAction';


const Photo = styled.img`
    width: 10%;
    height: 10%;
    margin: 0 20px;
`;

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

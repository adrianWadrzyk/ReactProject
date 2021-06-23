import styled from 'styled-components';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { IState } from '../../reducers';
import { IPhotoReducer } from '../../reducers/photosReducers';
import { getPhotos } from '../../actions/photosAction';


const Photo = styled.img`
    width: 10%;
    height: 10%;
    margin: 0 20px;
`;

type GetPhotos = ReturnType<typeof getPhotos>

const PublicationPhoto =  (props :any) => { 
    const dispatch = useDispatch();

    useEffect (() => {
        dispatch<GetPhotos>(getPhotos())
      }, []);

      const rec = useSelector<IState, IPhotoReducer> (state => ({...state.photos}))
    return (
        <Photo src={`${rec?.photosList[props?.id]?.url}`}></Photo>
  
    )
}

export default PublicationPhoto;

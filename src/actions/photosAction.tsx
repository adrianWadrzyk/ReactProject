import {Dispatch} from 'redux';
import * as actionTypes from './actionTypes/photoTypes';
import {IPhoto} from '../utils/RestInterface/Interface';

export const getPhotos =  (): Promise<IPhoto[]> => ( (dispatch: Dispatch) => { 
    return  fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response => response.json())
    .then((photosList : IPhoto[]) => {
        console.log(photosList);
        dispatch( {
            type: actionTypes.GET_PHOTOS,
            photosList
        })
    })
}) as any

export const getPhoto = (id: number): Promise<IPhoto> => ((dispatch: Dispatch) => { 
    return fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    .then(response => response.json())
    .then((photo : IPhoto) => {
        dispatch( {
            type: actionTypes.GET_PHOTO,
            photo
        })
    })
}) as any
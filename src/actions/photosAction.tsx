import {Dispatch} from 'redux';
import * as actionTypes from './actionTypes/photoTypes';
import {IPhoto} from '../utils/RestInterface/Interface';

export const getPhotos =  (): Promise<IPhoto[]> => ( async (dispatch: Dispatch) => { 
    return  await fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response => response.json())
    .then((photosList : IPhoto[]) => {
        dispatch( {
            type: actionTypes.GET_PHOTOS,
            photosList
        })
    })
}) as any

export const getPhoto = (id: number): Promise<IPhoto> => (async (dispatch: Dispatch) => { 
    return await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    .then(response => response.json())
    .then((photo : IPhoto) => {
        dispatch( {
            type: actionTypes.GET_PHOTO,
            photo
        })
    })
}) as any
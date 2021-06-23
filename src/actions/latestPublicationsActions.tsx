import {Dispatch} from 'redux';
import * as actionTypes from './actionTypes/latestPublicationsTypes';
import {ILatestPublicationPost} from '../utils/RestInterface/Interface';

export const  getPublications = () : Promise<ILatestPublicationPost[]> => (async (dispatch: Dispatch) => { 
    return await fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then((publicationsList : ILatestPublicationPost[]) => {
        dispatch( {
            type: actionTypes.GET_PUBLICATIONS,
            publicationsList
        })
    })
}) as any
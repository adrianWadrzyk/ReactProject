import {Dispatch} from 'redux';
import * as actionTypes from './actionTypes/resumeYouWorkTypes';
import {IWorkspace} from '../utils/RestInterface/Interface';

export const getPosts = () : Promise<IWorkspace[]> => ((dispatch: Dispatch) => { 
   return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then((postList: IWorkspace[]) => { 
        dispatch( {
            type: actionTypes.GET_POSTS,
            postList
        })
    })
}) as any
import {Dispatch} from 'redux';
import * as actionTypes from './actionTypes/resumeYouWorkTypes';
import {IWorkspace} from '../utils/RestInterface/Interface';

export const getPosts = () : Promise<IWorkspace[]> => ( (dispatch: Dispatch) => { 
   return  fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then((postList: IWorkspace[]) => { 
        dispatch( {
            type: actionTypes.GET_POSTS,
            postList
        })
    })
}) as any

export const getPost = (id:string) : Promise<IWorkspace> => ((dispatch: Dispatch) => { 
    return fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
     .then(response => response.json())
     .then((post: IWorkspace) => { 
         dispatch( {
             type: actionTypes.GET_POST,
             post
         })
     })
 }) as any
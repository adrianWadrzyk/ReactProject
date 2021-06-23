import {Dispatch} from 'redux';
import * as actionTypes from './actionTypes/userTypes';
import {IUser} from '../utils/RestInterface/Interface';

export const getUsers =  () : Promise<IUser[]> =>  ( async(dispatch: Dispatch)=>{

    return await fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then((usersList: IUser[]) =>{
                dispatch(
                    {
                        type: actionTypes.GET_USERS,
                        usersList
                    })
            })
    }) as any;

export const getUser =  (id: string) : Promise<IUser> =>  ( async (dispatch: Dispatch)=>{

        return await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(response => response.json())
                .then((user: IUser) =>{
                    dispatch(
                        {
                            type: actionTypes.GET_USER,
                            user
                        })
                })
    }) as any;
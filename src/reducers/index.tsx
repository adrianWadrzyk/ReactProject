import {combineReducers} from 'redux';

import users, {IUserReducer} from './userReducers'
import posts, {IWorkspaceReducer} from './workSpaceReducers';

export default combineReducers({
    users,
    posts
    /*
    ,jakis inny reducer*/
})


export interface IState
{
    users: IUserReducer;
    posts: IWorkspaceReducer;
    /*jakis inny reducer: INazwaReducera*/
};
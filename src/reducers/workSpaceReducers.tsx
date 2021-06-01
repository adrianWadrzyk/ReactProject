
import {IWorkspace} from '../utils/RestInterface/Interface';
import * as actionTypes from '../actions/actionTypes/resumeYouWorkTypes';

export interface IWorkspaceReducer { 
    postList: IWorkspace[];
}


const defaultState = () : IWorkspaceReducer => ({
    postList: []
})

export default (state = defaultState(), action: any) => { 
    switch(action.type){
        case actionTypes.GET_POSTS: { 
            const data: actionTypes.IPostsType['GET_POSTS'] = action;
            return{
                ...state,
                postList: data.postList
            }
        } 
        default:
            return state;
    }
}
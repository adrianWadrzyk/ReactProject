import {IWorkspace} from '../../utils/RestInterface/Interface';

export const GET_POSTS = 'GET_POSTS';
export const GET_POST = 'GET_POST';
export interface IPostsType { 
    GET_POSTS: {
        postList: IWorkspace[]
    }
    GET_POST: { 
        post : IWorkspace
    }
}
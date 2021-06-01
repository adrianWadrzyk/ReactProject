import {IWorkspace} from '../../utils/RestInterface/Interface';

export const GET_POSTS = 'GET_POSTS';

export interface IPostsType { 
    GET_POSTS: {
        postList: IWorkspace[]
    }
}
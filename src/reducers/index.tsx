import {combineReducers} from 'redux';

import users, {IUserReducer} from './userReducers'
import posts, {IWorkspaceReducer} from './workSpaceReducers';
import latesPublications, {ILatestPublicationReducer} from './latestPublicationsReducers';
import photos, {IPhotoReducer} from './photosReducers';

export default combineReducers({
    users,
    posts,
    latesPublications,
    photos
    /*
    ,jakis inny reducer*/
})


export interface IState
{
    users: IUserReducer;
    posts: IWorkspaceReducer;
    latesPublications: ILatestPublicationReducer;
    photos: IPhotoReducer;
    /*jakis inny reducer: INazwaReducera*/
};
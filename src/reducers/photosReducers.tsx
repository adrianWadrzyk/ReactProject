
import {IPhoto} from '../utils/RestInterface/Interface';
import * as actionTypes from '../actions/actionTypes/photoTypes';

export interface IPhotoReducer { 
    photosList: IPhoto[];
    photo: IPhoto;
}

const defaultState = () : IPhotoReducer => ({
    photosList: [],
    photo: {albumId: 0, id: 0, thumbnailUrl: "", title: "", url:""}
})

export default(state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_PHOTOS: { 
            const data: actionTypes.IPhotosActionType['GET_PHOTOS'] = action;
            return { 
                ...state, 
                photosList: data.photosList
            }
        } case actionTypes.GET_PHOTO: {
            const data: actionTypes.IPhotosActionType['GET_PHOTO'] = action;
            return {
                ...state,
                photo: data.photo
            }
        } default:
        return state
    }
}
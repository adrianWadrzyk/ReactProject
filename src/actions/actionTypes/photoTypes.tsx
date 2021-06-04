import {IPhoto} from '../../utils/RestInterface/Interface';

export const GET_PHOTOS = 'GET_PHOTOS';
export const GET_PHOTO = 'GET_PHOTO';

export interface IPhotosActionType { 
    GET_PHOTOS: { 
        photosList: IPhoto[];
    }
    GET_PHOTO: { 
        photo: IPhoto;
    }
}
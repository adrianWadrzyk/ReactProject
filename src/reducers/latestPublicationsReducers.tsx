import {ILatestPublicationPost} from '../utils/RestInterface/Interface';
import * as actionTypes from '../actions/actionTypes/latestPublicationsTypes';

export interface ILatestPublicationReducer{
    publicationsList : ILatestPublicationPost[];
}

const defaultState = (): ILatestPublicationReducer => ({
    publicationsList: []
})


export default (state = defaultState(), action:any) => {
    switch(action.type){
        case actionTypes.GET_PUBLICATIONS:{
            const data: actionTypes.ILatestPublicationType['GET_PUBLICATIONS'] = action;
            return{
                ...state,
                publicationsList: data.publicationsList
            }
        }
        default:
            return state;
    }
}
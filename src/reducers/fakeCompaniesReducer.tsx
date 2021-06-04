import {IFakeCompany} from '../utils/RestInterface/Interface';
import * as actionTypes from '../actions/actionTypes/fakeCompanyTypes';

export interface IFakeCompanyReducer{
    fakeCompanyList : IFakeCompany[];
}

const defaultState = (): IFakeCompanyReducer => ({
    fakeCompanyList: []
})

export default (state = defaultState(), action:any) => {
    switch(action.type){
        case actionTypes.GET_FAKE_COMPANY:{
            const data: actionTypes.IFAKE_COMPANY['GET_FAKE_COMPANY'] = action;
            return{
                ...state,
                fakeCompanyList: data.fakeCompanyList
            }
        }
        default:
            return state;
    }
}
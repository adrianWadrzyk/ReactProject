import {IFakeCompany} from '../../utils/RestInterface/Interface';

export const GET_FAKE_COMPANY = `GET_FAKE_COMPANY`;

export interface IFAKE_COMPANY { 
    GET_FAKE_COMPANY: { 
        fakeCompanyList: IFakeCompany[]
    }
}
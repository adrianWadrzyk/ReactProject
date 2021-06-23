import {Dispatch} from 'redux';
import * as actionTypes from './actionTypes/fakeCompanyTypes';
import {IFakeCompany} from '../utils/RestInterface/Interface';
import {IUser} from '../utils/RestInterface/Interface';
import {IPhoto} from '../utils/RestInterface/Interface';


export  const getFakeCompany =  (): Promise<IFakeCompany[]> => ( async (dispatch: Dispatch) => {
    let users : Array<IUser> =   await fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json());
    let photos: Array<IPhoto> =  await fetch("https://jsonplaceholder.typicode.com/photos").then(response => response.json());
    users = [...users, ...users, ...users];
    Promise.all(users.map((user, i) => { 
        const newAddress : IFakeCompany = {
        id: i,
        address: `${user.address.city}`,
        name: user.company.name,
        photo_url: photos[i].url,
        userID: user.id
        }
        return newAddress;
    })


 ).then((fakeCompanyList: IFakeCompany[]) => { 
        dispatch({
            type: actionTypes.GET_FAKE_COMPANY,
            fakeCompanyList
        })
    }) 
}) as any
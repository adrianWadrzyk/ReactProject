import {ILatestPublicationPost} from '../utils/RestInterface/Interface';
import * as actionTypes from '../actions/actionTypes/latestPublicationsTypes';

export interface ILatestPublicationReducer{
    publicationsList : ILatestPublicationPost[];
}

const defaultState = (): ILatestPublicationReducer => ({
    publicationsList: [{userId: 1, title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", id: 1, body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto" },
                       {userId: 1, title: "qui est esse", id: 2, body:"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"},
                       {userId: 1, title: "ea molestias quasi exercitationem repellat qui ipsa sit aut", id:3, body:"et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"},
                       {userId: 1, title: "eum et est occaecati", id: 3, body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"}
                      ]
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
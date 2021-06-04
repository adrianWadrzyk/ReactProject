import {ILatestPublicationPost} from '../../utils/RestInterface/Interface';

export const GET_PUBLICATIONS = `GET_PUBLICATIONS`;

export interface ILatestPublicationType { 
    GET_PUBLICATIONS: { 
        publicationsList: ILatestPublicationPost[]
    }
}
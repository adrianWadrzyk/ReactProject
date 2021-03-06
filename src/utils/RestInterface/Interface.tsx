export interface IComment {
    id: number,
    postId: number,
    name: string,
    email: string,
    body: string
}

export interface IWorkspace {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

export interface ICompany {
    name: string,
    catchPhrase: string,
    bs: string
}

export interface IPhoto {
    albumId: number,
    id: number,
    thumbnailUrl: string
    title: string
    url: string
}

export interface IUser {
    id: number,
    name: string,
    username: string,
    email: string
    address: IAddress,
    phone: string,
    website: string,
    company: ICompany,
    photo?: IPhoto
}

export interface IAddress {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
        lat: string,
        lng: string
    }
}

export interface ILatestPublicationPost { 
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface IFakeCompany { 
    id: number,
    name: string,
    address: string,
    photo_url: string,
    userID: number
}
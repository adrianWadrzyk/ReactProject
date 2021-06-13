import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getPhoto } from "../../actions/photosAction";
import { getUser } from "../../actions/userActions";
import { IState } from "../../reducers";
import { IPhotoReducer } from "../../reducers/photosReducers";
import { IUserReducer } from "../../reducers/userReducers";
import { Colors } from "../../styledHelpers/colorsUtils";
import { loggedUserID } from "../../utils/loggedUser";
import Edit from "./EditIcon";

const Wrapper = styled.div`
    display: flex;
    margin: 50px;
    justify-content: center;
    background-color: ${Colors.mainBackgroundColor};
    padding: 10px;
`;

const FirstColumn = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;    


const CustomPhoto = styled.img`
    width: 75px;
    height: 75px;
    border-radius: 100%;
    margin-bottom: 10px;
`;

const SecondColumn = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    p { 
        padding: 5px;
    }

    input { 
        margin: 5px;
        padding: 2px;
    }
`;


const Contact = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    padding: 10px;
    margin-left: 30px;
    p { 
        padding: 5px;
    }

    input { 
        margin: 5px;
        padding: 2px;
    }
`;

const EditWrapper = styled.div`
    width: 20%;
    text-align: right;
    padding-right: 10px;
`;

const EditingInput = styled.input``;



type GetUser = ReturnType<typeof getUser>
type GetPhoto = ReturnType<typeof getPhoto>

const PrivateProfile = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetUser>(getUser(loggedUserID.toString()));
       }, []);

    useEffect(() => {
        dispatch<GetPhoto>(getPhoto(1))
      }, []);

    const rec = useSelector<IState, IUserReducer> (state => ({
        ...state.users
    }));
    const photos = useSelector<IState,IPhotoReducer> (state =>({
        ...state.photos
    }))

    const data = rec.user;
    const photo = photos.photo;

    console.log(data);
    console.log(photo);
     
    const [nameText, setInputName] = useState<string>(`${data.name}`);
    const inputName = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputName(text);
    }   
    
    const [companyText, setInputCopmany] = useState<string>(`${data.company.name}`);
    const inputCompany = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputCopmany(text);
    }
    
    const [adressText, setInputAdress] = useState<string>(`${data.address.city}`);
    const inputAdress = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputAdress(text);
    }
    
    const [catchPhraseText, setInputCatchPhrase] = useState<string>(`${data.company.catchPhrase}`);
    const inputCatchPhrase = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputCatchPhrase(text);
    }

    const [emailText, setInputEmail] = useState<string>(`${data.email}`);
    const inputEmail = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputEmail(text);
    }
    
    const [telephoneText, setInputTelephone] = useState<string>(`${data.phone}`);
    const inputTelephone = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputTelephone(text);
    }
    
    const [isEditing, setEditing] = useState<boolean>(false);
    const handleEditClick = () => { 
        setEditing(!isEditing);
    }
    

    return(
        <Wrapper>
            <FirstColumn>
                <CustomPhoto src={photo.url}></CustomPhoto>
                <p>See profile</p>
            </FirstColumn>
            <SecondColumn>
            {isEditing?  <EditingInput value={nameText}  onChange={inputName}></EditingInput> : <p>{nameText}</p> }
            {isEditing?  <EditingInput value={companyText}  onChange={inputCompany}></EditingInput> : <p>{companyText}</p> }
            {isEditing?  <EditingInput value={adressText}  onChange={inputAdress}></EditingInput> : <p>{adressText}</p> }
            {isEditing?  <EditingInput value={catchPhraseText}  onChange={inputCatchPhrase}></EditingInput> : <p>{catchPhraseText}</p> }
            </SecondColumn>
            <Contact>
                <p>Contact Me:</p>
                {isEditing?  <EditingInput value={emailText}  onChange={inputEmail}></EditingInput> : <p>{emailText}</p> }
                {isEditing?  <EditingInput value={telephoneText}  onChange={inputTelephone}></EditingInput> : <p>{telephoneText}</p> }
            </Contact>
            <EditWrapper>
            <   Edit onClick={handleEditClick}/>
            </EditWrapper>
        </Wrapper>
    )
}


export default PrivateProfile;
import { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/colorsUtils';
import { fontSize } from '../../styledHelpers/fontUtils';
import TopNavProfile from './TopNavProfile';
import PrivateProfile from './PrivateProfile';
import Edit from './EditIcon';
import { useDispatch, useSelector } from 'react-redux';
import { getPhoto } from '../../actions/photosAction';
import { IState } from '../../reducers';
import { IPhotoReducer } from '../../reducers/photosReducers';
import { getUsers } from '../../actions/userActions';
import { IUserReducer } from '../../reducers/userReducers';
import { Link } from 'react-router-dom';
import SmallIcon from '../Common/SmallIcon';

const Wrapper = styled.div`
    background-color: white;
`;

const Title = styled.h2`
    color: ${Colors.textBlack};
    font-size: 16px;
    font-weight: bold;
    margin-left: 10px;
    padding-top: 10px;
    width: 100%;
`;
 
const MainTitle = styled.h1`
    color: ${Colors.blue};
    font-size: ${fontSize.sectionTitle};
    margin: 8px 10px;
    font-weight: bold;
`

const SingleSection = styled.div`
    margin: 10px auto;
    width: 90%;

    & .gray { 
        background-color: ${Colors.mainBackgroundColor};
    }

    & .colorBackground { 
        background-color:  ${Colors.mainBackgroundColor};
        padding: 3px;
    }
`;

const EditingInput = styled.input`
    margin: 10px;
    padding-left: 5px;
`;

const StaticValue = styled.p`
    margin: 5px 10px;
    color: ${Colors.textBlack};
    padding: 5px 0;
`;

const InnerWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Table = styled.table`
  margin-top: 10px;
  max-width: 100%;
   p{ 
    padding-right: 10px;
   }

  th { 
    text-align: left;
    padding-left: 10px;
    font-weight: bold;
  }

  input { 
    width: 140px;
  }
`
const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
`;

const SmallPhoto = styled.img`
    width: 20px;
    height: 20px;
    border-radius: 100%;
    margin-left: 10px;
`;

const StyledLink = styled(Link)`
    font-size: ${fontSize.largeText};
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
    text-decoration: none;
`;


type GetPhoto = ReturnType<typeof getPhoto>
type GetUsers = ReturnType<typeof getUsers>

const Profile = () => { 

    const [expertiseText, setInputExpertise] = useState<string>('Margers and acquisition');
    const inputHandler = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputExpertise(text);
    }

    const [CrossBorderText, setInputCrossBorder] = useState<string>('Cross border operation');
    const inputCrossBorder = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputCrossBorder(text);
    }

    const [TransactionText, setInputTransaction] = useState<string>('Transaction over 500/$');
    const inputTransaction = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputTransaction(text);
    }

    const [ParisBarText, setInputParisBar] = useState<string>('Paris bar association');
    const inputParisBar = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputParisBar(text);
    }

    const [TunisianText, setInputTunisian] = useState<string>('Tunisian bar association');
    const inputTunisian = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputTunisian(text);
    }

    const [CountryText, setInputCountry] = useState<string>('Tunisia');
    const inputCountry = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputCountry(text);
    }

    const [FeeText, setInputFee] = useState<string>('610/heour (Negociated)');
    const inputFee = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputFee(text);
    }

    const [ServiceText, setInputService] = useState<string>('610/heour (Negociated)');
    const inputService = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputService(text);
    }

    const dispatch = useDispatch();

    useEffect(() => {
            dispatch<GetPhoto>(getPhoto(1))
          }, []);
    
    const photos = useSelector<IState,IPhotoReducer> (state =>({
            ...state.photos
        }))

    useEffect(() => {
            dispatch<GetUsers>(getUsers());
           }, []);
    
    const users = useSelector<IState, IUserReducer> (state =>({
            ...state.users
        }))
    const [FirstCorrespondantsText, setInputFirstCorrespondantsText] = useState<string>(`${users.userList[1].name}`);
    const inputFirstCorrespondants = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputFirstCorrespondantsText(text);
    }

    const [SecondCorrespondantsText, setInputSecondCorrespondantsText] = useState<string>(`${users.userList[2].name}`);
    const inputSecondCorrespondants = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputSecondCorrespondantsText(text);
    }

    // Table 1
    const [T1r1c1Text, setInputT1r1c1Text] = useState<string>('lorem ipsum');
    const inputT1r1c1 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT1r1c1Text(text);
    }

    const [T1r1c2Text, setInputT1r1c2Text] = useState<string>('lorem ipsum');
    const inputT1r1c2 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT1r1c2Text(text);
    }

    const [T1r1c3Text, setInputT1r1c3Text] = useState<string>('lorem ipsum');
    const inputT1r1c3 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT1r1c3Text(text);
    }

    const [T1r1c4Text, setInputT1r1c4Text] = useState<string>('610/heour (Negociated)');
    const inputT1r1c4 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT1r1c4Text(text);
    }

    const [T1r1c5Text, setInputT1r1c5Text] = useState<string>('lorem ipsum');
    const inputT1r1c5 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT1r1c5Text(text);
    }

    const [T1r1c6Text, setInputT1r1c6Text] = useState<string>('lorem ipsum');
    const inputT1r1c6 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT1r1c6Text(text);
    }

    const [T1r2c1Text, setInputT1r2c1Text] = useState<string>('lorem ipsum');
    const inputT1r2c1 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT1r2c1Text(text);
    }

    const [T1r2c2Text, setInputT1r2c2Text] = useState<string>('lorem ipsum');
    const inputT1r2c2 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT1r2c2Text(text);
    }

    const [T1r2c3Text, setInputT1r2c3Text] = useState<string>('lorem ipsum');
    const inputT1r2c3 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT1r2c3Text(text);
    }

    const [T1r2c4Text, setInputT1r2c4Text] = useState<string>('lorem ipsum');
    const inputT1r2c4 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT1r2c4Text(text);
    }

    const [T1r2c5Text, setInputT1r2c5Text] = useState<string>('lorem ipsum');
    const inputT1r2c5 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT1r2c5Text(text);
    }

    const [T1r2c6Text, setInputT1r2c6Text] = useState<string>('lorem ipsum');
    const inputT1r2c6 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT1r2c6Text(text);
    }


    const [T1r3c1Text, setInputT1r3c1Text] = useState<string>('lorem ipsum');
    const inputT1r3c1 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT1r3c1Text(text);
    }

    const [T1r3c2Text, setInputT1r3c2Text] = useState<string>('lorem ipsum');
    const inputT1r3c2 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT1r3c2Text(text);
    }

    const [T1r3c3Text, setInputT1r3c3Text] = useState<string>('lorem ipsum');
    const inputT1r3c3 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT1r3c3Text(text);
    }

    const [T1r3c4Text, setInputT1r3c4Text] = useState<string>('lorem ipsum');
    const inputT1r3c4 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT1r3c4Text(text);
    }

    const [T1r3c5Text, setInputT1r3c5Text] = useState<string>('lorem ipsum');
    const inputT1r3c5 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT1r3c5Text(text);
    }

    const [T1r3c6Text, setInputT1r3c6Text] = useState<string>('lorem ipsum');
    const inputT1r3c6 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT1r3c6Text(text);
    }

    // Table 2 
        
    const [T2r1c1Text, setInputT2r1c1Text] = useState<string>('lorem ipsum');
    const inputT2r1c1 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT2r1c1Text(text);
    }

    const [T2r1c2Text, setInputT2r1c2Text] = useState<string>('lorem ipsum');
    const inputT2r1c2 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT2r1c2Text(text);
    }

    const [T2r1c3Text, setInputT2r1c3Text] = useState<string>('lorem ipsum');
    const inputT2r1c3 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT2r1c3Text(text);
    }

    const [T2r1c4Text, setInputT2r1c4Text] = useState<string>('610/heour (Negociated)');
    const inputT2r1c4 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT2r1c4Text(text);
    }

    const [T2r1c5Text, setInputT2r1c5Text] = useState<string>('lorem ipsum');
    const inputT2r1c5 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT2r1c5Text(text);
    }

    const [T2r2c1Text, setInputT2r2c1Text] = useState<string>('lorem ipsum');
    const inputT2r2c1 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT2r2c1Text(text);
    }

    const [T2r2c2Text, setInputT2r2c2Text] = useState<string>('lorem ipsum');
    const inputT2r2c2 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT2r2c2Text(text);
    }

    const [T2r2c3Text, setInputT2r2c3Text] = useState<string>('lorem ipsum');
    const inputT2r2c3 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT2r2c3Text(text);
    }

    const [T2r2c4Text, setInputT2r2c4Text] = useState<string>('lorem ipsum');
    const inputT2r2c4 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT2r2c4Text(text);
    }

    const [T2r2c5Text, setInputT2r2c5Text] = useState<string>('lorem ipsum');
    const inputT2r2c5 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT2r2c5Text(text);
    }


    const [T2r3c1Text, setInputT2r3c1Text] = useState<string>('lorem ipsum');
    const inputT2r3c1 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT2r3c1Text(text);
    }

    const [T2r3c2Text, setInputT2r3c2Text] = useState<string>('lorem ipsum');
    const inputT2r3c2 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT2r3c2Text(text);
    }

    const [T2r3c3Text, setInputT2r3c3Text] = useState<string>('lorem ipsum');
    const inputT2r3c3 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT2r3c3Text(text);
    }

    const [T2r3c4Text, setInputT2r3c4Text] = useState<string>('lorem ipsum');
    const inputT2r3c4 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT2r3c4Text(text);
    }

    const [T2r3c5Text, setInputT2r3c5Text] = useState<string>('lorem ipsum');
    const inputT2r3c5 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT2r3c5Text(text);
    }

    // Table 3 
    const [T3r1c1Text, setInputT3r1c1Text] = useState<string>('lorem ipsum');
    const inputT3r1c1 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT3r1c1Text(text);
    }

    const [T3r1c2Text, setInputT3r1c2Text] = useState<string>('lorem ipsum');
    const inputT3r1c2 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT3r1c2Text(text);
    }

    const [T3r1c3Text, setInputT3r1c3Text] = useState<string>('lorem ipsum');
    const inputT3r1c3 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT3r1c3Text(text);
    }

    const [T3r1c4Text, setInputT3r1c4Text] = useState<string>('610/heour (Negociated)');
    const inputT3r1c4 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT3r1c4Text(text);
    }

    const [T3r2c1Text, setInputT3r2c1Text] = useState<string>('lorem ipsum');
    const inputT3r2c1 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT3r2c1Text(text);
    }

    const [T3r2c2Text, setInputT3r2c2Text] = useState<string>('lorem ipsum');
    const inputT3r2c2 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT3r2c2Text(text);
    }

    const [T3r2c3Text, setInputT3r2c3Text] = useState<string>('lorem ipsum');
    const inputT3r2c3 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT3r2c3Text(text);
    }

    const [T3r2c4Text, setInputT3r2c4Text] = useState<string>('lorem ipsum');
    const inputT3r2c4 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT3r2c4Text(text);
    }

    const [T3r3c1Text, setInputT3r3c1Text] = useState<string>('lorem ipsum');
    const inputT3r3c1 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT3r3c1Text(text);
    }

    const [T3r3c2Text, setInputT3r3c2Text] = useState<string>('lorem ipsum');
    const inputT3r3c2 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT3r3c2Text(text);
    }

    const [T3r3c3Text, setInputT3r3c3Text] = useState<string>('lorem ipsum');
    const inputT3r3c3 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT3r3c3Text(text);
    }

    const [T3r3c4Text, setInputT3r3c4Text] = useState<string>('lorem ipsum');
    const inputT3r3c4 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT3r3c4Text(text);
    }

    const [T3r4c2Text, setInputT3r4c2Text] = useState<string>('lorem ipsum');
    const inputT3r4c2 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT3r4c2Text(text);
    }

    const [T3r4c3Text, setInputT3r4c3Text] = useState<string>('lorem ipsum');
    const inputT3r4c3 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT3r4c3Text(text);
    }

    const [T3r4c4Text, setInputT3r4c4Text] = useState<string>('lorem ipsum');
    const inputT3r4c4 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT3r4c4Text(text);
    }

    const [T3r5c2Text, setInputT3r5c2Text] = useState<string>('lorem ipsum');
    const inputT3r5c2 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT3r5c2Text(text);
    }

    const [T3r5c3Text, setInputT3r5c3Text] = useState<string>('lorem ipsum');
    const inputT3r5c3 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT3r5c3Text(text);
    }

    const [T3r5c4Text, setInputT3r5c4Text] = useState<string>('lorem ipsum');
    const inputT3r5c4 = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputT3r5c4Text(text);
    }

    const [isEditing, setEditing] = useState<boolean>(false);
    const handleEditClick = () => { 
        setEditing(!isEditing);
    }
    return(
        <Wrapper>
        <TopNavProfile />
        <PrivateProfile />
        <SingleSection>
            <TopBar>
                <MainTitle>Expertise</MainTitle>
                <Edit onClick={handleEditClick}/>
            </TopBar>
            <InnerWrapper>
             {isEditing? <EditingInput value={expertiseText}  onChange={inputHandler}></EditingInput> : <StaticValue className="colorBackground">{expertiseText}</StaticValue> } 
             </InnerWrapper>
        </SingleSection>
        <SingleSection>
            <MainTitle>Specialities</MainTitle>
            <InnerWrapper>
            {isEditing?  <EditingInput value={CrossBorderText}  onChange={inputCrossBorder}></EditingInput> : <StaticValue className="colorBackground">{CrossBorderText}</StaticValue> } 
            {isEditing?  <EditingInput value={TransactionText}  onChange={inputTransaction}></EditingInput> : <StaticValue className="colorBackground">{TransactionText}</StaticValue> } 
            </InnerWrapper>
        </SingleSection>
        <SingleSection>
            <MainTitle>Admission to practice law</MainTitle>
            <InnerWrapper>
            {isEditing?  <EditingInput value={ParisBarText}  onChange={inputParisBar}></EditingInput> : <StaticValue className="colorBackground">{ParisBarText}</StaticValue> } 
            {isEditing?  <EditingInput value={TunisianText}  onChange={inputTunisian}></EditingInput> : <StaticValue className="colorBackground">{TunisianText}</StaticValue> } 
            </InnerWrapper>
        </SingleSection>
        <SingleSection>
            <MainTitle>Countries</MainTitle>
            <InnerWrapper>
            {isEditing?  <EditingInput value={CountryText}  onChange={inputCountry}></EditingInput> : <StaticValue className="colorBackground">{CountryText}</StaticValue> } 
            </InnerWrapper>
        </SingleSection>
        <SingleSection>
            <MainTitle>Panel informations</MainTitle>
            <Title>Hourly fee:</Title>
            {isEditing?  <EditingInput value={FeeText}  onChange={inputFee}></EditingInput> : <StaticValue>{FeeText}</StaticValue> } 
        </SingleSection>
        <SingleSection>
            <MainTitle>Terms and conditions</MainTitle>
            {isEditing?  <EditingInput value={ServiceText}  onChange={inputService}></EditingInput> : <StaticValue>{ServiceText}</StaticValue> } 
            {isEditing? <EditingInput type="file"></EditingInput> : <EditingInput type="file" disabled></EditingInput> }
        </SingleSection>
        <SingleSection>
            <MainTitle>Internlal correspondants</MainTitle>
            <InnerWrapper className="gray">
                <SmallPhoto src={photos.photo.url}/>{isEditing?  <EditingInput value={FirstCorrespondantsText}  onChange={inputFirstCorrespondants}></EditingInput> : <StaticValue>{FirstCorrespondantsText}</StaticValue> } 
                <SmallIcon src="./media/comment.png" alt="commentIcon"/>
                <StaticValue>Message</StaticValue>
                <SmallIcon src="./media/profile.png" alt="profileIcon"/>
                <StaticValue>Profile</StaticValue>
            </InnerWrapper>
        </SingleSection>
        <SingleSection>
            <InnerWrapper  className="gray">
            <   SmallPhoto src={photos.photo.url}/>{isEditing?  <EditingInput value={SecondCorrespondantsText}  onChange={inputSecondCorrespondants}></EditingInput> : <StaticValue>{SecondCorrespondantsText}</StaticValue> } 
                <SmallIcon src="./media/comment.png" alt="commentIcon"/>
                <StaticValue>Message</StaticValue>
                <SmallIcon src="./media/profile.png" alt="profileIcon"/>
                <StaticValue>Profile</StaticValue>
            </InnerWrapper>
        </SingleSection>
        <SingleSection>
            <MainTitle> Proposals</MainTitle>
            <Table>
                <tr>
                    <th>Name</th>
                    <th>Entity</th>
                    <th>Location</th>
                    <th>Expertise</th>
                    <th>Date</th>
                    <th>Firm</th>
                </tr>
                <tr>
                    <td>{isEditing?  <EditingInput value={T1r1c1Text}  onChange={inputT1r1c1}></EditingInput> : <StaticValue>{T1r1c1Text}</StaticValue> } </td>
                    <td>{isEditing?  <EditingInput value={T1r1c2Text}  onChange={inputT1r1c2}></EditingInput> : <StaticValue>{T1r1c2Text}</StaticValue> } </td>
                    <td>{isEditing?  <EditingInput value={T1r1c3Text}  onChange={inputT1r1c3}></EditingInput> : <StaticValue>{T1r1c3Text}</StaticValue> } </td>
                    <td>{isEditing?  <EditingInput value={T1r1c4Text}  onChange={inputT1r1c4}></EditingInput> : <StaticValue>{T1r1c4Text}</StaticValue> } </td>
                    <td>{isEditing?  <EditingInput value={T1r1c5Text}  onChange={inputT1r1c5}></EditingInput> : <StaticValue>{T1r1c5Text}</StaticValue> } </td>
                    <td>{isEditing?  <EditingInput value={T1r1c6Text}  onChange={inputT1r1c6}></EditingInput> : <StaticValue>{T1r1c6Text}</StaticValue> } </td>
                </tr>
                <tr>
                    <td>{isEditing?  <EditingInput value={T1r2c1Text}  onChange={inputT1r2c1}></EditingInput> : <StaticValue>{T1r2c1Text}</StaticValue> } </td>
                    <td>{isEditing?  <EditingInput value={T1r2c2Text}  onChange={inputT1r2c2}></EditingInput> : <StaticValue>{T1r2c2Text}</StaticValue> } </td>
                    <td>{isEditing?  <EditingInput value={T1r2c3Text}  onChange={inputT1r2c3}></EditingInput> : <StaticValue>{T1r2c3Text}</StaticValue> } </td>
                    <td>{isEditing?  <EditingInput value={T1r2c4Text}  onChange={inputT1r2c4}></EditingInput> : <StaticValue>{T1r2c4Text}</StaticValue> } </td>
                    <td>{isEditing?  <EditingInput value={T1r2c5Text}  onChange={inputT1r2c5}></EditingInput> : <StaticValue>{T1r2c5Text}</StaticValue> } </td>
                    <td>{isEditing?  <EditingInput value={T1r2c6Text}  onChange={inputT1r2c6}></EditingInput> : <StaticValue>{T1r2c6Text}</StaticValue> } </td>
                </tr>
                <tr>
                    <td>{isEditing?  <EditingInput value={T1r3c1Text}  onChange={inputT1r3c1}></EditingInput> : <StaticValue>{T1r3c1Text}</StaticValue> } </td>
                    <td>{isEditing?  <EditingInput value={T1r3c2Text}  onChange={inputT1r3c2}></EditingInput> : <StaticValue>{T1r3c2Text}</StaticValue> } </td>
                    <td>{isEditing?  <EditingInput value={T1r3c3Text}  onChange={inputT1r3c3}></EditingInput> : <StaticValue>{T1r3c3Text}</StaticValue> } </td>
                    <td>{isEditing?  <EditingInput value={T1r3c4Text}  onChange={inputT1r3c4}></EditingInput> : <StaticValue>{T1r3c4Text}</StaticValue> } </td>
                    <td>{isEditing?  <EditingInput value={T1r3c5Text}  onChange={inputT1r3c5}></EditingInput> : <StaticValue>{T1r3c5Text}</StaticValue> } </td>
                    <td>{isEditing?  <EditingInput value={T1r3c6Text}  onChange={inputT1r3c6}></EditingInput> : <StaticValue>{T1r3c6Text}</StaticValue> } </td>
                </tr>
            </Table>
        </SingleSection>
        <SingleSection>
            <MainTitle> Internal reviews</MainTitle>
            <Table>
                <tr>
                    <th>Name</th>
                    <th>Entity</th>
                    <th>Location</th>
                    <th>Expertise</th>
                    <th>Date</th>
                </tr>
                <tr>
                    <td>{isEditing?  <EditingInput value={T2r1c1Text}  onChange={inputT2r1c1}></EditingInput> : <StaticValue>{T2r1c1Text}</StaticValue> } </td>
                    <td>{isEditing?  <EditingInput value={T2r1c2Text}  onChange={inputT2r1c2}></EditingInput> : <StaticValue>{T2r1c2Text}</StaticValue> } </td>
                    <td>{isEditing?  <EditingInput value={T2r1c3Text}  onChange={inputT2r1c3}></EditingInput> : <StaticValue>{T2r1c3Text}</StaticValue> } </td>
                    <td>{isEditing?  <EditingInput value={T2r1c4Text}  onChange={inputT2r1c4}></EditingInput> : <StaticValue>{T2r1c4Text}</StaticValue> } </td>
                    <td>{isEditing?  <EditingInput value={T2r1c5Text}  onChange={inputT2r1c5}></EditingInput> : <StaticValue>{T2r1c5Text}</StaticValue> } </td>
                </tr>
                <tr>
                    <td>{isEditing?  <EditingInput value={T2r2c1Text}  onChange={inputT2r2c1}></EditingInput> : <StaticValue>{T2r2c1Text}</StaticValue> } </td>
                    <td>{isEditing?  <EditingInput value={T2r2c2Text}  onChange={inputT2r2c2}></EditingInput> : <StaticValue>{T2r2c2Text}</StaticValue> } </td>
                    <td>{isEditing?  <EditingInput value={T2r2c3Text}  onChange={inputT2r2c3}></EditingInput> : <StaticValue>{T2r2c3Text}</StaticValue> } </td>
                    <td>{isEditing?  <EditingInput value={T2r2c4Text}  onChange={inputT2r2c4}></EditingInput> : <StaticValue>{T2r2c4Text}</StaticValue> } </td>
                    <td>{isEditing?  <EditingInput value={T2r2c5Text}  onChange={inputT2r2c5}></EditingInput> : <StaticValue>{T2r2c5Text}</StaticValue> } </td>
                </tr>
                <tr>
                    <td>{isEditing?  <EditingInput value={T2r3c1Text}  onChange={inputT2r3c1}></EditingInput> : <StaticValue>{T2r3c1Text}</StaticValue> } </td>
                    <td>{isEditing?  <EditingInput value={T2r3c2Text}  onChange={inputT2r3c2}></EditingInput> : <StaticValue>{T2r3c2Text}</StaticValue> } </td>
                    <td>{isEditing?  <EditingInput value={T2r3c3Text}  onChange={inputT2r3c3}></EditingInput> : <StaticValue>{T2r3c3Text}</StaticValue> } </td>
                    <td>{isEditing?  <EditingInput value={T2r3c4Text}  onChange={inputT2r3c4}></EditingInput> : <StaticValue>{T2r3c4Text}</StaticValue> } </td>
                    <td>{isEditing?  <EditingInput value={T2r3c5Text}  onChange={inputT2r3c5}></EditingInput> : <StaticValue>{T2r3c5Text}</StaticValue> } </td>
                </tr>
            </Table>
            <StyledLink to="/">More reviews</StyledLink>
        </SingleSection>
        <SingleSection>
            <MainTitle>Amount of fees</MainTitle>
            <Table>
            <tr>
                <th>Year</th>
                <th>Cost center</th>
                <th>Total amount</th>
                <th>Law firm</th>
            </tr>
            <tr>
                <td>{isEditing?  <EditingInput value={T3r1c1Text}  onChange={inputT3r1c1}></EditingInput> : <StaticValue>{T3r1c1Text}</StaticValue> } </td>
                <td>{isEditing?  <EditingInput value={T3r1c2Text}  onChange={inputT3r1c2}></EditingInput> : <StaticValue>{T3r1c2Text}</StaticValue> } </td>
                <td>{isEditing?  <EditingInput value={T3r1c3Text}  onChange={inputT3r1c3}></EditingInput> : <StaticValue>{T3r1c3Text}</StaticValue> } </td>
                <td>{isEditing?  <EditingInput value={T3r1c4Text}  onChange={inputT3r1c4}></EditingInput> : <StaticValue>{T3r1c4Text}</StaticValue> } </td>
            </tr>
            <tr>
                <td>{isEditing?  <EditingInput value={T3r2c1Text}  onChange={inputT3r2c1}></EditingInput> : <StaticValue>{T3r2c1Text}</StaticValue> } </td>
                <td>{isEditing?  <EditingInput value={T3r2c2Text}  onChange={inputT3r2c2}></EditingInput> : <StaticValue>{T3r2c2Text}</StaticValue> } </td>
                <td>{isEditing?  <EditingInput value={T3r2c3Text}  onChange={inputT3r2c3}></EditingInput> : <StaticValue>{T3r2c3Text}</StaticValue> } </td>
                <td>{isEditing?  <EditingInput value={T3r2c4Text}  onChange={inputT3r2c4}></EditingInput> : <StaticValue>{T3r2c4Text}</StaticValue> } </td>
            </tr>
            <tr>
                    <td>{isEditing?  <EditingInput value={T3r3c1Text}  onChange={inputT3r3c1}></EditingInput> : <StaticValue>{T3r3c1Text}</StaticValue> } </td>
                    <td>{isEditing?  <EditingInput value={T3r3c2Text}  onChange={inputT3r3c2}></EditingInput> : <StaticValue>{T3r3c2Text}</StaticValue> } </td>
                    <td>{isEditing?  <EditingInput value={T3r3c3Text}  onChange={inputT3r3c3}></EditingInput> : <StaticValue>{T3r3c3Text}</StaticValue> } </td>
                    <td>{isEditing?  <EditingInput value={T3r3c4Text}  onChange={inputT3r3c4}></EditingInput> : <StaticValue>{T3r3c4Text}</StaticValue> } </td>
            </tr>
            <tr>
                    <td></td>
                    <td>{isEditing?  <EditingInput value={T3r4c2Text}  onChange={inputT3r4c2}></EditingInput> : <StaticValue>{T3r4c2Text}</StaticValue> } </td>
                    <td>{isEditing?  <EditingInput value={T3r4c3Text}  onChange={inputT3r4c3}></EditingInput> : <StaticValue>{T3r4c3Text}</StaticValue> } </td>
                    <td>{isEditing?  <EditingInput value={T3r4c4Text}  onChange={inputT3r4c4}></EditingInput> : <StaticValue>{T3r4c4Text}</StaticValue> } </td>
            </tr>
            <tr>
                    <td></td>
                    <td>{isEditing?  <EditingInput value={T3r5c2Text}  onChange={inputT3r5c2}></EditingInput> : <StaticValue>{T3r5c2Text}</StaticValue> } </td>
                    <td>{isEditing?  <EditingInput value={T3r5c3Text}  onChange={inputT3r5c3}></EditingInput> : <StaticValue>{T3r5c3Text}</StaticValue> } </td>
                    <td>{isEditing?  <EditingInput value={T3r5c4Text}  onChange={inputT3r5c4}></EditingInput> : <StaticValue>{T3r5c4Text}</StaticValue> } </td>
            </tr>
            </Table>
        </SingleSection>
    </Wrapper>
    )
}
export default Profile;
import styled from 'styled-components';

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IFakeCompanyReducer } from '../../reducers/fakeCompaniesReducer';
import { IState } from '../../reducers';

import { getFakeCompany } from '../../actions/fakeCompanyActions';
import {loggedUserID}  from '../../utils/loggedUser'
import { Colors } from '../../styledHelpers/colorsUtils';
import { fontSize } from '../../styledHelpers/fontUtils';

const Wrapper = styled.div<{active: boolean}>`
    flex-direction: ${({active}) => (active? 'column': 'row')};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`

const Tale = styled.div<{active: boolean}>`
    width: ${({active}) => (active? '100%': '30%')};    
    height: auto;
    display: flex;
    color: ${Colors.textBlack};
    margin: 10px;
`;

const Photo = styled.img<{active: boolean}>`
    width: ${({active}) => (active? '15%': '45%')};    height: auto;
    height:100%;
`;

const SingleTale = styled.div`
    display: flex;
    width: 100%;
`;

const Title = styled.h3`
    margin: 10px 0;
    font-size: ${fontSize.subTitle};
    color: ${Colors.blue};
`;

const RightConteiner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
`;

const Description = styled.p`
    font-size: ${fontSize.mediumText};
    line-height: 1.2em;
`;


type GetFakeCopmanies = ReturnType<typeof getFakeCompany>

const EntitiesTale = (props: any) => { 
    const dispatch = useDispatch();

       useEffect(() => {
        dispatch<GetFakeCopmanies>(getFakeCompany());
       }, []);


    const companies = useSelector<IState, IFakeCompanyReducer> (state => ({
        ...state.fakeCompany
    }))

    const company = companies.fakeCompanyList; 

    let filtered = company.filter( e => {
       return e.name.toLowerCase().includes(props.inputText.toLowerCase());
    })

    if(props.sortedASC)
         filtered.sort((a, b) => (a.name < b.name ? -1 : 1))
    else 
         filtered.sort((a, b) => (a.name > b.name ? -1 : 1))

    if(props.followed == "Fallowed")
    filtered = filtered.filter(e => {
        return e.userID == loggedUserID;
    })

    return(
        <Wrapper active={props.view}>
        {filtered.map((ele) => (
            <Tale active={props.view}>
                {ele.name.toLowerCase().includes(props.inputText.toLowerCase()) && (
                <SingleTale>
                    <Photo active={props.view} src={`${ele.photo_url}`}></Photo>
                <RightConteiner>
                    <Title>{ele.name}</Title>
                    <Description>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab eveniet natus, expedita laborum!</Description>
                </RightConteiner>
                </SingleTale>
                )}
            </Tale>
            ))
        }
    </Wrapper>
    )
}

export default EntitiesTale;
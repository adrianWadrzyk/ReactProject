import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import EnitiesTale from './EntitiesTale';


const Wrapper = styled.div`
    background-color: #dfd5d5;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
`;

const TopBar = styled.div`
    padding: 10px 10px;
    width: 100%;
    background-color: red;
`;

const Filters = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
`;

const DisplayView = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Title = styled.div``;

const Switcher = styled.div`
    margin: 0 20px;
`;

const ChangeView = styled.div`
    display: flex;
`;

const LeftFilter = styled.div`
    display: flex;

    & > p { 
        margin: 0 10px;
    }
`;

const RightFilter = styled.div`
    display: flex;

    & > p { 
        margin: 0 20px;
    }
`;

const Entities = () => { 

    const [inputText, setInputText] = useState<string>('');
    const inputHandler = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputText(text);
    }
    
    return(
        <Wrapper>
         <TopBar>
             <DisplayView>                
                 <Title>Jakiś tam przykładowy tekst</Title>
                <ChangeView>
                    <Switcher>
                    <p>Mosaic</p>
                    </Switcher>
                    <Switcher>
                    <p>List</p>
                    </Switcher>
                </ChangeView>
             </DisplayView>

        <Filters>
            <LeftFilter>
                <p>All</p>
                <p>...</p>
                <p>Sort</p>
                <p>Filters</p>
                <p>FullScreen</p>
                <p>Share</p>
            </LeftFilter>
            <RightFilter>
                    <input type="text" value={inputText} onChange={inputHandler}></input>
                    <p>Followed</p>
            </RightFilter>
        </Filters>
            </TopBar>
            
        <EnitiesTale inputText={inputText}></EnitiesTale>
        </Wrapper>
    )
}

export default Entities;



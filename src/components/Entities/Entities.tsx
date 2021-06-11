import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import EntitiesFilters from './EntitiesFilters';
import EnitiesTale from './EntitiesTale';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
`;

const TopBar = styled.div`
    padding: 10px 10px;
    width: 100%;
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

const CustomSelect = styled.select``;

const Entities = () => { 

    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e : ChangeEvent<HTMLInputElement>) => { 
        const text =  e.target.value;
        setInputText(text);
    }
    
    const [sort, setSort] = useState<boolean>(true);

    const sortHandler = () => { 
             setSort(!sort);
    }

    const [layout, setLayout] = useState<boolean>(true);

    const layoutToggle = () => { 
            setLayout(!layout);
    }

    const [show, setFilters] = useState<boolean>(false);

    const showFilters = () => { 
        setFilters(!show);
    }

    const [followed, setFollowed] = useState<string>("All");

    const changeFollowed = (e : any) => { 
        const text = e.target.value;
        setFollowed(text);
    }

    return(
        <Wrapper>
         <TopBar>
             <DisplayView>                
                 <Title>Entities</Title>
                <ChangeView>
                    <Switcher onClick={layoutToggle}>
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
                <p onClick={sortHandler}>Sort</p>
                <p onClick={showFilters}>Filters</p>
                <p>FullScreen</p>
                <p onClick={() => {navigator.clipboard.writeText(window.location.href)}}>Share</p>
            </LeftFilter>
            <RightFilter>
                    <input type="text" value={inputText} onChange={inputHandler}></input>
                    <CustomSelect onChange={changeFollowed} value={followed}>
                        <option value="All">All</option>
                        <option value="Fallowed">Fallowed</option>
                    </CustomSelect>
            </RightFilter>

        </Filters>
        {show  &&
        <EntitiesFilters></EntitiesFilters>
        }
        </TopBar>
            
        <EnitiesTale inputText={inputText} sortedASC={sort} followed={followed}></EnitiesTale>
        </Wrapper>
    )
}

export default Entities;



import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import EntitiesFilters from './EntitiesFilters';
import EnitiesTale from './EntitiesTale';
import { Colors } from '../../styledHelpers/colorsUtils';
import { fontSize } from '../../styledHelpers/fontUtils';
import SmallIcon from '../Common/SmallIcon';
import SwitcherFallowed from '../Common/SwitcherFallowed';
import SearchBar from '../Common/SearchBar';

const Wrapper = styled.div<{fullScreen : boolean}>`
    background-color: #dfd5d5;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: ${({fullScreen}) => (fullScreen? '100%': 'auto')};
    position: ${({fullScreen}) => (fullScreen? 'absolute': 'static')};
    padding: ${({fullScreen}) => (fullScreen? '20px': '0')};
    top: 0;
    left: 0;
`;

const TopBar = styled.div`
    padding: 10px 10px;
    width: 100%;
    font-size: ${fontSize.mediumText};
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

const Title = styled.div`
    color: ${Colors.titleColor};
    font-size: ${fontSize.sectionTitle};
    padding-right: 15px;
`;

const Switcher = styled.div`
    margin: 0 20px;
    display: flex;
    align-items: center;

    & p { 
        padding-left: 10px;
        cursor: pointer;
    }
`;

const ChangeView = styled.div`
    display: flex;
`;

const LeftFilter = styled.div`
    display: flex;
    
    & > p { 
        margin-right:20px;
        padding-left: 10px;
    }

    & > p:hover { 
        cursor: pointer;
        font-weight: bold;
    }
`;

const RightFilter = styled.div`
    display: flex;

    & > p { 
        margin: 0 20px;
    }
`;

const InnerWrapper=styled.div`
    display: flex;
    align-items: center;
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

    const [layout, setLayout] = useState<boolean>(false);
    const layoutToggle = (e: any) => {
            const text = e.target.innerText;
            if(text == "Mosaic")
                setLayout(false);
            else 
                setLayout(true);
    }

    const [show, setFilters] = useState<boolean>(false);
    const showFilters = () => { 
        setFilters(!show);
    }

    const [fullScreen, setFullscrean] = useState<boolean>(false);
    const changeFullScreen = () => { 
        setFullscrean(!fullScreen);
    }

    const [followed, setFollowed] = useState<string>("All");
    const changeFollowed = (e : any) => { 
        const text = e.target.value;
        setFollowed(text);
    }



    return(
        <Wrapper fullScreen={fullScreen}>
         <TopBar>
             <DisplayView>          
                <InnerWrapper>  
                 <Title>Entities</Title>
                 <SmallIcon src="./media/gear.png" alt="gearIcon"/>
                </InnerWrapper>    
                <ChangeView>
                    <Switcher >
                    <SmallIcon src="./media/rectangles.png" alt="rectanglesIcon"/>
                    <p onClick={layoutToggle}>Mosaic</p>
                    </Switcher>
                    <Switcher>
                    <SmallIcon src="./media/list.png" alt="listIcon"/>
                    <p onClick={layoutToggle}>List</p>
                    </Switcher>
                </ChangeView>
             </DisplayView>
        <Filters>
            <LeftFilter>
                <p>All</p>
                <p>...</p>
                <SmallIcon src="./media/sort.png" alt="sortIcon"/>
                <p onClick={sortHandler}>Sort</p>
                <SmallIcon src="./media/filter.png" alt="filtersIcon"/>
                <p onClick={showFilters}>Filters</p>
                <SmallIcon src="./media/full-screen.png" alt="fullScreenIcon"/>
                <p onClick={changeFullScreen}>{fullScreen ? "Out Full Screen" : "Full Screen" }</p>
                <SmallIcon src="./media/share.png" alt="shareIcon"/>
                <p onClick={() => {navigator.clipboard.writeText(window.location.href)}}>Share</p>
            </LeftFilter>
            <RightFilter>
                    <SearchBar value={inputText} onChange={inputHandler} />
                    <SwitcherFallowed onChange={changeFollowed} value={followed} />
            </RightFilter>

        </Filters>
        {show  &&
        <EntitiesFilters></EntitiesFilters>
        }
        </TopBar>
            
        <EnitiesTale inputText={inputText} sortedASC={sort} followed={followed} view={layout}></EnitiesTale>
        </Wrapper>
    )
}

export default Entities;



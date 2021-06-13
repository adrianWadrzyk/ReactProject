import styled from "styled-components";

const CustomSmallIcon = styled.img`
    width: 15px;
    height: 15px;
`;

const SmallIcon = (props : any) => { 
    return(
        <CustomSmallIcon src={props.src} alt={props.alt}/>
    )
}

export default SmallIcon;
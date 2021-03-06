import styled from "styled-components";

const EditIcon = styled.img`
    width: 20px;
    height: 20px;
`;


const Edit = (props : any) => { 
    return (
        <EditIcon onClick={props.onClick} src="./media/pencil.png" alt='edit' />
    )
}

export default Edit;
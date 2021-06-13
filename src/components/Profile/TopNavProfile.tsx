import styled from 'styled-components';
import SmallIcon from '../Common/SmallIcon';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items:  center;

    p {
        margin: 10px 15px 10px 5px;
    }
`;



const TopNavProfile = () => { 
    return(
        <Wrapper>
            <SmallIcon src="./media/comment.png" alt="comment"/>
            <p>Message</p>
            <SmallIcon src="./media/request.png" alt="comment"/>
            <p>Create a request</p>
            <SmallIcon src="./media/folder.png" alt="comment"/>
            <p>Add to a cluster</p>
        </Wrapper>
    )
}

export default TopNavProfile;
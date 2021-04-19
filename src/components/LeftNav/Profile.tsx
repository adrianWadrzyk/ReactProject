import styled from 'styled-components';


const Wrapper = styled.div `
    width: 100%;
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    margin: 0px 0px 20px 0px;
`;

const Avatar = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    margin: 0 auto;
`;

const FullName = styled.h2`
    color: #4ca1e6;
`;

const JobTitle = styled.h4``;

const Profile = () => { 
    return (
        <Wrapper>
                <Avatar alt="avatar" src="./media/profile.png"></Avatar>
                <FullName>Adrian Wądrzyk</FullName>
                <JobTitle>Google Company</JobTitle>
        </Wrapper>        
    );
}

export default Profile;
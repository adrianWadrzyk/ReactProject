import styled from 'styled-components';

const Conteiner = styled.div`
    height:100%;
    font-size: 0.8em;
    display: flex;
    background-color: wheat;
`;

const authorNewest = "authorNewest";

const NewestPublication = styled.div`
    width:40%;
    height:inherit;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 10px 20px;
    & .${authorNewest} {
        padding-top: 20px;
    }
    border-right: 1px solid black;
`;

const RightConteinerPublications = styled.div`
    width: 60%;
    padding: 10px 10px;
    display: flex;
    flex-direction:  column;
    justify-content: space-between;
`;

const Header = styled.header`
    color: black;
`;

const Publication = styled.div`
    color: black;
    display: grid;
    grid-template-areas: "photo description" 
                         "photo author";
    grid-template-columns: 20% 70%;
    align-items: center;
    justify-content: center;
    height: 25%;
`;

const PublicationPhoto = styled.div`
    width: 30%;
    height: inherit;
    grid-area: photo;
`;

const PublicationDescription = styled.p`
    color: black;
    line-height: 1.2em;
    grid-area: description;
`;

const PublicationFooter = styled.footer`
    color: black;
`;

const Author = styled.div`
    grid: author;
`;

const LatestPublications = () => {
    return(
      <Conteiner>
          <NewestPublication>
            <PublicationDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellendus error explicabo iste facilis quas...and one more line for demo</PublicationDescription>
            <Author className={authorNewest}> January 25 Janik</Author>
          </NewestPublication>
          <RightConteinerPublications>
            <Header>
                Latest publications
            </Header>
            <Publication>
                <PublicationPhoto>Photo</PublicationPhoto>
                <PublicationDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellendus error explicabo iste facilis quas...and o</PublicationDescription>
                <Author> January 25 Janik</Author>
            </Publication>
            <Publication>
                <PublicationPhoto>Photo</PublicationPhoto>
                <PublicationDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellendus error explicabo iste facilis quas...and o</PublicationDescription>
                <Author> January 25 Janik</Author>
            </Publication>
            <Publication>
                <PublicationPhoto>Photo</PublicationPhoto>
                <PublicationDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellendus error explicabo iste facilis quas...and o</PublicationDescription>
                <Author> January 25 Janik</Author>
            </Publication>
            <PublicationFooter>See more publication</PublicationFooter>
          </RightConteinerPublications>
      </Conteiner>
    )
}

export default LatestPublications;
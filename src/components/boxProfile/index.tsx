import React from 'react'
import { Container, ContentDivProfile, ExitMyProfile, MyOutherProfile, MyProfileTitle } from './style';

const BoxProfile: React.FC = () => {
    return ( 
        <Container>
       <ContentDivProfile>
        <MyProfileTitle>Meu perfil</MyProfileTitle>
        <MyOutherProfile>Trocar de conta</MyOutherProfile>
        <ExitMyProfile>Sair da conta</ExitMyProfile>
       </ContentDivProfile>
    </Container>
     );
}
 
export default BoxProfile;
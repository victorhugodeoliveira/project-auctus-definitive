import React from 'react'
import { Container, ContentBoxNot, NotificationTitle } from './style';

const BoxNot: React.FC = () => {
    return ( 
        <Container>
            <ContentBoxNot>
               <NotificationTitle>Notificações</NotificationTitle> 
            </ContentBoxNot>
        </Container>
        );
}
 
export default BoxNot
import React from 'react'
import { Container, ContentBoxComent, ComentsTitle } from './style';

const BoxComent: React.FC = () => {
    return ( 
        <Container>
            <ContentBoxComent>
               <ComentsTitle>Comentarios</ComentsTitle> 
            </ContentBoxComent>
        </Container>
        );
}
 
export default BoxComent
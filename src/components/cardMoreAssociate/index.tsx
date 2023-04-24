/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import { Container,
         BoxModal,
         IconClose,
         NameProject,
         TitleProject,
         NameCompany,
         TitleCompany,
         Progress,
         ProgressState,
         Culture,
         CultureState,
         TypeSolution,
         TypeSolutionState
} 
 from './style'

 type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClose: any
}

 const CardMoreAssociate: React.FC<Props> = ({ onClose = () => {} }) => {
    
    return(
        <Container>
        <BoxModal>
         <IconClose type="button" onClick={onClose}></IconClose>
         <NameProject>Nome do Projeto:</NameProject>
         <TitleProject>.....</TitleProject>
         <NameCompany>Nome do Desenvolvedor da solução:</NameCompany>
         <TitleCompany>.....</TitleCompany>
         <Progress>Progresso atual:</Progress>
         <ProgressState>Em andamento</ProgressState>
         <Culture>Culturas do Projeto:</Culture>
         <CultureState>.....</CultureState>
         <TypeSolution>Tipo de solução</TypeSolution>
         <TypeSolutionState>.....</TypeSolutionState>
        </BoxModal>
      </Container>
    )
}

export default CardMoreAssociate
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, {} from 'react'
import { Container, Culture, CultureState, IconClose, NameCompany, NameProject, Progress, ProgressState, TitleCompany, TitleProject, TypeSolution, TypeSolutionState } from './style';
import { BoxModal } from './style';

type Props = {
    onClose: any
}

const CardMoreStartup: React.FC<Props> = ({ onClose = () => {} }) => {
 
  
  
  return ( 
    <Container>
      <BoxModal>
       <IconClose type="button" onClick={onClose}></IconClose>
       <NameProject>Nome do Projeto:</NameProject>
       <TitleProject>.....</TitleProject>
       <NameCompany>Nome da Empresa:</NameCompany>
       <TitleCompany>.....</TitleCompany>
       <Progress>Progresso atual:</Progress>
       <ProgressState>Em andamento</ProgressState>
       <Culture>Culturas do Projeto:</Culture>
       <CultureState>.....</CultureState>
       <TypeSolution>Tipo de solução</TypeSolution>
       <TypeSolutionState>.....</TypeSolutionState>
      </BoxModal>
    </Container>
   );
}
 
export default CardMoreStartup;
import React from 'react'
import { 
    Container,
    InputSeach,
    DivContent,
    TitleContent,
    MyProjectsContainer,
    MyProject,
    TitleProjects,
    CompanyName,
    Description,
    NewProjectsContainer,
    NewProject,
    TitleNewProjects
} from './style'

const Dashboard: React.FC = () => {


    return (
        <Container>
            <InputSeach type="text" placeholder='Procure aqui...'/>
            <DivContent>
                <TitleContent style={{ position: 'relative', marginBottom: 40}}>Trabalhos em progresso: 2</TitleContent>
                <MyProjectsContainer>
                    <MyProject>
                        <TitleProjects>Nome empresa: Project Farm</TitleProjects>
                        <CompanyName>Nome Projeto: Flames light</CompanyName>
                        <Description>Proposta: lorem...</Description>
                    </MyProject>
                    <MyProject>
                        <TitleProjects>Nome empresa: Project Culture</TitleProjects>
                        <CompanyName>Nome Projeto: TipsFarm</CompanyName>
                        <Description>Proposta: lorem...</Description>
                    </MyProject>
                </MyProjectsContainer>
                <TitleContent style={{position: 'relative', bottom: 50, marginTop: 70, marginBottom: 40}}>Novas propostas</TitleContent>
                <NewProjectsContainer>
                    <NewProject>
                        <TitleNewProjects>Nova Proposta: Lorem Lorem</TitleNewProjects>
                    </NewProject>
                </NewProjectsContainer>
            </DivContent>
        </Container>
        )
}

export default Dashboard
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { 
    Container, DivContent, DivImg, DivProjects, DivDash, IconProjectMore, NameProject, OngoingProjects, ProjectsProgress, Sald, TextHead, TitleUser, TitleYourSald, DivSald, DivContentSald, FinanceTitle, SaldAvailable, MethodSald, Method, Available, ButtonSald, DivContentChallenges, TitleChallenges, TitleChallengesChange, Project
} from './style'
import CardMoreStartup from '../../../../../../components/cardMoreStartup'


const Dashboard: React.FC = () => {

    const [openModal, setOpenModal] = useState(false)

    const sald = '1223,00';
    const project = '5';

    const avaliable = '00,00';
    const method = 'Paypal';
    return (
        <Container>
            <TextHead>DASHBOARD</TextHead>
            <DivDash>
                <DivContent>
                <TitleYourSald>
                Saldo atual:
                <Sald>{sald}</Sald>
                </TitleYourSald>
                <OngoingProjects>Projetos em andamento:</OngoingProjects>
                <ProjectsProgress>{project}</ProjectsProgress>
                <DivImg></DivImg>
                <TitleUser>User</TitleUser>
                </DivContent>
            </DivDash>

            <DivSald>
                <DivContentSald>
                    <FinanceTitle>Finanças:</FinanceTitle>
                    <SaldAvailable>Disponível para saque: <Available>{avaliable}</Available></SaldAvailable>
                    <MethodSald>Método de finança: <Method> {method}</Method></MethodSald>
                    <ButtonSald>Saque agora</ButtonSald>
                </DivContentSald>
            </DivSald>

            <DivProjects>
                <TitleChallenges>Desafios em andamento</TitleChallenges>
                <DivContentChallenges>
                <TitleChallengesChange>Em andamento:</TitleChallengesChange>
                <Project>
                <NameProject>Project Teste</NameProject>
                <IconProjectMore onClick={() => setOpenModal(true)}/>
                 {openModal ? ( <CardMoreStartup onClose={() => setOpenModal(false)}/> 
                 ) : null}
                </Project>
                <Project>
                <NameProject>Project Teste</NameProject>
                <IconProjectMore/>
                </Project>
                <Project>
                <NameProject>Project Teste</NameProject>
                <IconProjectMore/>
                </Project>
                <Project>
                <NameProject>Project Teste</NameProject>
                <IconProjectMore/>
                </Project>
                <Project style={{ borderBottom: '1px solid #000'}}>
                <NameProject>Project Teste</NameProject>
                <IconProjectMore/>
                </Project>
                </DivContentChallenges>
            </DivProjects>
        </Container>
        )
}

export default Dashboard
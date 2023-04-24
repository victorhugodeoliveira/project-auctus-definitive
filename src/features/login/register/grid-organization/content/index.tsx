import React from 'react'

import { 
     Container,
     DivContent,
     DivForm,
     InputRegister,
     LabelRegister,
     TitleCount,
     TitleHead,
     TitleHead2,
     TextLabel,
     DivDiv,
     TitleUserName,
     InputUserName,
     TitleEmail,
     InputEmail,
     TitlePassword,
     InputPassword, 
     ButtonSubmit} 
     
     from './style';

const Content: React.FC = () => {
    return (
       <Container>
        <DivContent>
            <TitleHead>auctus</TitleHead>
            <TitleHead2>LAB</TitleHead2>
            <TitleCount>Registre sua conta:</TitleCount>
            <DivDiv style={{ right: 100, bottom: 60 }}></DivDiv>
            <DivDiv style={{ left: 30, bottom: 100 }}></DivDiv>
            <DivForm>
            <InputRegister type="radio" id="startup" name="register" value="startup"/>
            <LabelRegister for="startup"><TextLabel>Startup</TextLabel></LabelRegister>
            <InputRegister type="radio" id="associado" name="register" value="associado"/>
            <LabelRegister for="associado"><TextLabel style={{ right: 20 }}>Associate</TextLabel></LabelRegister>
            <TitleUserName>Username</TitleUserName>
            <InputUserName type="text" required/>
            <TitleEmail>Email</TitleEmail>
            <InputEmail type="email" required/>
            <TitlePassword>Password</TitlePassword>
            <InputPassword type="password" required/>
            <ButtonSubmit type="submit" >Fazer cadastro</ButtonSubmit>
            </DivForm>
        </DivContent>
       </Container>
    );
}
 
export default Content;
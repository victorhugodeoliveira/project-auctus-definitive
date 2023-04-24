import React, { useState } from 'react'
import { ButtonReplace, Container, Email, EmailInput, IconReplace, ImageReplace, KeyPassword, NameUser, NameUserInput, Password, PasswordInput, TextProfile } from './style';
import ModalPassword from '../../../../../../components/modalPassword';

const Profile: React.FC = () => {

    const password = 'teste';
    const email = 'teste@example.com';
    const nameUser = 'name name name';

    const [openPasswordKey, setOpenPasswordKey] = useState(false)
    const handlePasswordChange = () => {
        setOpenPasswordKey(true);
    };

    return ( 
        <Container>
            <TextProfile>PROFILE</TextProfile>
            <NameUser>Nome de usuário:</NameUser>
            <NameUserInput value={nameUser} type="text" disabled="disabled"/>
            <Password>Senha:</Password>
            <PasswordInput value={password} type="password" disabled="disabled"/>
            <KeyPassword onClick={() => handlePasswordChange()}/>
            {openPasswordKey == true && <ModalPassword onClose={() => setOpenPasswordKey(false)}/>}
            <Email>Email:</Email>
            <EmailInput value={email} type="email" disabled="disabled"/>
            <ImageReplace>Alterar imagem:</ImageReplace>
            <ButtonReplace><IconReplace/></ButtonReplace>
        </Container>
     );
}
 
export default Profile;
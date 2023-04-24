/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, {} from 'react'
import { BoxModal, Container, InputNewPassword, TitleNewPassword, IconEyes, IconClose, ChangePassword, TitleOldPassword, InputOldPassword, TitleConfirmPassword, InputConfirmPassword, Submit, ButtonSubmit } from './style';


type Props = {
    onClose: any;
}

const ModalPassword: React.FC <Props> = ({ onClose = () => {} }) => {

    return ( 
        <Container>
            <BoxModal>
                <ChangePassword>Alterar senha:</ChangePassword>
                <TitleOldPassword>Senha atual:</TitleOldPassword>
                <InputOldPassword id="old-passaword" type="password"/>
                <TitleNewPassword>Nova senha:</TitleNewPassword>
                <InputNewPassword id="new-passaword" type="password"/>
                <TitleConfirmPassword>Confirme a senha:</TitleConfirmPassword>
                <InputConfirmPassword id="confirm-passaword" type="password"/>
                <IconEyes/>
                <IconClose onClick={onClose}/>
                <ButtonSubmit><Submit/></ButtonSubmit>
            </BoxModal>
        </Container>
     );
}
 
export default ModalPassword;


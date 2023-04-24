import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../../../utils/auth';

import {
  Container,
  DivContent,
  TitleHead,
  TitleHead2,
  TitleCount,
  DivForm,
  TextEmail,
  InputEmail,
  TextPassaword,
  InputPassaword,
  TextRemeber,
  RememberCheck,
  ButtonSubmit,
  TitleEnd,
  IconTerms,
  TextUserName,
  InputUserName,
} from './style';

const Content: React.FC = () => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(loginData.username, loginData.password);
      navigate('/');
    } catch (error) {
      console.error('Erro no login:', error);
      setErrorMessage('Falha no login. Por favor, verifique suas credenciais e tente novamente.');
    }
  };

  return (
    <Container>
      <DivContent>
        <TitleHead>auctus</TitleHead>
        <TitleHead2>LAB</TitleHead2>
        <TitleCount>Acesse sua conta</TitleCount>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <DivForm onSubmit={handleSubmit}>
          <TextUserName>Username</TextUserName>
          <InputUserName type="text" name="username" value={loginData.username} onChange={handleChange} required />
          <TextEmail>Email</TextEmail>
          <InputEmail type="email" name="email" />
          <TextPassaword>Passaword</TextPassaword>
          <InputPassaword type="password" name="password" value={loginData.password} onChange={handleChange} required />
          <TextRemeber>Lembrar de mim</TextRemeber>
          <RememberCheck type="checkbox" />
          <ButtonSubmit type="submit">Fazer login</ButtonSubmit>
          <TitleEnd style={{ right: 1360, top: 185 }}>Não tem conta?</TitleEnd>
          <TitleEnd style={{ color: '#007fff', top: 185, right: 1370, cursor: 'pointer' }}>Registrar-se</TitleEnd>
          <TitleEnd style={{ color: '#007fff', top: 210, right: 1530, cursor: 'pointer' }}>Esqueceu da senha?</TitleEnd>
          <TitleEnd style={{ color: '#007fff', top: 235, right: 1620, cursor: 'pointer' }}>Termos de uso</TitleEnd>
          <IconTerms />
        </DivForm>
      </DivContent>
    </Container>
  );
};

export default Content;
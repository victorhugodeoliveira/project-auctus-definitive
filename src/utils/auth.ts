import apiClient from "./api";

export async function checkToken() {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  if (!accessToken || !refreshToken) {
    return false;
  }

  try {
    // Verificar se o token de acesso ainda é válido
    const response = await apiClient.post('/api/token/verify/', { token: accessToken });

    if (response.status === 200) {
      // O token de acesso ainda é válido
      return true;
    }
  } catch (error) {
    console.error('Erro ao verificar o token de acesso:', error);
  }

  // Se chegarmos até aqui, o token de acesso não é válido ou expirou
  // Tentar atualizar o token de acesso usando o token de atualização
  try {
    const response = await apiClient.post('/api/token/refresh/', { refresh: refreshToken });

    if (response.status === 200) {
      // Atualizar o token de acesso no armazenamento local
      const newAccessToken = response.data.access;
      localStorage.setItem('accessToken', newAccessToken);

      // O token de acesso foi atualizado com sucesso
      return true;
    }
  } catch (error) {
    console.error('Erro ao atualizar o token de acesso:', error);
  }

  // Se chegarmos até aqui, a atualização do token também falhou
  // Limpar os tokens e redirecionar o usuário para a página de login
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');

  return false;
}

export async function login(username: string, password: string) {
  try {
    const response = await apiClient.post('/api/token/', {
      username,
      password,
    });

    if (response.status === 200) {
      const accessToken = response.data.access;
      const refreshToken = response.data.refresh;

      // Armazenar os tokens no armazenamento local
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      // Adicionar o token JWT no cabeçalho de todas as solicitações futuras
      apiClient.defaults.headers.Authorization = `Bearer ${accessToken}`;

      return true;
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error);
  }

  return false;
}
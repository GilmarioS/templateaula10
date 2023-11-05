import React, { useState } from 'react';
import { Box, FormControl, InputLabel, Input, FormHelperText, Button, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Login = ({ onLogin }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const maxLoginAttempts = 3; // Limite de tentativas

  const handleLogin = () => {
    if (login === 'Gilmario' && password === '123') {
      onLogin();
    } else {
      const remainingAttempts = maxLoginAttempts - (loginAttempts + 1);

      if (remainingAttempts === 0) {
        // Limite de tentativas atingido, fecha a página
        window.close();
      } else {
        setLoginAttempts(loginAttempts + 1);
        setShowAlert(true);
      }
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <FormControl sx={{ marginBottom: '16px' }}>
        <InputLabel htmlFor="login_nome">Login</InputLabel>
        <Input
          id="login_nome"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          sx={{
            background: '#f0f0f0',
            borderRadius: '8px',
            padding: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            border: '1px solid #007bff', // Cor azul
          }}
        />
        <FormHelperText id="login_nome_helper_text">Nome de usuário ou e-mail.</FormHelperText>
      </FormControl>

      <FormControl sx={{ marginBottom: '16px' }}>
        <InputLabel htmlFor="login_senha">Senha</InputLabel>
        <Input
          id="login_senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            background: '#f0f0f0',
            borderRadius: '8px',
            padding: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            border: '1px solid #007bff', // Cor azul
          }}
        />
        <FormHelperText id="login_senha_helper_text">Senha.</FormHelperText>
      </FormControl>

      <Button
        variant="contained"
        color="primary"
        onClick={handleLogin}
        sx={{
          background: '#007bff', // Cor azul
          color: '#fff',
          borderRadius: '8px',
          padding: '10px 20px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        Login
      </Button>

      <Snackbar
        open={showAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <MuiAlert
          onClose={handleCloseAlert}
          severity="error"
          sx={{ backgroundColor: '#FFA500', color: '#fff' }}
        >
          Credenciais inválidas. {loginAttempts === 2 ? 'Esta é sua última tentativa.' : `Restam ${maxLoginAttempts - loginAttempts} tentativas.`}
        </MuiAlert>
      </Snackbar>
    </Box>
  );
};

export default Login;

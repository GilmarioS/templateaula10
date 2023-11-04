import React, { useState } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Button, Grid } from '@mui/material';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica para autenticar o usuário com o nome de usuário e senha inseridos.
    // Por exemplo, você pode fazer uma solicitação à sua API para verificar as credenciais.
    console.log('Login:', login);
    console.log('Password:', password);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel htmlFor="login_nome">Login</InputLabel>
          <Input
            id="login_nome"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <FormHelperText id="login_nome_helper_text">Nome de usuário ou e-mail.</FormHelperText>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel htmlFor="login_senha">Senha</InputLabel>
          <Input
            id="login_senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormHelperText id="login_senha_helper_text">Senha.</FormHelperText>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
      </Grid>
    </Grid>
  );
};

export default Login;

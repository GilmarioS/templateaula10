import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

function BotaoSair() {
  const history = useHistory();

  const handleSair = () => {
    history.push('/login');
  };

  return (
    <Button
      variant="contained"
      color="warning" // Defina a cor laranja aqui
      onClick={handleSair}
    >
      Sair
    </Button>
  );
}

export default BotaoSair;

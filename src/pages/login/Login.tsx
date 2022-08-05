import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import "./Login.css";
import UsuarioLogin from '../../models/UsuarioLogin';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { api } from '../../services/Services';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link to="/home" color="inherit" >
        Sebo Maresia
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {

  let history = useNavigate();
  const [token, setToken] = useLocalStorage("token");
  const [usuarioLogin, setUsuarioLogin] = React.useState<UsuarioLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    dataNascimento: "",
    token: "",
  });

  //verifica se o token foi altera e envia para o home
  React.useEffect(() => {
    if(token != ""){
      history("/home");
    }
  }, [token]);


  // função que atualiza o estado do usuarioLogin na model
  const updatedModel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsuarioLogin({ ...usuarioLogin, [e.target.name]: e.target.value });
  }
  // função que faz o login do usuario
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('usuario'),
    //   password: data.get('senha'),
    //  });

    try {
      const resposta = await api.post("/usuarios/logar", usuarioLogin);
      setToken(resposta.data.token);
      alert('Usuário logado com sucesso!');
    }catch(error){
      alert('Usuário ou senha inválidos!');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={3} className="container">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Entrar
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              value={usuarioLogin.usuario}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              margin="normal"
              required
              fullWidth
              id="usuario"
              label="Digite seu email"
              name="usuario"
              autoComplete="email"
              autoFocus
            />
            <TextField
              value={usuarioLogin.senha}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              margin="normal"
              required
              fullWidth
              name="senha"
              label="Senha"
              type="password"
              id="senha"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembrar-me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Logar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/" >
                  Esqueceu a senha?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/cadastrousuario" >
                  {"Não tem conta? Cadastre-se"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      </Paper>
    </ThemeProvider>
  );
}
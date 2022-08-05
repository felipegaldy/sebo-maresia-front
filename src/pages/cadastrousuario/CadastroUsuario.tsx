import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "./CadastroUsuario.css";
import { useNavigate } from "react-router-dom";
import Usuario from "../../models/Usuario";
import { cadastroUsuario } from "../../services/Services";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link to="/home" color="inherit">
        Sebo Maresia
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  let history = useNavigate();

  const [confirmarSenha, setConfirmarSenha] = React.useState<string>("");
  const [user, setUser] = React.useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    dataNascimento: "",
  });

  const [userResult, setUserResult] = React.useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    dataNascimento: "",
  });

  React.useEffect(() => {
    if (userResult.id != 0) {
      history("/login");
    }
  }, [userResult]);

  function confirmarSenhaHandle(e: React.ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  function updatedModel(e: React.ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Estrutura Condicional que verifica se as senhas batem e se a Senha tem mais de 8 caracteres
    if (confirmarSenha === user.senha && user.senha.length >= 8) {
      //Tenta executar o cadastro
      try {
        await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult);
        alert("Usuário cadastrado com sucesso");

        //Se houver erro, pegue o Erro e retorna uma msg
      } catch (error) {
        console.log(`Error: ${error}`);

        //Pode modificar a msg de acordo com o erro
        alert("Usuário já existente");
      }
    } else if (confirmarSenha !== user.senha) {
      alert("As senhas não combinam."); // Mensagem que indica que as senham nao são iguai

      // Reinicia o campo de Confirmar Senha
    } else {
      alert("Insira no miníno 8 caracteres na senha."); // Mensagem que indica a quantidade minima de caracteres
      setUser({ ...user, senha: "" }); // Reinicia o campo de Senha
      setConfirmarSenha("");
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
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Cadastrar
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    value={user.nome}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      updatedModel(e)
                    }
                    autoComplete="given-name"
                    name="nome"
                    required
                    fullWidth
                    id="nome"
                    label="Nome"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={user.usuario}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      updatedModel(e)
                    }
                    required
                    fullWidth
                    id="usuario"
                    label="Digite seu email"
                    name="usuario"
                    autoComplete="usuario"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={user.senha}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      updatedModel(e)
                    }
                    required
                    fullWidth
                    name="senha"
                    label="Senha"
                    type="password"
                    id="senha"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={confirmarSenha}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      confirmarSenhaHandle(e)
                    }
                    required
                    fullWidth
                    name="confirmarSenha"
                    label="Confirmar Senha"
                    type="password"
                    id="confirmarSenha"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    value={user.foto}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      updatedModel(e)
                    }
                    required
                    fullWidth
                    id="foto"
                    label="Foto"
                    name="foto"
                    autoComplete="foto"
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    value={user.dataNascimento}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      updatedModel(e)
                    }
                    required
                    fullWidth
                    id="dataNascimento"
                    label="Data de nascimento"
                    name="dataNascimento"
                    autoComplete="foto"
                    type={"date"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="Eu quero receber promoções por email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Cadastrar
              </Button>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link to="/login">Ja possui uma conta? Entrar</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </Paper>
    </ThemeProvider>
  );
}

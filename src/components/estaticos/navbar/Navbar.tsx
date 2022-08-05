import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { InputBase, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import "./Navbar.css";
import useLocalStorage from 'react-use-localstorage';
import { useNavigate } from 'react-router-dom';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: `25px`,
  border: `1px solid ${theme.palette.grey[800]}`,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
 
function Navbar() {
  
  // const [token, setToken] = useLocalStorage("token");
  // const [login, setLogin] = React.useState("");

  // React.useEffect(() => {
  //   if(token != ""){
  //     console.log("token: " + token);
  //   }
  // }, [token]);

  // const testeModificar = () => {
  //   let nome = document.querySelector(".botoes-top")?.;
  //   nome.innerHTML = "teste";
  // }


  return (
    <>
      <AppBar position="static" className="top-app-bar-container">
        <Toolbar className="top-toolbar">
          <Box>
            <Button className="texto-whats botoes-top">
              <WhatsAppIcon className="iconeWhats" /> Fale conosco via whatsapp
            </Button>
          </Box>
          <Box>
            <Link to="/login" className="text-decorator-none cursor">
            <Button className="botoes-top" color="inherit">
              Login
            </Button>
            </Link >{" "}
            |{" "}
            <Link to="/cadastrousuario" className="text-decorator-none cursor">
            <Button className="botoes-top" color="inherit">
              Cadastrar
            </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      {/* PARTE 2 DO HEADER COMEÇA AQUI*/}
      <AppBar position="static" className="app-bar-container" color="inherit">
        <Toolbar className="header-toolbar">
        <Link to="/home" className="text-decorator-none cursor">
          <Typography
            variant="h6"
            noWrap
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            className="logo"
          >
            SEBO MARESIA
          </Typography>
          </Link>
          <Box className="box-search-icones-shop">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <PersonIcon className="icones" />
          <ShoppingCartIcon className="icones" />
          </Box>
        </Toolbar>
        <Box className="box-botoes-sobrenos-contato">
          <Link to="/sobrenos" className="text-decorator-none cursor">
            <Button className="botoes-top botoes-sobrenos-contato" variant="text" >
              Quem somos
            </Button>
            </Link>{" "}
            |{" "}
            <Link to="/contato" className="text-decorator-none cursor">
            <Button className="botoes-top botoes-sobrenos-contato" color="inherit">
              Contato
            </Button>
            </Link>
          </Box>
        <Box className="nav-botoes">
          <Button variant="text" className="botao-nav" >Romances</Button>
          <Button variant="text" className="botao-nav">Ficção</Button>
          <Button variant="text" className="botao-nav">Suspense</Button>
          <Button variant="text" className="botao-nav">Terror</Button>
          <Button variant="text" className="botao-nav">Infantil</Button>
          <Button variant="text" className="botao-nav">Auto-Ajuda</Button>
        </Box>
      </AppBar>
    </>
  );
}

export default Navbar;

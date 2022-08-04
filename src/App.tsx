import React from "react";
import "./App.css";
import Navbar from "./components/estaticos/navbar/Navbar";
import Carrosel from "./components/carrosel/Carrosel";
import Home from "./pages/home/Home";
import Footer from "./components/estaticos/footer/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./pages/login/Login";
import SobreNos from "./pages/sobrenos/SobreNos";
import CadastroUsuario from "./pages/cadastrousuario/CadastroUsuario";
import CadastroProduto from "./pages/cadastroproduto/CadastroProduto";
import Contato from "./pages/contato/Contato";

function App() {
  return (
    <>
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/sobrenos" element={<SobreNos />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/cadastrousuario" element={<CadastroUsuario />} />
        <Route path="/cadastroproduto" element={<CadastroProduto />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;

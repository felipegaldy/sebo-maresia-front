interface UsuarioLogin {
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto: string;
    dataNascimento: string;
    token?: string | null;
}

export default UsuarioLogin;
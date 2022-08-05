import axios from "axios";

export const api = axios.create({
    baseURL: "https://sebomaresia.herokuapp.com"
})

export const login = async (url: any, dados: any, setDados: any) => {
    try {
        const response = await api.post(url, dados);
        setDados(response.data);
    } catch (error) {
        console.log(error);
    }
}

export const cadastroUsuario = async (url: any, dados: any, setDados: any) => {
    try {
        const response = await api.post(url, dados);
        setDados(response.data);
    } catch (error) {
        console.log(error);
    }
}
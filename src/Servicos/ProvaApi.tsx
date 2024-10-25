import axios from 'axios';
import { Usuario } from '../Interfaces/Usuario';


const apiClient = axios.create({
    baseURL: 'https://scholarspace-254954748843.southamerica-east1.run.app/api',
    headers:{
        'Content-Type': 'application/json'
    }
})


export const CriarUsuario = (dadosUsuario: Usuario) =>{
    return apiClient.post('/User', dadosUsuario)
}

export const AtualizarUsuario = (dadosUsuario: Usuario) =>{
    return apiClient.put('/User/UpdateUser', dadosUsuario)
}

export const DeletarUsuario = (id: string) =>{
    return apiClient.delete(`/UserController/DeleteUser/${id}`)
}

export const ListarUsuarios = () =>{    
    return apiClient.get('/UserController/GetAll')
}

export const FetchShareBySymbol = async (symbol: string) =>{
    try {
        const response = await apiClient.get(`/Share/${symbol}`,
            {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error('Erro ao logar: ', error);
        throw error;
    }
}


export const FetchShareListPaged = async (page: number, resultsByPage: number) =>{
    try {
        const response = await apiClient.get(`/Share/${page}, ${resultsByPage}`,
            {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error('Erro ao retornar lista de ações paginada: ', error);
        throw error;
    }
}

export const FetchAllShares = async () =>{
    try {
        const response = await apiClient.get(`/Share`,
            {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error('Erro ao retornar a lista completa de ações: ', error);
        throw error;
    }
}

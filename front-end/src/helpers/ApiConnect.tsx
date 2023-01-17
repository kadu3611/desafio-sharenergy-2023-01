import axios from 'axios';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

const BASE_URL = 'http://localhost:3003';

const getAll = async () => axios
    .get(`${BASE_URL}/users`)
    .then(response => {
        const { data, status } = response;
        if (status !== 200) throw new Error()
        return data

    })

const registerUser = async (nome: string,
    email: string, telefone: number, endereço: string, cpf: number) => axios
        .post(`${BASE_URL}/users`, { nome, email, telefone, endereço, cpf })
        .then(response => {
            const { data, status } = response;
            if (status !== 200) throw new Error()
            return data
        });

const updatUser = async (id: string, nome: string, email: string,
    telefone: number, endereço: string, cpf: number) => axios
        .put(`${BASE_URL}/users/${id}`, {
            id, nome, email,
            telefone, endereço, cpf
        })
        .then(response => {
            const { data, status } = response;
            if (status !== 200) throw new Error()
            return data
        });

const findById = async (id: string) => axios
    .get(`${BASE_URL}/users/${id}`)
    .then(response => {
        const { data, status } = response;
        if (status !== 200) throw new Error()
        return data
    });

const deleteClient = async (id: string) => axios
    .delete(`${BASE_URL}/users/${id}`)
    .then(response => {
        const { data, status } = response;
        if (status !== 200) throw new Error()
        return data
    });

export {
    getAll,
    registerUser,
    updatUser,
    findById,
    deleteClient
}
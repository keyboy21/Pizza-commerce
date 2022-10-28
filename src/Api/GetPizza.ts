
import axios from 'axios'
import { Pizza } from '../Types/Pizza'

export const getPizza = async (page = 0): Promise<Pizza[]> => await (await axios.get<Pizza[]>(`https://62e80700249bb1284ea76a24.mockapi.io/api/pizza/Posts?page=${page}&limit=8`)).data
export const getOnePizza = async (id: string | undefined): Promise<Pizza> => await (await axios.get<Pizza>(`https://62e80700249bb1284ea76a24.mockapi.io/api/pizza/Posts/${id}`)).data

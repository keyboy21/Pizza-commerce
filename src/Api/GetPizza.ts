
import axios from 'axios'
import { Pizza } from '../Types/Pizza'

export const getPizza = async (): Promise<Pizza[]> => await (await axios.get<Pizza[]>('https://62e80700249bb1284ea76a24.mockapi.io/api/pizza/Posts')).data
export const getOnePizza = async (id: string | undefined): Promise<Pizza> => await (await axios.get<Pizza>(`https://62e80700249bb1284ea76a24.mockapi.io/api/pizza/Posts/${id}`)).data

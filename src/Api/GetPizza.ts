
import axios from 'axios'
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';
import { Pizza } from '../Types/Pizza'

export const getPizzas = async (page = 1, category: number, sort: string): Promise<Pizza[]> => await (await axios.get<Pizza[]>(`https://${import.meta.env.VITE_KEY}.mockapi.io/api/pizza/Posts?sortBy=${sort}&order=desc`, { params: pickBy({ page, limit: 8, category }, identity) })).data

export const getOnePizza = async (id: string | undefined): Promise<Pizza> => await (await axios.get<Pizza>(`https://62e80700249bb1284ea76a24.mockapi.io/api/pizza/Posts/${id}`)).data

export const getPizza = async (): Promise<Pizza[]> => await (await axios.get<Pizza[]>(`https://62e80700249bb1284ea76a24.mockapi.io/api/pizza/Posts`)).data


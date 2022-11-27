
import axios from 'axios'
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';
import { Pizza } from '../Types/Pizza'

export const getPizzas = async (page = 1, category: number = 0, sort: { sortProperty: string; order: string } = { sortProperty: 'rating', order: 'desc' }): Promise<Pizza[]> => await (await axios.get<Pizza[]>(`https://${import.meta.env.VITE_KEY}.mockapi.io/api/pizza/Posts?`, { params: pickBy({ page, limit: 8, category, sortBy: sort.sortProperty, order: sort.order }, identity) })).data

export const getOnePizza = async (id: string | undefined): Promise<Pizza> => await (await axios.get<Pizza>(`https://${import.meta.env.VITE_KEY}.mockapi.io/api/pizza/Posts/${id}`)).data

export const getPizza = async (): Promise<Pizza[]> => await (await axios.get<Pizza[]>(`https://${import.meta.env.VITE_KEY}.mockapi.io/api/pizza/Posts`)).data


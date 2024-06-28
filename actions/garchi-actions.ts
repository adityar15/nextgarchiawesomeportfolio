"use server"

import { GarchiItemAPIResponse } from "@/types/garchi"
import garchi from "@/utils/garchi"

export default async function loadItems(page: number = 1){
    const data = await garchi.garchiGetRequest(`items?page=${page}&size=3`) as GarchiItemAPIResponse
    return data
}

export async function semanticSearch(query: string){
    return await garchi.garchiGetRequest(`items/semantic-search?q=${query}&threshold=0.7`, false) as GarchiItemAPIResponse
}
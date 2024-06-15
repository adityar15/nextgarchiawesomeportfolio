"use server"

import { GarchiItemAPIResponse } from "@/types/garchi"
import garchi from "@/utils/garchi"

export default async function loadItems(page: number = 1){
    const data = await garchi.garchiGetRequest(`items?page=${page}&size=3`) as GarchiItemAPIResponse
    return data
}
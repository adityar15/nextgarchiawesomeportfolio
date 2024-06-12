import { GarchiAsset, GarchiPage } from "@/types/garchi"

class GarchiHelper {

    private baseHeaders : {[x:string] : any }
    private GARCHI_URL: string

    constructor() {
        this.baseHeaders = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${process.env.GARCHI_API_KEY}`
        }
        this.GARCHI_URL = process.env.GARCHI_API_URL as string
    }

    // function to make POST API requests to Garchi
    async garchiPostRequest(endpoint: string, payload: any){
        const response = await fetch(`${this.GARCHI_URL}/${endpoint}`, {
            method: 'POST',
            headers: {
                ...this.baseHeaders,
            },
            next: {
                revalidate: 10
            },
            body: JSON.stringify(payload)
        })
        return await response.json()
    }

    // function to make GET API requests to Garchi
    async garchiGetRequest(endpoint: string){
        const response = await fetch(`${this.GARCHI_URL}/${endpoint}`, {
            method: 'GET',
            headers: this.baseHeaders,
        })
        return await response.json()
    }

    // example function to call page api using garchiPostRequest
    async getGarchiPage(spaceUID: string, mode: "draft" | "live" = "draft" ,pageSlug: string = "/") : 
        Promise<GarchiPage>
    {
        const response = await this.garchiPostRequest("page", {
            space_uid: spaceUID,
            mode,
            slug: pageSlug
        })

        return response
    }
    
    // example function to call asset api using garchiGetRequest
    async getGarchiAsset(spaceUID: string, assetName: string) : Promise<GarchiAsset>
    {
        const response = await this.garchiGetRequest(`space/assets/${assetName}?space_uid=${spaceUID}`)
        return response
    }

}

export default new GarchiHelper()
import Page from "@/components/garchi/Page"
import garchiHelper from "@/utils/garchi"
import { Metadata } from "next"

type Props = { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata>{
    const page = await garchiHelper.getGarchiPage("62931923-b209-4e5c-9b91-57065cb443d279df607f-3026-45de-b684-5bee", "draft", "/"+params.slug)
    
    return {
        title: page.title,
        description: page.description,
    
    }
}


export default function DynamicPage({ params }: Props) {
    return <Page slug={`/${params.slug}`} />
}
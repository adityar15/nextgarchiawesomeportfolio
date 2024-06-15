
import Heading from "@/components/garchi/Heading"
import Markdown from "@/components/garchi/Markdown"
import { TracingBeam } from "@/components/ui/tracing-beam"
import { GarchiItemAPIResponse } from "@/types/garchi"
import garchiHelper from "@/utils/garchi"
import { Metadata } from "next"
import { notFound } from "next/navigation"

type Props = { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {

    const article = await garchiHelper.garchiGetRequest("item/" + params.slug) as GarchiItemAPIResponse
    return {
        title: article.data ? article?.data[0]?.name : `Article not found`,
        description: article.data ? article?.data[0]?.one_liner : `Article not found`,
    }
}


export default async function ArticlePage({ params }: Props) {

    const article = await garchiHelper.garchiGetRequest("item/" + params.slug) as GarchiItemAPIResponse

    if (!article.data)
        return notFound()

    return (
        <TracingBeam>
            <Heading level="h1" text={article.data[0].name as string} className="mt-20" />
            <Markdown content={article.data[0].description as string} className="my-20" />
        </TracingBeam>
    )
}
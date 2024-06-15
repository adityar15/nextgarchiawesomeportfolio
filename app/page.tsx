import loadItems from "@/actions/garchi-actions"
import Pagination from "@/components/app/Pagination"
import Heading from "@/components/garchi/Heading"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import Container from "@/components/ui/container"


const steps = [
  "Provide your api key in .env",
  "Create your first page on <a className='underline text-red-500' href='https://garchi.co.uk'>Garchi CMS</a>",
  "Check out components/garchi folder for example components",
  "Check out types/garchi.d.ts for types",
  "Check out utils/garchi.ts for helper functions",
]

type Props = {
  searchParams?: {
    page?: string;
  };
}
export default async function Home({ searchParams }: Props) {

  const articles = await loadItems(searchParams?.page ? parseInt(searchParams.page) : 1)


  return (
    <Container className="my-10 flex flex-col gap-10">
      <Heading level="h1" text="From the blog" />

      <div className="grid grid-cols-3 gap-2">
        {articles.data.map((article, index) => {
          return <HoverEffect key={index} idx={index} title={article.name}
            description={article.one_liner}
            link={`/blog/${article.slug}`} />
        })}

      </div>



      <Pagination lastPage={articles.meta.last_page} current={articles.meta.current_page} />
    </Container>
  )
}

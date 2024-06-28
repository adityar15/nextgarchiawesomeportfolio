import loadItems, { semanticSearch } from "@/actions/garchi-actions"
import Pagination from "@/components/app/Pagination"
import Heading from "@/components/garchi/Heading"
import SearchBox from "@/components/garchi/SearchBox"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import Container from "@/components/ui/container"
import { GarchiItem } from "@/types/garchi"



type Props = {
  searchParams?: {
    page?: string;
    query?: string;
  };
}
export default async function Home({ searchParams }: Props) {


  const articles = await loadItems(searchParams?.page ? parseInt(searchParams.page) : 1)

   
  let searchedArticles
  
  if(searchParams?.query){
    searchedArticles = await semanticSearch(searchParams.query)
  }

  return (
    <Container className="my-10 flex flex-col gap-10">
      <SearchBox dataset={(searchedArticles?.data as GarchiItem[])} labels={['name', 'one_liner']} />
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

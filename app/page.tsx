import Page from '@/components/garchi/Page'


const steps = [
  "Provide your api key in .env",
  "Create your first page on <a className='underline text-red-500' href='https://garchi.co.uk'>Garchi CMS</a>",
  "Check out components/garchi folder for example components",
  "Check out types/garchi.d.ts for types",
  "Check out utils/garchi.ts for helper functions",
]


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Page slug="/" />
    </main>
  )
}

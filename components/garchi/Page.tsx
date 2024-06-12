// server component
import garchiHelper from "@/utils/garchi"
import GarchiComponent from "./GarchiComponent"

type Props = {
    slug: string
}

export default async function Page({slug}: Props) {

  const page = await garchiHelper.getGarchiPage("62931923-b209-4e5c-9b91-57065cb443d279df607f-3026-45de-b684-5bee", "draft", slug)
    
  return (
    <>
      {page.sections?.map((section, index) => (
        <GarchiComponent key={index} section={section} />
      ))}
    </>
  )
}

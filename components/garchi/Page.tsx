// server component
import garchiHelper from "@/utils/garchi"
import GarchiComponent from "./GarchiComponent"

type Props = {
    slug: string
}

export default async function Page({slug}: Props) {

  const page = await garchiHelper.getGarchiPage("your space uid", "draft", slug)
   
  return (
    <>
      {page.sections?.map((section, index) => (
        <GarchiComponent key={index} section={section} />
      ))}
    </>
  )
}

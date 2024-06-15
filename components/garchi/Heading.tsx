import { cn } from '@/utils/cn'
import React from 'react'

type Props = {
    level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
    text: string | React.ReactNode
    className?: string
    [key: string]: any
}

const Heading = ({level, text, className, ...props}: Props) => {
  
  const Tag = level

  const classMap = {
    "h1": "text-4xl font-bold",
    "h2": "text-3xl font-bold",
    "h3": "text-2xl font-bold",
    "h4": "text-xl font-bold",
    "h5": "text-lg font-bold",
    "h6": "text-base font-bold",
  }
  
  return (
    <Tag className={cn(classMap[level], 'text-slate-50', className)} {...props}>
        {text}
    </Tag>
  )
}

export default Heading
import { cn } from '@/utils/cn'
import React from 'react'

type Props = {
    [x: string]: unknown
    children: React.ReactNode
    className?: string
}

const Container = ({children, className, ...props}: Props) => {
  return (
    <div className={cn('max-w-5xl p-2 mx-auto', className)} {...props}>
        {children}
    </div>
  )
}

export default Container
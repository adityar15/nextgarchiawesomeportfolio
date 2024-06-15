import { cn } from '@/utils/cn'
import React, { forwardRef } from 'react'
import DOMPurify from 'isomorphic-dompurify'

type Props = {
    content: string
    className?: string
    [key: string]: unknown
}

const Markdown = forwardRef(({ content, className, ...props }: Props) => {

    const clean = DOMPurify.sanitize(content)

    return (
        <div className={cn('prose prose-invert max-w-none', className)} {...props} dangerouslySetInnerHTML={{ __html: clean }}>
        </div>
    )
})

export default Markdown
"use client"
import { cn } from '@/utils/cn'
import {
    Combobox,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
    Dialog,
    DialogPanel,
    DialogBackdrop,
} from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ChangeEvent, useEffect, useState } from 'react'

import { useDebouncedCallback } from 'use-debounce';

const projects = [
    { id: 1, name: 'Workflow Inc. / Website Redesign', url: '#' },
    // More projects...
]

type Props = {
    dataset: Record<string, unknown>[]
    className?: string
    labels: string[]
    [x: string]: unknown
}


export default function SearchBox({
    dataset,
    className,
    labels,
    ...props
} : Props) {
    const [query, setQuery] = useState('')
    const [open, setOpen] = useState(false)

    const searchParams = useSearchParams()
    const pathname = usePathname();
    const { replace, push } = useRouter();

    useEffect(() => {
        // listen for keydown events
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === '/') {
                event.preventDefault()
                setOpen(true)
            }
        }
        window.addEventListener('keydown', handleKeyDown)

    }, [])

    const handleInputFocus = useDebouncedCallback((event: ChangeEvent<HTMLInputElement>) => {
        let term = event.target.value
        setQuery(term)

        const params = new URLSearchParams(searchParams);

        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }

        replace(`${pathname}?${params.toString()}`);
    }, 300)

    const handleBlur = () => {
        setQuery('')
        const params = new URLSearchParams(searchParams);
        params.delete('query');
    }

    const handleClose = () => {
        setOpen(false)
    }


    const handleItemChange = (item: any) => {
        if(!item) return
        push(`/blog/${item?.slug}`)
    }



    return (
        <Dialog
            className="relative z-50"
            open={open}
            onClose={handleClose}
        >
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
                <DialogPanel
                    transition
                    className="mx-auto max-w-2xl transform divide-y divide-gray-500 divide-opacity-20 overflow-hidden rounded-xl bg-gray-900 shadow-2xl transition-all data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                >
                    <Combobox
                        onChange={handleItemChange}
                    >
                        <div className="relative">
                            <MagnifyingGlassIcon
                                className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-500"
                                aria-hidden="true"
                            />
                            <ComboboxInput
                                autoFocus
                                className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-white focus:ring-0 sm:text-sm"
                                placeholder="Search..."
                                onChange={handleInputFocus}
                                onBlur={handleBlur}
                            />
                        </div>

                        {(query === '' || dataset?.length > 0) && (
                            <ComboboxOptions
                                static
                                as="ul"
                                className="max-h-80 scroll-py-2 divide-y divide-gray-500 divide-opacity-20 overflow-y-auto"
                            >
                                <li className="p-2">
                                    <ul className="text-sm text-gray-400">
                                        {query === '' ? <></> : dataset?.map((dataItem, index) => (
                                            <ComboboxOption
                                                key={index}
                                                value={dataItem}
                                                className={({ focus }) =>
                                                    cn(
                                                        'flex flex-col cursor-default select-none gap-2 rounded-md px-3 py-2',
                                                        focus && 'bg-gray-800 text-white',
                                                    )
                                                }
                                            >
                                                {({ focus }) => (
                                                    <>
                                                        {
                                                            labels.map((l, i) => (  <span key={i} className="ml-3 flex-auto truncate">{dataItem[l] as string}</span>))
                                                        }
                                                    </>
                                                )}
                                            </ComboboxOption>
                                        ))}
                                    </ul>
                                </li>
                            </ComboboxOptions>
                        )}
                    </Combobox>
                </DialogPanel>
            </div>
        </Dialog>
    )
}

import { cn } from '@/utils/cn'
import Link from 'next/link'

type Props = {
    lastPage: number
    current: number

}

const range = (start: number, end: number) => {
    return {
        [Symbol.iterator]: function* () {
            for (let i = start; i <= end; i++) {
                yield i;
            }
        }
    };
};



export default function Pagination({
    lastPage, current
}: Props) {

    return (
        <nav className="w-full flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
            <div className="hidden md:-mt-px md:flex">
                {
                    Array.from(range(1, lastPage), num => num ).map((l, idx) => (

                        <Link
                            key={idx}
                            href={`/?page=${l}`}
                            className={cn(`inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium 
                        text-gray-500 hover:border-gray-300 hover:text-gray-700`, l == current && 'border-indigo-500 text-indigo-600')}
                        >
                            {l}
                        </Link>


                    )
                    )
                }
            </div>
        </nav>
    )
}

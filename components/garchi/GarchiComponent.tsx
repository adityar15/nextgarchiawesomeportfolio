// dynamic component loader for Garchi components

import { GarchiSection } from '@/types/garchi'
import dynamic from 'next/dynamic'
import React from 'react'

type Props = {
    section: GarchiSection
}

export default function GarchiComponent({ section }: Props) {

    if (!section)
        return <></>

    //   assuming all components that registered on Garchi are kept in components/garchi folder

    const Component = dynamic(() => import(`./${section.name}`).catch( err => () => <></>))
    
    const componentProps = section?.children ? {
        ...section.props,
        subSections: section.children
    } : section.props

    return (
        <Component {...componentProps} />
    )





}
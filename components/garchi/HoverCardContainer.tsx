import { HoverEffect } from "@/components/ui/card-hover-effect";
import { GarchiSection } from "@/types/garchi";
import Container from "../ui/container";

type Props = {
    subSections: GarchiSection[],
    [key: string]: unknown
}


export default function HoverCardContainer({
    subSections,
    ...props
}: Props) {
    return (
        <Container className="px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10" {...props}>
            {
                subSections.map((section, index) => {
                    return <HoverEffect key={index} idx={index} title={section.props?.title as string}
                        description={section.props?.description as string}
                        link={section.props?.link as string} />
                })
            }
        </Container>
    );
}


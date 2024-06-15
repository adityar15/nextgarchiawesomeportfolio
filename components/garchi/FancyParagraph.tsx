"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Container from "../ui/container";

export default function FancyParagraph({
    text,
    ...props
}: {
    text: string,
    [key: string]: unknown
}) {
    return (
        <Container>
            <TextGenerateEffect words={text} {...props} />
        </Container>
    )
}

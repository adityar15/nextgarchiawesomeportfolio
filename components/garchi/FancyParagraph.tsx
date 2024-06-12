"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function FancyParagraph({
    text,
    ...props
}: {
    text: string,
    [key: string]: unknown
}) {
    return (
        <div className="max-w-5xl p-2 mx-auto">
            <TextGenerateEffect words={text} {...props} />
        </div>
    )
}

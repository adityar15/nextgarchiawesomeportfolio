"use client";
import { MaskContainer } from "../ui/svg-mask-effect";

export default function SVGMaskParagraph({
    text
}: {
    text: string
}) {
    return (
        <div className="h-[40rem] w-full flex items-center justify-center  overflow-hidden">
            <MaskContainer
                revealText={
                    <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold">
                        {text}
                    </p>
                }
                className="h-[40rem] border rounded-md"
            >
                {text}
            </MaskContainer>
        </div>
    );
}

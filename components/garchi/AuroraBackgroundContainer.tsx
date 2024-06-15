"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FlipWords } from "../ui/flip-words";

type Props = {
    line_1: string
    line_2?: string
    words?: string
    is_flip: "yes" | "no",
    [key: string]: unknown
}


export default function AuroraBackgroundContainer({
    line_1, line_2, words, is_flip, ...props
}: Props) {

    let wordsArray = words ? words.split(",") : []
    
    return (
        <AuroraBackground {...props}>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4"
            >
                {
                    is_flip == "no" ? <>
                        <div className="text-3xl md:text-7xl font-bold text-white text-center">
                            {line_1}
                        </div>
                        <div className="font-extralight text-base md:text-4xl text-neutral-200 py-4">
                            {line_2}
                        </div>
                    </> : <>

                        <div className="h-[40rem] flex justify-center items-center px-4">
                            <div className="text-4xl mx-auto font-normal text-neutral-400">
                                {line_1}
                                <FlipWords words={wordsArray} /> <br />
                                {line_2}
                            </div>
                        </div>
                    </>
                }


                {/* <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
                    Debug now
                </button> */}
            </motion.div>
        </AuroraBackground>
    );
}

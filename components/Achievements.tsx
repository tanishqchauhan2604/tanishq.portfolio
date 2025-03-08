import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

export function Achievements() {
    return (
        <div className="mt-[6rem]">
            <div className="flex justify-center items-center w-full text-3xl mb-5 font-bold">
                <h1>Some extra stuff</h1>
            </div>
            <BentoGrid className="max-w-5xl mx-auto">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={i === 3 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>
        </div>
    );
}
const Skeleton = ({ imagePath }: { imagePath: string }) => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
        <img src={imagePath} alt="Achievement" className="object-cover w-full h-full rounded-xl" />
    </div>
);

const items = [
    
    {
        title: "ML Team Member at AISOC",
        description: "Conducted classes and events to spread the knowledge of Machine Learning.",
        header: <Skeleton imagePath="/ach/pp.jpg" />,
    },
  

    {
        title: "Strivers A2Z DSA Sheet",
        description: "Strengthening data structures and algorithms proficiency.",
        header: <Skeleton imagePath="/ach/tuf.png" />,
    },
    {
        title: "Relaython Participant",
        description: "Participated in Relaython organized by GFG Society and earned a certificate.",
        header: <Skeleton imagePath="/ach/relaython.jpeg" />,
    },
    {
        title: "LeetCode Stats?",
        description: "Solved 200+ problems on LeetCode",
        header: <Skeleton imagePath="/ach/lc.png" />,
    },
    {
        title: "Unstop",
        description: "Expanded knowledge by participating in various events on Unstop",
        header: <Skeleton imagePath="/ach/unstop.png" />,
    },
    {
        title: "NLP Research Exploration",
        description: "Explored research in Natural Language Processing, contributing to various applications.",
        header: <Skeleton imagePath="/ach/nlp.jpeg" />,
    },
    {
        title: "SWOC Contributor",
        description: "Tried to contributed to open-source projects in Social Winter of Code (SWOC) Season 4.",
        header: <Skeleton imagePath="/ach/swoc.jpeg" />,
    },
    {
        title: "Udemy Facial Recognition Certification",
        description: "Successfully completed a comprehensive course on facial recognition, gaining expertise in image processing and deep learning techniques.",
        header: <Skeleton imagePath="/ach/Udemy.jpeg" />,
    }
    
];

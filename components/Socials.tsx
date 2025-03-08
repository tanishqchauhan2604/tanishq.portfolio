import React from 'react'
import { Marquee } from './ui/marquee';
import { cn } from "@/lib/utils";


export function Socials() {
    return (
        <>
            <div className="flex justify-center items-center w-full text-3xl mt-3 font-bold pt-[3rem]">
                <h1>Connect with ME</h1>
            </div>
            <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </div>
        </>
    )
}

const ReviewCard = ({
    img,
    name,
    username,
    body,
    redirectTo,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
    redirectTo: string,
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <a href={redirectTo} target="_blank">
                <div className="flex flex-row items-center gap-2">
                    <img className="rounded-full" width="32" height="32" alt="" src={img} />
                    <div className="flex flex-col">
                        <figcaption className="text-sm font-medium dark:text-white">
                            {name}
                        </figcaption>
                        <p className="text-xs font-medium dark:text-white/40">{username}</p>
                    </div>
                </div>
                <blockquote className="mt-2 text-sm">{body}</blockquote>
            </a>
        </figure>
    );
};

const reviews = [
    {
        name: "LinkedIn",
        username: "@TanishqChauhan",
        body: "Connect with me on LinkedIn for professional networking!",
        img: "/socials/linkedin.webp",
        redirectTo: "https://www.linkedin.com/in/tanishq-chauhan-26oct2004/",
    },
    {
        name: "Github",
        username: "@tanishqchauhan2604",
        body: "Check out my GitHub profile for some cool projects!",
        img: "/socials/github-mark-white.png",
        redirectTo: "https://github.com/tanishqchauhan2604",
    },
    {
        name: "LeetCode",
        username: "@chauhantanishq255",
        body: "If you are wondering how good I am at DSA, check out my LeetCode profile!",
        img: "/socials/leetcode.png",
        redirectTo: "https://leetcode.com/u/chauhantanishq255/",
    },
    {
        name: "Twitter (X)",
        username: "@coldaatma",
        body: "Follow me on Twitter for some cool tweets and birbing!",
        img: "/socials/x.png",
        redirectTo: "https://x.com/coldaatma",
    },
    {
        name: "Instagram",
        username: "@tanishqchauhan2604",
        body: "Follow me on Instagram for some 'occasional' cool stories!",
        img: "/socials/instalogo-nobg.png",
        redirectTo: "https://www.instagram.com/tanishqchauhan2604/",
    },
    {
        name: "Spotify",
        username: "@Tanishq",
        body: "Follow me on Spotify for some cool playlists, let's vibe together!",
        img: "/socials/spotify.webp",
        redirectTo: "https://open.spotify.com/user/31vm5eh2ev2du4ivwnvjhotv4vri",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
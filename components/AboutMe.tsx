import { CardSpotlight } from "@/components/ui/card-spotlight";

export function AboutMe() {
    return (
        <>
            <div className="mb-[5rem] pt-[3rem]">
                <div className="flex justify-center items-center w-full text-3xl mt-5 font-bold">
                    <h1>A little about ME</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-5">
                    <CardSpotlight
                        colorss={[[164, 22, 35], [248, 94, 0]]}
                        className="m-1 h-[25rem]"
                        titlee={
                            <div className="text-xl font-bold relative z-20 mt-2 text-white">
                                 who am i
                            </div>
                        }
                        contentt={
                            <div>
                                <div className="text-xl font-bold relative z-20 mt-2 text-white">
                                     who am i
                                </div>
                                <p className="text-neutral-200 mt-4 relative z-20">
                                    Hey there! I’m <span className="font-bold text-white">Tanishq Chauhan</span>.
                                </p>
                                <p className="text-neutral-200 mt-4 relative z-20">
                                    A 21-year-old aspiring Software Engineer from India, passionate about solving real-world problems through code.
                                </p>
                                
                                <p className="text-neutral-200 mt-4 relative z-20">
                                    Currently seeking **Summer Internship Opportunities for 2025** where I can contribute, learn, and grow as a developer.
                                </p>
                                <p className="text-neutral-200 mt-4 relative z-20">
                                    When I’m not coding, you’ll find me exploring open-source projects, or diving into the latest advancements in AI & Web Development.
                                </p>
                            </div>
                        }
                        
                    />
                    <CardSpotlight
                        colorss={[[126, 46, 132], [209, 64, 129]]}
                        className="m-1 h-[25rem]"
                        titlee={
                            <div className="text-xl font-bold relative z-20 mt-2 text-white">
                                 what do i do
                            </div>
                        }
                        contentt={
                            <div>
                                <h1 className="text-xl font-bold relative z-20 mt-2 text-white">
                                     what do i do
                                </h1>
                                <p className="text-neutral-200 mt-4 relative z-20">
                                    I am currently pursuing my Bachelor of Technology in Computer Science and Engineering from Kalinga Institute of Industrial Technology.
                                </p>
                                <p className="text-neutral-200 mt-4 relative z-20">
                                    My journey into Development began in 2022 when my friend introduced me to the world of code.
                                </p>
                                <p className="text-neutral-200 mt-4 relative z-20">
                                    Since then, I have been learning and building cool projects to enhance my skills.
                                </p>
                            </div>
                        }
                    />
                    <CardSpotlight
                        colorss={[[0, 191, 178], [26, 94, 99]]}
                        className="m-1 h-[25rem]"
                        titlee={
                            <div className="text-xl font-bold relative z-20 mt-2 text-white">
                                 beyond code
                            </div>
                        }
                        contentt={
                            <div>
                                <h1 className="text-xl font-bold relative z-20 mt-2 text-white">
                                     beyond code
                                </h1>
                                <p className="text-neutral-200 mt-4 relative z-20">
                                    When I&apos;m not immersed in code, I enjoy playing chess, discovering new music, and exploring the outdoors.
                                </p>
                                <p className="text-neutral-200 mt-4 relative z-20">
                                    I value teamwork and am driven by a desire to constantly learn and refine my skills.
                                </p>
                                <p className="text-neutral-200 mt-4 relative z-20">
                                    Feel free to connect with me on LinkedIn or explore my projects below.
                                </p>
                            </div>
                        }
                    />
                </div>
            </div>
        </>
    );
}



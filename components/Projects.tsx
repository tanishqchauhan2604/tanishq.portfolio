import { IconVideo, IconPhoto } from "@tabler/icons-react";

export function Projects() {
    return (
        <>
            <div className="flex justify-center items-center w-full text-3xl mt-5 font-bold">
                <h1>Some of my Projects</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-[1rem] md:p-[5rem]">
                <div className="card lg:card-side bg-black shadow-xl border-2">
                    <figure>
                        <video controls>
                            <source src="/projects/sentimental.mp4" type="video/mp4" />
                        </video>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Sentiment Analysis</h2>
                        <p>A deep learning model that analyzes text sentiment, achieving high accuracy in positive, negative, and neutral classifications.</p>
                    </div>
                </div>

                <div className="card lg:card-side bg-black shadow-xl border-2">
                    <figure>
                        <video controls>
                            <source src="/projects/text_to_speech.mp4" type="video/mp4" />
                        </video>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Text-to-Speech</h2>
                        <p>An AI-powered tool that converts text into realistic speech using advanced deep learning techniques.</p>
                    </div>
                </div>

                <div className="card lg:card-side bg-black shadow-xl border-2">
                    <figure>
                        <video controls>
                            <source src="/projects/movie.webm" type="video/mp4" />
                        </video>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Movie Recommendation System</h2>
                        <p>A personalized movie recommendation system using collaborative filtering and machine learning algorithms.</p>
                    </div>
                </div>

                <div className="card lg:card-side bg-black shadow-xl border-2">
                    <figure>
                        <img src="/projects/cake.png" alt="Cake menu website" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Cake Menu Website</h2>
                        <p>A visually appealing menu-based website designed for displaying cake options and pricing.</p>
                    </div>
                </div>

                <div className="card lg:card-side bg-black shadow-xl border-2">
                    <figure>
                        <img src="/projects/Meditrack.png" alt="Medicine inventory management" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Medicine Inventory</h2>
                        <p>A personal medicine management system that tracks expiry dates and suggests alternatives when unavailable.</p>
                    </div>
                </div>
                <div className="card lg:card-side bg-black shadow-xl border-2">
                    <figure>
                        <img src="/projects/hand.jpg" alt="Hand Gesture Safety System" />
                    </figure>
                    <div className="card-body">
                    <h2 className="card-title">Hand Gesture Safety System</h2>
                        <p>An AI-powered system that detects specific hand gestures to signal danger and alert authorities, ensuring women's safety in real time.</p>
                     </div>
                </div>
                
            </div>
        </>
    );
}

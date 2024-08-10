"use client";
import React from "react";
import TextAndButtons from "./TextAndButtons";
import VideoSection from "./VideoSection";

const VideoToAction = () => {
    return (
        <div>
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-5 py-24 gap-10">
                    <TextAndButtons />
                    <VideoSection />
                </div>
            </section>
        </div>
    );
};

export default VideoToAction;

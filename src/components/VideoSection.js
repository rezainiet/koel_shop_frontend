"use client";
import React from "react";

const VideoSection = () => {
    return (
        <div className="md:w-1/2 w-full relative">
            <div className="relative pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
                <iframe
                    className="absolute top-0 left-0 w-full h-full rounded"
                    src="https://www.youtube.com/embed/KYULF49gEj0?si=n2VuvIqnwnuATGzn"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default VideoSection;

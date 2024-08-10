"use client";
import React from "react";

const TextAndButtons = () => {
    return (
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-start">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Koel Group &#8211; Towards Inclusive &amp; Sustainable Growth
            </h1>
            <p className="mb-8 leading-relaxed text-lg">
                Koel Group is dedicated to driving inclusive and sustainable growth. We integrate environmental stewardship with our business strategies to create lasting value for communities and future generations. Join us on our journey towards equitable opportunities and responsible development.
            </p>
            <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                    Learn More
                </button>
                <button className="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                    Our Initiatives
                </button>
            </div>
        </div>
    );
};

export default TextAndButtons;

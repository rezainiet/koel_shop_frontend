"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="text-white bg-gray-900 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">KoelGroup</span>
                </Link>

                {/* Toggle button for mobile view */}
                <button
                    className="md:hidden ml-auto text-gray-400"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                    >
                        <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                    </svg>
                </button>

                {/* Navigation links */}
                <div
                    className={`${isOpen ? "flex flex-col items-start bg-gray-800  top-16 right-0 w-full p-5 space-y-4 md:hidden" : "hidden"
                        } md:flex md:ml-auto md:flex-row md:space-x-5 md:items-center md:bg-transparent`}
                >
                    <Link href="/link1" className="hover:text-white">
                        First Link
                    </Link>
                    <Link href="/link2" className="hover:text-white">
                        Second Link
                    </Link>
                    <Link href="/link3" className="hover:text-white">
                        Third Link
                    </Link>
                    <Link href="/link4" className="hover:text-white">
                        Fourth Link
                    </Link>
                    <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base">
                        Button
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-1"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>

                {/* Navigation links */}
                {/* <div
                    className={`${isOpen ? "flex" : "hidden"
                        } md:flex md:ml-auto flex-wrap items-center text-base justify-center w-full md:w-auto`}
                >
                    <Link href="/link1" className="mr-5 hover:text-white">
                        First Link
                    </Link>
                    <Link href="/link2" className="mr-5 hover:text-white">
                        Second Link
                    </Link>
                    <Link href="/link3" className="mr-5 hover:text-white">
                        Third Link
                    </Link>
                    <Link href="/link4" className="mr-5 hover:text-white">
                        Fourth Link
                    </Link>
                    <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                        Button
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-1"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div> */}
            </div>
        </nav>
    );
};

export default Navbar;

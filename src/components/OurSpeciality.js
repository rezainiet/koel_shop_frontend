import Image from 'next/image';
import React from 'react';
import s1 from '../img/NEW-slider-01.jpg';

const OurSpeciality = () => {
    return (
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">

                    {/* Competitive Price Section */}
                    <div className="p-4 md:w-1/2 lg:w-1/3 w-full cursor-pointer">
                        <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors duration-300">
                            <Image
                                width={400}
                                height={300}
                                className="lg:h-48 md:h-36 w-full object-cover object-center"
                                src={s1}
                                alt="Competitive Price"
                            />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">OUR SPECIALITY</h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3 hover:ml-4 transition-all duration-300">Competitive Price</h1>
                                <p className="leading-relaxed mb-3 hover:ml-4 transition-all duration-300">
                                    In fact, the term ‘competitive price’ is used by all groups of manufacturers or traders or any type of sellers.
                                    How we are different is we ensure ‘the competitive price’ practically without compromising quality. When our
                                    products reach at your hands, your heart will feel it honestly.
                                </p>
                                <div className="flex items-center flex-wrap">
                                    <a className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0 hover:ml-4 transition-all duration-300">
                                        Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sample Production Section */}
                    <div className="p-4 md:w-1/2 lg:w-1/3 w-full cursor-pointer">
                        <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors duration-300">
                            <Image
                                width={400}
                                height={300}
                                className="lg:h-48 md:h-36 w-full object-cover object-center"
                                src={s1}
                                alt="Sample Production"
                            />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">OUR SPECIALITY</h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3 hover:ml-4 transition-all duration-300">Sample Production</h1>
                                <p className="leading-relaxed mb-3 hover:ml-4 transition-all duration-300">
                                    Don’t have a finished concept! Nothing to worry. You are in right platform just now. We can help you with our
                                    100% experienced, creative, and strong sample production team, where you can come out with a correct result of
                                    details same as you think in your mind. We maintain standard inspection independently so that you can get the
                                    best quality products as per your requirements.
                                </p>
                                <div className="flex items-center flex-wrap">
                                    <a className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0 hover:ml-4 transition-all duration-300">
                                        Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quality Control Section */}
                    <div className="p-4 md:w-1/2 lg:w-1/3 w-full cursor-pointer">
                        <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors duration-300">
                            <Image
                                width={400}
                                height={300}
                                className="lg:h-48 md:h-36 w-full object-cover object-center"
                                src={s1}
                                alt="Quality Control"
                            />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">OUR SPECIALITY</h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3 hover:ml-4 transition-all duration-300">Quality Control</h1>
                                <p className="leading-relaxed mb-3 hover:ml-4 transition-all duration-300">
                                    In fact, the term ‘competitive price’ is used by all groups of manufacturers or traders or any type of sellers.
                                    How we are different is we ensure ‘the competitive price’ practically without compromising quality. When our
                                    products reach at your hands, your heart will feel it honestly.
                                </p>
                                <div className="flex items-center flex-wrap">
                                    <a className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0 hover:ml-4 transition-all duration-300">
                                        Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OurSpeciality;

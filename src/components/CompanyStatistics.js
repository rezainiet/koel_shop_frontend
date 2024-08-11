import React from 'react';
import Image from 'next/image';
import {
    concern_icon,
    product_icon,
    employee_icon,
    experience_icon,
} from './images'; // Adjust the path as necessary

const stats = [
    {
        icon: concern_icon,
        value: '6+',
        label: 'Active Concerns',
        description: 'Our extensive network of active concerns ensures comprehensive coverage across industries.',
    },
    {
        icon: product_icon,
        value: '50+',
        label: 'Products',
        description: 'Diverse product offerings tailored to meet global market demands with quality and innovation.',
    },
    {
        icon: employee_icon,
        value: '780+',
        label: 'Employees',
        description: 'A dedicated workforce committed to excellence and delivering exceptional results.',
    },
    {
        icon: experience_icon,
        value: '14+',
        label: 'Years of Experience',
        description: 'Decades of expertise driving consistent growth and industry leadership.',
    },
];

const CompanyStatistics = () => {
    return (
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-white">
                        Our Glorious History
                    </h1>
                    <p className="lg:w-1/2 mx-auto leading-relaxed text-lg text-gray-300">
                        Aspiring to be one of Bangladesh&apos;s leading exporters and manufacturers of clothing, we
                        strive for excellence in every aspect of our business.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center -m-4 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="p-4 lg:w-1/4 md:w-1/2 w-full">
                            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                                <div className="mb-5">
                                    <div className="bg-gray-400 rounded-full p-3 mb-3 inline-block shadow-lg">
                                        <Image src={stat.icon} height={48} width={48} alt={stat.label} />
                                    </div>
                                    <h2 className="title-font font-bold text-4xl text-white">
                                        {stat.value}
                                    </h2>
                                    <p className="leading-relaxed text-gray-400">{stat.label}</p>
                                </div>
                                <p className="text-sm text-gray-400">{stat.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompanyStatistics;

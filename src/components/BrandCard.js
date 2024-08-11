// components/Card.js
import Image from 'next/image';

const Card = ({ cover, logo, name }) => {
    return (
        <div className="group w-[520px] relative bg-gray-900 rounded-xl overflow-hidden shadow-md transform transition duration-500 hover:scale-105 hover:shadow-xl">
            <div className="relative overflow-hidden h-72"> {/* Increased height */}
                <Image
                    src={cover}
                    alt={`${name} Cover`}
                    className="w-full h-full object-cover object-center transition duration-500 group-hover:opacity-80"
                    layout="fill"
                />
                <div className="absolute inset-0 bg-black  bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500">
                    <Image
                        src={logo}
                        alt={`${name} Logo`}
                        className="w-40 h-40 object-contain" // Larger logo size
                        width={160}
                        height={160}
                    />
                </div>
            </div>
            <div className="p-8"> {/* Increased padding */}
                <h2 className="text-white text-2xl font-semibold text-center mb-4 group-hover:text-indigo-400 transition duration-500">
                    {name}
                </h2>
            </div>
        </div>
    );
};

export default Card;

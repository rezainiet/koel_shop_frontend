"use client";
import { useEffect, useRef } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import {
    koel_shop_logo,
    arham_logo,
    jayqo_logo,
    koel_modish_logo,
    majdi_logo,
    anisha_logo,
    img2,
    arham_cover,
    jayqo_cover,
    koel_modish_cover,
    koel_shop_cover,
    majdi_cover,
} from './images'; // Assuming you export images from a central file
import Card from './BrandCard';

const OurConcern = () => {
    const glideRef = useRef(null);

    useEffect(() => {
        if (glideRef.current) {
            const glide = new Glide(glideRef.current, {
                type: 'carousel',
                focusAt: 'center',
                perView: 3,
                autoplay: 3000,
                breakpoints: {
                    640: {
                        perView: 2,
                    },
                    768: {
                        perView: 2,
                    },
                    1024: {
                        perView: 3,
                    },
                    1280: {
                        perView: 4,
                    },
                },
            }).mount();

            return () => glide.destroy();
        }
    }, []);

    const cards = [
        {
            cover: koel_shop_cover,
            logo: koel_shop_logo,
            name: "Koel Shop",
        },
        {
            cover: arham_cover,
            logo: arham_logo,
            name: "Arham",
        },
        {
            cover: jayqo_cover,
            logo: jayqo_logo,
            name: "Jayqo",
        },
        {
            cover: koel_modish_cover,
            logo: koel_modish_logo,
            name: "Koel Modish",
        },
        {
            cover: majdi_cover,
            logo: majdi_logo,
            name: "Majdi",
        },
        {
            cover: img2,
            logo: anisha_logo,
            name: "Anisha",
        },
    ];

    return (
        <div className='bg-[#111827]'>
            <div className='text-center font-bold text-3xl pb-12 flex items-center justify-center'>
                <div className='grid gap-5 hover:gap-2 duration-500'>
                    <div className='flex gap-5'>
                        <div className='bg-gray-700 w-0.5 h-12'></div>
                        <h1 className='hover:translate-x-5 cursor-pointer duration-500'>Our Concern</h1>
                    </div>
                    <div className='h-0.5 w-48 bg-gray-700 -mt-5'></div>
                </div>
            </div>
            <div className="glide bg-[#111827]" ref={glideRef}>
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        {cards.map((card, index) => (
                            <li key={index} className="glide__slide">
                                <Card cover={card.cover} logo={card.logo} name={card.name} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="glide__bullets flex justify-center mt-4" data-glide-el="controls[nav]">
                    {cards.map((_, index) => (
                        <button
                            key={index}
                            className="glide__bullet mx-1 w-3 h-3 rounded-full bg-gray-500"
                            data-glide-dir={`=${index}`}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurConcern;

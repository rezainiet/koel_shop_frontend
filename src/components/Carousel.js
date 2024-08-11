"use client";
import { useEffect, useRef } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css'; // Import Glide.js core styles
import '@glidejs/glide/dist/css/glide.theme.min.css'; // Import Glide.js theme styles
import Image from 'next/image';
import img1 from "../img/NEW-slider-01.jpg"
import img2 from "../img/NEW-slider-02.jpg"
import img3 from "../img/NEW-slider-03.jpg"
import img4 from "../img/NEW-slider-04.jpg"

const Carousel = () => {
    const glideRef = useRef(null);

    useEffect(() => {
        if (glideRef.current) {
            const glide = new Glide(glideRef.current, {
                type: 'carousel',
                focusAt: 'center',
                perView: 2,
                autoplay: 2000, // Autoplay every 3000ms (3 seconds)
                breakpoints: {
                    640: {
                        perView: 1,
                    },
                    768: {
                        perView: 2,
                    },
                    1024: {
                        perView: 3,
                    },
                },
            }).mount();

            return () => glide.destroy();
        }
    }, []);

    return (
        <div className="glide" ref={glideRef}>
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                    <li className="glide__slide">
                        <Image
                            src={img1}
                            alt="Slide 1"
                            layout="responsive"
                            width={1200}
                            height={500}
                            className="object-cover rounded-lg"
                        />
                    </li>
                    <li className="glide__slide">
                        <Image
                            src={img2}
                            alt="Slide 2"
                            layout="responsive"
                            width={1200}
                            height={500}
                            className="object-cover rounded-lg"
                        />
                    </li>
                    <li className="glide__slide">
                        <Image
                            src={img3}
                            alt="Slide 3"
                            layout="responsive"
                            width={1200}
                            height={500}
                            className="object-cover rounded-lg"
                        />
                    </li>
                    <li className="glide__slide">
                        <Image
                            src={img4}
                            alt="Slide 4"
                            layout="responsive"
                            width={1200}
                            height={500}
                            className="object-cover rounded-lg"
                        />
                    </li>
                    {/* Add more slides as needed */}
                </ul>
            </div>
            <div className="glide__bullets" data-glide-el="controls[nav]">
                <button className="glide__bullet" data-glide-dir="=0"></button>
                <button className="glide__bullet" data-glide-dir="=1"></button>
                <button className="glide__bullet" data-glide-dir="=2"></button>
                <button className="glide__bullet" data-glide-dir="=3"></button>
                {/* Add more bullets as needed */}
            </div>
        </div>
    );
};

export default Carousel;

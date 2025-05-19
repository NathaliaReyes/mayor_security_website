import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from '@/assets/images/patrol.jpg';
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <>
            {/* Hero Section */}
            <div className="md:container relative w-full h-96 md:h-[500px]">
                {/* Image with overlay - centrada en el eje Y con object-position */}
                <div className="relative h-full overflow-hidden">
                    <img
                        src={Image}
                        alt="Homepage Banner"
                        className="absolute inset-0 w-full h-full object-cover md:container"
                        loading="lazy"
                    />
                    {/* Overlay only on image */}
                    <div className="absolute inset-0 bg-black/70" />
                </div>

                {/* Text content - centrado verticalmente */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 md:px-8 xl:px-12 2xl:px-14 py-6 pointer-events-none">
                    <div className="md:w-2/3 text-center">
                        <h1 className="text-xl sm:text-4xl md:text-5xl font-bold mb-4 text-background">Professional Security Solutions for Your Peace of Mind</h1>
                        <p className="text-base sm:text-xl mb-6 text-background">Providing armed and unarmed security personnel for retail, commercial, events, and private security needs.</p>

                        {/* Botones organizados y alineados */}
                        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 pointer-events-auto">
                            <button className="text-background cursor-pointer bg-red-600 hover:bg-red-700 py-2 md:py-3 px-6 rounded-md font-bold text-base md:text-lg">
                                Our Services
                            </button>
                            <Link to="/Contact">
                                <button className="group cursor-pointer bg-red-600 text-background px-3 py-2 md:py-3 w-full rounded-md text-base md:text-lg hover:bg-red-700 transition-colors flex items-center justify-center shadow-lg">
                                    Contact Us
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </button>
                            </Link>
                            {/* <button className="group cursor-pointer bg-red-600 text-background px-3 py-2 md:py-3 rounded-md text-base md:text-lg hover:bg-red-700 transition-colors flex items-center justify-center shadow-lg">
                                Contact Us
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;
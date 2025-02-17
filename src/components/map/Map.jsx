import React, { useState, useEffect } from 'react';
import { Card } from 'flowbite-react';
import GoogleReview from '../home/GoogleReview';
import "../../styles/Fonts.css";
import { useTranslation } from "react-i18next";

const ResponsiveIframe = () => {

    // Initial state for iframe height
    const [iframeHeight, setIframeHeight] = useState('300px'); // Default height

    useEffect(() => {
        // Function to update height based on window width
        const updateHeight = () => {
            if (window.innerWidth < 640) { // Example breakpoint for 'sm'
                setIframeHeight('200px'); // Smaller screens
            } else if (window.innerWidth >= 640 && window.innerWidth < 1024) { // 'md' to 'lg'
                setIframeHeight('300px'); // Medium screens
            } else {
                setIframeHeight('400px'); // Larger screens
            }
        };

        // Update height on mount and window resize
        updateHeight();
        window.addEventListener('resize', updateHeight);

        // Cleanup listener on component unmount
        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.818320343149!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c63dd643fa75b%3A0x82634622fac345f9!2sMayor%20Security%20LLC!5e0!3m2!1ses!2sus!4v1738687444118!5m2!1ses!2sus"
            width="400"
            height={iframeHeight}
            className="border-0 w-full ml-2 mr-2 shadow-lg p-4"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    );
};

const LocationMap = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="flex flex-col md:flex-row">
                {/* Map section */}
                <div className="w-full lg:w-7/12 py-4">
                    <ResponsiveIframe />
                    {/* Text section */}
                    {/* <div className="text-center m-3">
                    <p className="md:text-lg text-base mt-2">
                        To schedule an appointment, you can reach us by phone, <a href="https://wa.me/17204682411" target="_blank" rel="noopener noreferrer" className=" text-green-500 hover:text-green-600">WhatsApp</a>, or fill out the form in our <a href="/Contact" className="text-blueMedium">Contact</a> section. <br /><br />We appreciate you choosing Mayor Security, LLC!
                    </p>
                </div> */}
                </div>

                {/* lOCATION SECTION */}
                <div className="lg:w-5/12 w-full my-3 md:my-auto  mx-auto text-center">
                    <div className='justify-evenly flex'>
                        <div className='flex-1'>
                            <h2 className="roboto600 md:text-xl text-lg font-bold md:mb-2">
                                <i className="fas fa-clock mr-2"></i>{t("hours")}
                            </h2>
                            <ul className="list-none leading-normal space-y-0.5">
                                <li><span className="font-bold roboto700">{t("mon-fri")} </span>8:00 - 16:30</li>
                                <li><span className="font-bold roboto700">{t("sat")} </span>8:00 - 12:00</li>
                                <li><span className="font-bold roboto700">{t("sun")} </span>{t("closed")}</li>
                            </ul>
                        </div>

                        <div className='flex-1 md:mx-1'>
                            <h2 className="md:text-xl text-lg font-bold roboto600 md:mb-2">
                                <i className="fas fa-envelope mr-2"></i>{t("contactUs")}
                            </h2>
                            <p>
                                <a className="text-blueMedium hover:text-blue-gray-600" href="tel:+17204682411">+1 (720) 468-2411</a>
                            </p>
                            <p>
                                <a className="text-blueMedium hover:text-blue-gray-600" href="mailto:billing@mayorsecurity.com">billing@mayorsecurity.com</a>
                            </p>
                        </div>
                    </div>

                    <div className='my-4'>
                        <h2 className="md:text-xl text-lg font-bold roboto600">
                            <i className="fas fa-map-marker-alt mr-2 mb-2"></i>{t("location")}
                        </h2>
                        <p>
                            15290 E 6th Ave Aurora, CO  80011<br />
                            Suite 290 USA <br />
                            <a className="text-blueMedium hover:text-blue-gray-600 flex justify-center font-semibold underline mt-2" href="https://www.google.com/maps/place/Mayor+Security+LLC/@39.7250689,-104.8137654,17z/data=!3m1!4b1!4m6!3m5!1s0x876c63dd643fa75b:0x82634622fac345f9!8m2!3d39.7250648!4d-104.8111905!16s%2Fg%2F11lz_9yyvd?hl=es&entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                                {t("getDir")} ⭢
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <div className='w-full flex justify-center py-2 md:py-4'>
                <GoogleReview />
            </div>
        </>
    );
};

export default LocationMap;
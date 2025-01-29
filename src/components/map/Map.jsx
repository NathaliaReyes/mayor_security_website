import React, { useState, useEffect } from 'react';
import { Card } from 'flowbite-react';
import GoogleReview from '../home/GoogleReview';

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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d529.9821255259652!2d-104.81129755540275!3d39.72506765533986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c631cba02d60f%3A0x89a31bc8906a610d!2sChambers%20Office%20Centre!5e0!3m2!1ses!2sus!4v1737664539075!5m2!1ses!2sus"
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
    return (
        <div className="flex flex-col md:flex-row">
            {/* Map section */}
            <div className="w-full lg:w-3/5 py-4">
                <ResponsiveIframe />
                {/* Text section */}
                {/* <div className="text-center m-3">
                    <p className="md:text-lg text-base mt-2">
                        To schedule an appointment, you can reach us by phone, <a href="https://wa.me/17204682411" target="_blank" rel="noopener noreferrer" className=" text-green-500 hover:text-green-600">WhatsApp</a>, or fill out the form in our <a href="/Contact" className="text-blueMedium">Contact</a> section. <br /><br />We appreciate you choosing Mayor Security, LLC!
                    </p>
                </div> */}
            </div>

            {/* lOCATION SECTION */}
            <div className="lg:w-2/5 w-full my-2 md:my-auto md:pl-8 mx-auto text-center">
                <div className='justify-evenly flex'>
                    <div className='flex-1'>
                        <h2 className="md:text-xl text-lg font-bold md:mb-2">
                            <i className="fas fa-clock mr-2"></i>Hours
                        </h2>
                        <ul className="list-none leading-normal space-y-0.5">
                            <li><span className="font-bold">Mon - Fri: </span>8:00 - 16:30</li>
                            <li><span className="font-bold">Sat: </span>8:00 - 12:00</li>
                            <li><span className="font-bold">Sun: </span>Closed</li>
                        </ul>
                    </div>

                    <div className='flex-1 md:ml-2'>
                        <h2 className="md:text-xl text-lg font-bold">
                            <i className="fas fa-phone mr-2"></i>Phone
                        </h2>
                        <p>
                            <a className="text-blueMedium hover:text-blue-gray-600" href="tel:+17204682411">+1 (720) 468-2411</a>
                        </p>
                    </div>
                </div>

                <div className='my-4'>
                    <h2 className="md:text-xl text-lg font-bold">
                        <i className="fas fa-map-marker-alt mr-2 mb-2"></i>Location
                    </h2>
                    <p>
                        15290 E 6th Ave Aurora, CO  80011<br />
                        Suite 290 USA <br />
                        <a className="text-blueMedium hover:text-blue-gray-600 flex justify-center font-semibold underline mt-2" href="https://www.google.com/maps/place/Chambers+Office+Centre/@39.7250677,-104.8112976,19.53z/data=!3m1!5s0x876c62e17ee3109d:0x3389b8a311d81572!4m15!1m8!3m7!1s0x876c631cb0816aa7:0xb1948f02ed63c5f!2sParking+lot,+15290+E+6th+Ave,+Aurora,+CO+80011!3b1!8m2!3d39.7250819!4d-104.8111263!16s%2Fg%2F11bw3xx0ym!3m5!1s0x876c631cba02d60f:0x89a31bc8906a610d!8m2!3d39.7250709!4d-104.8112258!16s%2Fg%2F11fntctyh4?entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                            Get Directions ⭢
                        </a>
                    </p>
                </div>
            </div>
            {/* <div className='w-full flex justify-center'>
                        <GoogleReview />
                    </div> */}
        </div>
    );
};

export default LocationMap;
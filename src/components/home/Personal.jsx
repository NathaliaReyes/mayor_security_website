import React from 'react';
//Images:
import Banner from '@/assets/home/portadams.jpg';

//Videos:
import video from '@/assets/home/Video_Mayor_Security.mp4';


import "../../styles/Fonts.css";
// import { Button } from "@/components/ui/button";

const Personal = () => {
    return (
        <div className='relative gap-6 justify-content-center items-center text-center px-8 py-4'>
            <div className='absolute inset-0' style={{ backgroundImage: `url(${Banner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className='absolute inset-0 bg-black opacity-90'></div>
            <div className="relative z-10 video-container mx-auto mb-6 flex justify-center">
                <video className="w-3/4 h-auto flex" controls>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-3">
                <div className="flex flex-col items-center mx-6 tracking-tight p-4 hover:shadow-lg rounded-xl text-gray-50">
                    <span id="targetId" className="roboto600 text-lg mt-4">
                        Reliable
                    </span>
                    <p className="roboto mt-1 text-center text-sm font-bold">
                        Our highly trained staff ensures safety at all times, always ready to act when needed.
                    </p>
                </div>
                <div className="flex flex-col items-center mx-6 tracking-tight p-4 hover:shadow-lg rounded-xl text-gray-50">
                    <span id="targetId" className="roboto600 text-lg mt-4">
                        Professional
                    </span>
                    <p className="roboto mt-1 text-center text-sm font-bold">
                        Our guards uphold professionalism, representing your company with respect and integrity.
                    </p>
                </div>
                <div className="flex flex-col items-center mx-6 tracking-tight p-4 hover:shadow-lg rounded-xl text-gray-50">
                    <span id="targetId" className="roboto600 text-lg mt-4 tracking-tight">
                        Vigilant
                    </span>
                    <p className="roboto mt-1 text-center text-sm font-bold">
                        Always alert, our guards identify risks early to prioritize your safety and security.
                    </p>
                </div>
                <div className="flex flex-col items-center mx-6 tracking-tight p-4 hover:shadow-lg rounded-xl text-gray-50">
                    <span id="targetId" className="roboto600 text-lg mt-4 tracking-tight">
                        Approachable
                    </span>
                    <p className="roboto mt-1 text-center text-sm font-bold">
                        Our guards foster open communication, ready to address any questions or concerns.
                    </p>
                </div>
                <div className="flex flex-col items-center mx-6 tracking-tight p-4 hover:shadow-lg rounded-xl text-gray-50">
                    <span id="targetId" className="roboto600 text-lg mt-4 tracking-tight">
                        Experienced
                    </span>
                    <p className="roboto mt-1 text-center text-sm font-bold">
                        With years of experience, our team handles diverse situations with skill and expertise.
                    </p>
                </div>
                <div className="flex flex-col items-center mx-6 tracking-tight p-4 hover:shadow-lg rounded-xl text-gray-50">
                    <span id="targetId" className="roboto600 text-lg mt-4 tracking-tight">
                        Adaptable
                    </span>
                    <p className="roboto mt-1 text-center text-sm font-bold">
                        We offer tailored solutions to meet unique needs and handle any security challenge.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Personal;
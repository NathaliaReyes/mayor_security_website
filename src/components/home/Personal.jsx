import React from 'react';
//Images:
import Banner from '@/assets/home/portadams.jpg';

//Videos:
import video from '@/assets/home/Video_Mayor_Security.mp4';

import "../../styles/Fonts.css";
import { useTranslation } from "react-i18next";
// import { Button } from "@/components/ui/button";

const Personal = () => {
    const { t } = useTranslation();
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
                        {t("reliable")}
                    </span>
                    <p className="roboto mt-1 text-center text-sm font-bold">
                        {t("reliableText")}
                    </p>
                </div>
                <div className="flex flex-col items-center mx-6 tracking-tight p-4 hover:shadow-lg rounded-xl text-gray-50">
                    <span id="targetId" className="roboto600 text-lg mt-4">
                        {t("professional")}
                    </span>
                    <p className="roboto mt-1 text-center text-sm font-bold">
                        {t("professionalText")}
                    </p>
                </div>
                <div className="flex flex-col items-center mx-6 tracking-tight p-4 hover:shadow-lg rounded-xl text-gray-50">
                    <span id="targetId" className="roboto600 text-lg mt-4 tracking-tight">
                        {t("vigilant")}
                    </span>
                    <p className="roboto mt-1 text-center text-sm font-bold">
                        {t("vigilantText")}
                    </p>
                </div>
                <div className="flex flex-col items-center mx-6 tracking-tight p-4 hover:shadow-lg rounded-xl text-gray-50">
                    <span id="targetId" className="roboto600 text-lg mt-4 tracking-tight">
                        {t("approachable")}
                    </span>
                    <p className="roboto mt-1 text-center text-sm font-bold">
                        {t("approachableText")}
                    </p>
                </div>
                <div className="flex flex-col items-center mx-6 tracking-tight p-4 hover:shadow-lg rounded-xl text-gray-50">
                    <span id="targetId" className="roboto600 text-lg mt-4 tracking-tight">
                        {t("experienced")}
                    </span>
                    <p className="roboto mt-1 text-center text-sm font-bold">
                        {t("experiencedText")}
                    </p>
                </div>
                <div className="flex flex-col items-center mx-6 tracking-tight p-4 hover:shadow-lg rounded-xl text-gray-50">
                    <span id="targetId" className="roboto600 text-lg mt-4 tracking-tight">
                        {t("adaptable")}
                    </span>
                    <p className="roboto mt-1 text-center text-sm font-bold">
                        {t("adaptableText")}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Personal;
import React from 'react';
import bg from '../../assets/home/bg-rustic.jpg';
import { Button } from "@/components/ui/button";
import "../../styles/Fonts.css";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from '@/components/LanguageSwitcher';

const BannerInfo = () => {
    const { t } = useTranslation();
    return (
        <div className='bg-gray-800 flex px-1 items-center justify-between md:px-4 py-2'>
            <LanguageSwitcher />
            <div className='flex items-center justify-self-center'>
                <i className="fas text-xs md:text-base fa-phone mx-1 md:mr-2 text-white"></i>
                <span  className='md:text-lg text-xs lg:text-xl mr-1 text-white lora500'>
                    <strong><a href="tel:+17204682411"> +1 (720) 468-2411</a></strong>
                </span>
            </div>
            <a href="/Contact">
                <Button className='lora500 md:m-2 lg:text-lg md:text-base text-xs font-bold border-white border-2 hover:shadow-lg hover:shadow-black/90 hover:text-gray-300 hover:bg-red-700 bg-red-700'>
                    {t("quote")}
                </Button>
            </a>

        </div>
    );
}

export default BannerInfo;
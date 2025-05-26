import React from 'react';
import bg from '../../assets/home/bg-rustic.jpg';
import { Button } from "@/components/ui/button";
import "../../styles/Fonts.css";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { Shield, Users, Building, Calendar, Award, Phone, Mail, MapPin, ChevronRight, Menu, X, Lock, Briefcase, ShieldCheck } from 'lucide-react';

const BannerInfo = () => {
    const { t } = useTranslation();
    return (
        // <div className='md:container bg-foreground flex px-1 items-center justify-between md:px-4 py-2'>
        //     <LanguageSwitcher />
        //     <div className='flex items-center justify-self-center'>
        //         <i className="fas text-xs md:text-base fa-phone mx-1 md:mr-2 text-white"></i>
        //         <span  className='md:text-lg text-xs lg:text-xl mr-1 text-white lora500'>
        //             <strong className='hidden sm:block'><a href="tel:+17204682411"> +1 (720) 468-2411</a></strong>
        //             <strong className='block sm:hidden'><a href="tel:+17204682411">(720) 468-2411</a></strong>
        //         </span>
        //     </div>
        //     <a href="/Contact">
        //         <Button className='lora500 md:m-2 lg:text-lg md:text-base text-xs font-semibold sm:font-bold border-white border-2 hover:shadow-lg hover:shadow-black/90 hover:text-gray-300 hover:bg-red-700 bg-destructive'>
        //             {t("quote")}
        //         </Button>
        //     </a>

        // </div>

        <div className='sticky top-0 bg-black z-40 transition-all duration-150 h-12 md:container'>
            <div className="flex items-center m-1">
                <div className="flex items-center space-x-1 md:space-x-4 ml-2">
                    <div className="flex items-center text-background">
                        <Phone size={16} className="mr-1"/>
                        <span className="lora500 text-sm cursor-pointer hidden md:block">+1 (800) 555-7890</span>
                    </div>
                    <div className="flex items-center text-background">
                        <Mail size={16} className="mr-1" />
                        <span className="lora500 text-sm cursor-pointer hidden md:block">contact@mayorsecurity.com</span>
                    </div>
                </div>
                <div className="space-x-2 md:space-x-3 text-background justify-end ml-auto mr-2">
                    <a href="/contact" className="text-sm hover:text-blue-300">Careers</a>
                    <a href="#" className="text-sm hover:text-blue-300">FAQ</a>
                    <a href="#" className="text-sm hover:text-blue-300">Client Portal</a>
                </div>
                <LanguageSwitcher/>
            </div>
      </div>
    )
};

export default BannerInfo;
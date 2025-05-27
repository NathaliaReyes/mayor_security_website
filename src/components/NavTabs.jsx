import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/logo/logo.png';
import { Separator } from "@/components/ui/separator";
import "../styles/Fonts.css";
import { useTranslation } from "react-i18next";
import { Shield, Users, Building, Calendar, Award, Phone, Mail, MapPin, ChevronRight, Menu, X, Lock, Briefcase, ShieldCheck } from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher';

function NavTabs() {
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState(location.pathname);
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        setCurrentPage(location.pathname);
    }, [location.pathname]);

    const { t } = useTranslation();

    return (
        <>
            {/* <nav className="flex bg-mainBg py-2">
                <div className="flex text-white m-1 ml-2 md:ml-6">
                    <img src={logo} alt="logo" className='md:h-28 md:w-28 sm:h-24 sm:w-24 h-16 w-16'></img>
                </div>
                <div className="flex-grow flex flex-col items-center justify-center pt-4">
                    <p className="lora600 text-lg sm:text-3xl md:text-4xl lg:text-5xl ">MAYOR SECURITY LLC</p>
                    <p className="lora400 text-xs md:text-base pt-2 pb-4">
                        "{t("slogan")}"
                    </p>
                    <div className="lora500 md:text-base text-sm md:flex space-x-8 justify-center hidden">
                        <Link to="/" className={currentPage === '/' ? 'font-bold block mt-4 md:inline-block md:mt-0 mr-4 hover:text-red-500 text-red-600' : 'block mt-4 md:inline-block md:mt-0 mr-4'}>{t("home")}</Link>
                        <Separator orientation="vertical" className="h-6" />
                        <Link to="/About" className={currentPage === '/About' ? 'font-bold block mt-4 md:inline-block md:mt-0 hover:text-red-500 mr-4 text-red-600' : 'block mt-4 md:inline-block md:mt-0 mr-4'}>{t("about")}</Link>
                        <Separator orientation="vertical" className="h-6" />
                        <Link to="/Contact" className={currentPage === '/Contact' ? 'font-bold block mt-4 md:inline-block md:mt-0 mr-4 hover:text-red-500 text-red-600' : 'block mt-4 md:inline-block md:mt-0 mr-4'}>{t("contact")}</Link>
                    </div>
                </div>
                <div className="block md:hidden ml-auto">
                    <button onClick={toggleMenu} className="flex flex-col justify-around items-center w-10 h-10 rounded-xl  bg-yellow-300 hover:bg-customGray p-2 mx-2">
                        <div className="w-3 h-0.5 bg-stone"></div>
                        <div className="w-6 h-0.5 bg-stone"></div>
                        <div className="w-3 h-0.5 bg-stone"></div>
                    </button>
                </div>
                <div className="md:flex hidden items-center flex-shrink-0 text-white m-1 mr-6">
                    <img src={logo} alt="logo" className='md:h-28 md:w-28 h-20 w-20 ml-1'></img>
                </div>
            </nav>
            <div className={`w-full ${isActive ? 'flex flex-col bg-mainBg' : 'hidden'}`} id="navMenu">
                <div className="lora500 lg:text-lg md:text-base sm:text-sm mr-5 ml-4 mb-2">
                    <Link to="/" onClick={toggleMenu} className={currentPage === '/' ? 'font-bold block mt-4 md:inline-block md:mt-0   mr-4' : 'block mt-4 md:inline-block md:mt-0  mr-4'}>{t("home")}</Link>
                    <Link to="/About" onClick={toggleMenu} className={currentPage === '/About' ? 'font-bold block mt-4 md:inline-block md:mt-0 mr-4' : 'block mt-4 md:inline-block md:mt-0 mr-4'}>{t("about")}</Link>
                    <Link to="/Contact" onClick={toggleMenu} className={currentPage === '/Contact' ? 'font-bold block mt-4 md:inline-block md:mt-0 mr-4' : 'block mt-4 md:inline-block md:mt-0 mr-4'}>{t("contact")}</Link>
                </div>
            </div> */}
            <header className="shadow-md py-2 md:py-3">
                <div className="flex pl-1 justify-between items-center">
                    {/* Logo y nombre de la empresa */}
                    <Link to="/" className="flex items-center font-bold text-dark hover:opacity-80 transition-opacity">
                        <img id="logo" src={logo} alt="logo" className='md:h-16 md:w-16 sm:h-14 sm:w-14 h-10 w-12'></img>
                        <span className='text-lg sm:text-lg md:text-xl lg:text-2xl'>MAYOR SECURITY LLC</span>
                    </Link>

                    {/* Botón de hamburguesa para dispositivos móviles */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="flex flex-col justify-around items-center w-10 h-10 rounded-xl bg-mainYellow hover:bg-customGray p-2 mx-2">
                            <div className="w-3 h-0.5 bg-stone"></div>
                            <div className="w-6 h-0.5 bg-stone"></div>
                            <div className="w-3 h-0.5 bg-stone"></div>
                        </button>
                    </div>

                    {/* Menú de navegación para pantallas medianas/grandes */}
                    <div className="hidden md:flex items-center">

                        {/* Enlaces a la derecha del botón */}
                        <div className="lora500 lg:text-lg md:text-base sm:text-sm flex mr-6">
                            <Link to="/" className={currentPage === '/' ? 'font-bold md:inline-block md:ml-4' : 'md:inline-block md:ml-4'}>{t("home")}</Link>
                            <Link to="/About" className={currentPage === '/About' ? 'font-bold md:inline-block md:ml-4' : 'md:inline-block md:ml-4'}>{t("about")}</Link>
                            <Link to="/Contact" className={currentPage === '/Contact' ? 'font-bold md:inline-block md:ml-4' : 'md:inline-block md:ml-4'}>{t("contact")}</Link>
                        </div>
                        {/* Botón primero en su posición original */}
                        {/* <div className="mr-6"> */}
                        <Link to="/Contact">
                            <button className="bg-red-600 hover:bg-red-700 text-background font-bold py-2 px-6 rounded-md">
                                {t("quote")}
                            </button>
                        </Link>
                        {/* </div> */}
                    </div>
                </div>

                {/* Menú desplegable para móviles cuando isActive es true */}
                <div className={`w-full ${isActive ? 'block' : 'hidden'} md:hidden bg-background border-t mt-4`}>
                    <div className="flex flex-col px-4 py-2">
                        <Link to="/" onClick={toggleMenu} className={currentPage === '/' ? 'font-bold py-2' : 'py-2'}>{t("home")}</Link>
                        <Link to="/About" onClick={toggleMenu} className={currentPage === '/About' ? 'font-bold py-2' : 'py-2'}>{t("about")}</Link>
                        <Link to="/Contact" onClick={toggleMenu} className={currentPage === '/Contact' ? 'font-bold py-2' : 'py-2'}>{t("contact")}</Link>
                        <div className="py-2">
                            <button className="bg-red-600 hover:bg-red-700 text-background font-bold py-2 px-4 rounded-md w-full">
                                Request Quote
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );

}

export default NavTabs;
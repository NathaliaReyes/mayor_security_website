import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo/logo.png';
import { Separator } from "@/components/ui/separator";


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

    return (
        <nav className="flex items-center md:justify-between bg-mainBg py-2">
            <div className="flex text-white m-1 ml-2 md:ml-6">
                <img src={logo} alt="logo" className='md:h-28 md:w-28 sm:h-24 sm:w-24 h-16 w-16'></img>
            </div>
            <div className="flex-grow flex flex-col items-center justify-center pt-4">
                <h1 className="leading-none extra-bold text-lg sm:text-3xl md:text-4xl lg:text-5xl tracking-tight">MAYOR SECURITY LLC</h1>
                <p className="text-xs md:text-base pb-4">
                    "Your Safety is Our Priority"
                </p>
                <div className="md:text-base text-sm md:flex space-x-8 justify-center hidden">
                    <Link to="/" className={currentPage === '/' ? 'font-bold block mt-4 md:inline-block md:mt-0 mr-4 hover:text-red-500 text-red-600' : 'block mt-4 md:inline-block md:mt-0 mr-4'}>Home</Link>
                    <Separator orientation="vertical" className="h-6" />
                    <Link to="/About" className={currentPage === '/About' ? 'font-bold block mt-4 md:inline-block md:mt-0 hover:text-red-500 mr-4 text-red-600' : 'block mt-4 md:inline-block md:mt-0 mr-4'}>About Us</Link>
                    <Separator orientation="vertical" className="h-6" />
                    <Link to="/Contact" className={currentPage === '/Contact' ? 'font-bold block mt-4 md:inline-block md:mt-0 mr-4 hover:text-red-500 text-red-600' : 'block mt-4 md:inline-block md:mt-0 mr-4'}>Contact Us</Link>
                </div>
            </div>
            <div className="block md:hidden ml-auto">
                <button onClick={toggleMenu} className="flex flex-col justify-around items-center w-10 h-10 rounded-xl  bg-gray-500 hover:bg-customGray p-2 mx-2">
                    <div className="w-3 h-0.5 bg-stone"></div>
                    <div className="w-6 h-0.5 bg-stone"></div>
                    <div className="w-3 h-0.5 bg-stone"></div>
                </button>
            </div>
            <div className="md:flex hidden items-center flex-shrink-0 text-white m-1 mr-6">
                <img src={logo} alt="logo" className='md:h-28 md:w-28 h-20 w-20 ml-1'></img>
            </div>
        </nav>
    );

}

export default NavTabs;
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
        <nav className="flex items-center justify-around flex-wrap bg-mainBg py-2">
            <div className="flex items-center flex-shrink-0 text-white m-1">
                <img src={logo} alt="logo" className='md:h-28 md:w-28 h-20 w-20 ml-1'></img>
            </div>
            <div className="block md:hidden mr-2">
                <button onClick={toggleMenu} className="flex flex-col justify-around items-center w-10 h-10 rounded-full mt-2 mb-2 bg-customWhite hover:bg-customGray p-2">
                    <div className="w-3 h-0.5 bg-stone"></div>
                    <div className="w-6 h-0.5 bg-stone"></div>
                    <div className="w-3 h-0.5 bg-stone"></div>
                </button>
            </div>
            <div className="text-center pt-4">
                <h1 className="leading-none extra-bold text-5xl tracking-tight">MAYOR SECURITY LLC</h1>
                <p className="text-sm pb-4">
                    "Your Safety is Our Priority"
                </p>
                {/* <Separator className="my-2" /> */}
                <div className="md:text-base text-sm flex space-x-8 justify-center">
                    <Link to="/" className={currentPage === '/' ? 'font-bold block mt-4 md:inline-block md:mt-0 mr-4 hover:text-red-500 text-red-600' : 'block mt-4 md:inline-block md:mt-0 mr-4'}>Home</Link>
                    <Separator orientation="vertical" className="h-6" />
                    <Link to="/About"  className={currentPage === '/About' ? 'font-bold block mt-4 md:inline-block md:mt-0 hover:text-red-500 mr-4 text-red-600' : 'block mt-4 md:inline-block md:mt-0 mr-4'}>About Us</Link>
                    <Separator orientation="vertical" className="h-6" />
                    <Link to="/Contact"  className={currentPage === '/Contact' ? 'font-bold block mt-4 md:inline-block md:mt-0 mr-4 hover:text-red-500 text-red-600' : 'block mt-4 md:inline-block md:mt-0 mr-4'}>Contact Us</Link>
                </div>
            </div>
            <div className="flex items-center flex-shrink-0 text-white m-1">
                <img src={logo} alt="logo" className='md:h-28 md:w-28 h-20 w-20 ml-1'></img>
            </div>
        </nav>
    );

}

export default NavTabs;
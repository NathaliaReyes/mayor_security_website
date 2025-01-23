import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo/logo.png';
import { Separator } from "@/components/ui/separator";


function NavTabs() {
    const currentPage = useLocation().pathname;
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        let pageTitle = '';
        switch (currentPage) {
            case '/':
                pageTitle = 'Home';
                break;
            case '/About':
                pageTitle = 'About';
                break;
            case '/Contact':
                pageTitle = 'Contact Us';
                break;
            default:
                pageTitle = "Mayor Security, LLC."
                break;
        }
        document.title = `${pageTitle} | Mayor Security, LLC.`
    }, [currentPage]);

    return (
        <nav className="flex items-center justify-between flex-wrap bg-mainBg">
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
            <div className="space-y-2 text-center mt-2">
                <h1 className="leading-none extra-bold text-5xl mt-4">MAYOR SECURITY LLC</h1>
                <p className="text-sm ">
                    "Your Safety is Our Priority"
                </p>
                <Separator className="my-2" />
                <div className={`w-full ${isActive ? 'block' : 'hidden'} md:block md:flex md:items-center md:w-auto`} id="navMenu">
                    <div className="lg:text-lg md:text-base sm:text-sm md:flex-grow mr-5 ml-2 mb-2 flex items-center space-x-4">
                        <Link to="/" onClick={toggleMenu} className={currentPage === '/' ? 'font-bold block mt-4 md:inline-block md:mt-0 text-mainYellow hover:text-mainBrown mr-4' : 'block mt-4 md:inline-block md:mt-0 text-mainYellow hover:text-clear mr-4'}>Home</Link>
                        <Separator orientation="vertical" className="h-6" />
                        <Link to="/About" onClick={toggleMenu} className={currentPage === '/About' ? 'font-bold block mt-4 md:inline-block md:mt-0 text-mainYellow hover:text-mainBrown mr-4' : 'block mt-4 md:inline-block md:mt-0 text-mainYellow hover:text-clear mr-4'}>About Us</Link>
                        <Separator orientation="vertical" className="h-6" />
                        <Link to="/Contact" onClick={toggleMenu} className={currentPage === '/Contact' ? 'font-bold block mt-4 md:inline-block md:mt-0 text-mainYellow hover:text-mainBrown mr-4' : 'block mt-4 md:inline-block md:mt-0 text-mainYellow hover:text-clear mr-4'}>Contact Us</Link>
                    </div>
                </div>
            </div>
            <div className="flex items-center flex-shrink-0 text-white m-1">
                <img src={logo} alt="logo" className='md:h-28 md:w-28 h-20 w-20 ml-1'></img>
            </div>
        </nav>
    );

}

export default NavTabs;